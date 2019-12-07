import React, { useState, useEffect } from 'react'

const AddBoard = (props) => {
  const { editBoardId, boards } = props
  const [name, setName] = useState('')

  const getBoard = (id) => {
    return boards.find((board) => {
      return board.id === id
    }) || {}
  }
  const onSubmit = () => {
    if (editBoardId) {
      const toBeEditBoard = getBoard(editBoardId)

      props.editBoard({
        ...toBeEditBoard,
        name
      })
    } else {
      props.addBoard(name)
    }

    setName('')
  }

  useEffect(() => {
    if (editBoardId) {
      const toBeEditBoard = getBoard(editBoardId)

      setName(toBeEditBoard.name)
    }
  }, [editBoardId])

  return (
    <div>
      <input
        placeholder='Enter Board Name'
        value={name}
        onChange={(e) => {
          setName(e.target.value)
        }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onSubmit()
          }
        }}
      />
      <button onClick={onSubmit}>{editBoardId ? 'Edit' : 'Add' } Board</button>
    </div>
  )
}

export { AddBoard }
