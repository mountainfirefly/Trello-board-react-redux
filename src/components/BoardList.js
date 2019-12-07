import React from 'react'

import { AddBoard } from './index'

import { TasksList } from '../containers'

const BoardsView = (props) => {
  const { boards, editBoardId } = props
  
  return (
    <div>
      <AddBoard
        addBoard={props.addBoard}
        editBoard={props.editBoard}
        editBoardId={editBoardId}
        boards={boards}
      />
      {
        boards.map((board, index) => {
          return (
            <div key={index} className='board-view'>
              <p>{board.name}</p>
              <button onClick={() => props.setEditBoardId(board.id)}>Edit</button>
              <button onClick={() => props.deleteBoard(board.id)}>Delete</button>
              <TasksList boardId={board.id} />
            </div>
          )
        })
      }
    </div>
  )
}

export { BoardsView }
