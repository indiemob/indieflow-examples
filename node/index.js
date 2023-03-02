import express from 'express'
import stepFactory from './step-factory.js'
import { validateInputRequest } from './util.js'

const app = express()
app.use(express.json())

const port = 3000

// Configured webhook url
app.post('/hook', async (req, res) => {
  const body = req.body
  const { context, data, signature } = body
  console.log('Input request received', body)
  const signatureKey = process.env.SIGNATURE_KEY // whk_blablabla
  const validRequest = await validateInputRequest({ context, data, signature }, signatureKey || '')

  if (!validRequest) {
    res.status(400).json({ error: 'Invalid input request, please verify the signature' })
    return
  }
  const step = stepFactory(context.step_name)
  return res.json(step(data))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
