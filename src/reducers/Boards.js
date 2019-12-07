import { ADD_BOARD, EDIT_BOARD, DELETE_BOARD, SET_EDIT_BOARD_ID } from '../actions/types'

const INITIAL_STATE = {
  boards: [],
  editBoardId: ''
}

const BoardsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_BOARD:
      return {
        ...state,
        boards: [
          ...state.boards,
          action.value
        ]
      }
    case EDIT_BOARD:
      return {
        ...state,
        boards: state.boards.map((board) => {
          if (board.id === action.id) {
            return action.value
          }

          return board
        }),
        editBoardId: ''
      }
    case DELETE_BOARD:
      return {
        ...state,
        boards: state.boards.filter((board) => {
          return board.id !== action.value
        })
      }
    case SET_EDIT_BOARD_ID:
      return {
        ...state,
        editBoardId: action.value
      }
    default:
      return state
  }
}

export { BoardsReducer }
