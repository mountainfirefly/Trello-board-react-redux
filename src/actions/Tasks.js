import { ADD_TASK } from './types'

export const addTask = (value) => {
  return {
    type: ADD_TASK,
    value,
  }
}
