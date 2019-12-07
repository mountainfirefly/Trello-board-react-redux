import React from 'react'

import { AddBoard } from './index'

import { TasksList } from '../containers'

const BoardsView = (props) => {
  const { boards } = props

  return (
    <div>
      <AddBoard addBoard={props.addBoard} />
      {
        boards.map((board, index) => {
          return (
            <div key={index} className='board-view'>
              <p>{board.name}</p>
              <TasksList boardId={board.id} />
            </div>
          )
        })
      }
    </div>
  )
}

export { BoardsView }
