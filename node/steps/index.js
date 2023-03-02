// Here is the implmentation logic for each step, you can create either functions or generic
// clases... you get the idea.
const steps = {
  email_notify_parties: (data) => {
    console.log('Sending email to parties...', data)
    return { exit_code: 'success', data: { foo: 'bar' } } // Standard but optional return format
  },
  party_a_signs: (data) => {
    console.log('Party a signed...', data)
    // If no data is returned, the default exit_code will be success as long as the http response
    // is in the 200s
  },
  party_b_signs: (data) => {
    console.log('Party b signed...', data)
  },
  send_signed_email_confirmation: (data) => {
    console.log('All parties have signed, flow finished 😀', data)
  }
}

// This function is in case you don't need a specific implementation for a step
export const defaultFunction = (_) => {}
export default steps
