import { ADD_COMMENT, DELETE_COMMENT } from '../actions/types'

const INITIAL_STATE = {
  comments: []
}

const CommentsReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: [
          ...state.comments,
          action.value
        ]
      }
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter((comment) => {
          return comment.id !== action.value
        })
      }
    default:
      return state
  }
}

export { CommentsReducer }
