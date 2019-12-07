import { createStore, combineReducers } from 'redux'

import { BoardsReducer, TasksReducer, CommentsReducer } from './reducers'

const reducers = combineReducers({
  boards: BoardsReducer,
  tasks: TasksReducer,
  comments: CommentsReducer 
})

const store = createStore(reducers)

export default store