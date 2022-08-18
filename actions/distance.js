import { SET_DISTANCE } from './types';

export const setDistance = value => {
  return {
    type: SET_DISTANCE,
    payload: value
  }
}