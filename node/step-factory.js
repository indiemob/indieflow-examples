import steps, { defaultFunction } from './steps/index.js'

// This will load the step implementation for the given step
// if not found it will return an empty function
const stepFactory = (stepName) => {
  return steps[stepName] || defaultFunction
}

export default stepFactory
