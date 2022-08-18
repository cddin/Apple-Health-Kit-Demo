import { SET_STEPS } from './types';

export const setSteps = stepList => {
  return {
    type: SET_STEPS,
    payload: stepList
  }
}