import React from 'react'

import { AddTask } from './index'

import { statuses } from '../config'
import { CommentsList } from '../containers'

const TasksView = (props) => {
  const { tasks } = props
  const taskBlocks = tasks.reduce((soFar, value) => {
    if (!soFar[value.status]) {
      soFar[value.status] = []
    }

    soFar[value.status] = [
      ...soFar[value.status],
      value
    ]

    return soFar
  }, {})

  return (
    <div>
      <AddTask
        boardId={props.boardId}
        addTask={props.addTask}
      />
      {Object.keys(taskBlocks).map((status) => {
        const tasksBelongToStatus = taskBlocks[status]
        const statusVal = statuses.find((val) => {
          return val.id === status
        })

        return (
          <div>
            <p>{statusVal.name}</p>
            <div>
              {tasksBelongToStatus.map((task) => {
                return (
                  <div className='task-view'>
                    <p>Status: {statusVal.name ? statusVal.name : ''}</p>
                    <p>{task.title}</p>
                    <CommentsList taskId={task.id} />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export { TasksView }
