import { ADD_BOARD, EDIT_BOARD, SET_EDIT_BOARD_ID, DELETE_BOARD } from './types'

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

export const editBoard = (value) => {
  return {
    type: EDIT_BOARD,
    value,
    id: value.id
  }
}

export const setEditBoardId = (value) => {
  return {
    type: SET_EDIT_BOARD_ID,
    value
  }
}

export const deleteBoard = (value) => {
  return (dispatch, getState) => {
    const state = getState()
    const { tasks } = state.tasks

    const taskBelongToThisBoard = tasks.filter((task) => {
      return task.boardId === value
    })

    if (!taskBelongToThisBoard.length) {
      dispatch({
        type: DELETE_BOARD,
        value
      })
    } else {
      alert('You can\'t delete this board because you have pending tasks in it.')
    }
  }
}