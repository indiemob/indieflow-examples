import { createHash } from 'crypto'

// This method is to check if the incoming request is coming from the right source
// From here we need to:
// * Encode a json formatted version of the context and input data (lets call it payload)
// * Concatenate the "payload" with the signature key and create a SHA256 hash representation
// * The resulting SHA256 hash should be equal to the incoming signature
export const validateInputRequest = async ({ context, data, signature }, signatureKey) => {
  const payload = { context, data }
  const message = `${JSON.stringify(payload)}${signatureKey}`
  const hash = createHash('sha256').update(message, 'utf-8').digest('hex').toString('hex')
  return hash == signature;
}
