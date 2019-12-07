import { connect } from 'react-redux'

import { TasksView } from '../components'
import { addTask } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const { tasks } = state.tasks

  return {
    tasks: tasks.filter((task) => {
      return task.boardId === ownProps.boardId
    })
  }
}

const TasksList = connect(mapStateToProps, {
  addTask
})(TasksView)

export { TasksList }
