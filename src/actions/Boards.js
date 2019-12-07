import { ADD_BOARD } from './types'

export const addBoard = (name) => {
  return {
    type: ADD_BOARD,
    value: {
      name,
      createdAt: Date.now(),
      id: Date.now()
    }
  }
}