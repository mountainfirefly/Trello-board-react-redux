import { ADD_TASK, EDIT_TASK, DELETE_TASK } from '../actions/types'

const INITIAL_STATE = {
  tasks: []
}

const TasksReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [
          ...state.tasks,
          action.value
        ]
      }
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.id) {
            return action.value
          }

          return task
        })
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => {
          return task.id !== action.value
        })
      }
    default:
      return state
  }
}

export { TasksReducer }
