import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { BoardsReducer, TasksReducer, CommentsReducer } from './reducers'

const reducers = combineReducers({
  boards: BoardsReducer,
  tasks: TasksReducer,
  comments: CommentsReducer 
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store