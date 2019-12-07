import { ADD_COMMENT } from './types'

export const addComment = (value) => {
  return {
    type: ADD_COMMENT,
    value
  }
}
