import React, { useState } from 'react'

import { statuses } from '../config'

const AddTask = (props) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [status, setStatus] = useState(statuses[0].id)

  const onSubmit = () => {
    props.addTask({
      title,
      description,
      status,
      createdAt: Date.now(),
      id: Date.now(),
      boardId: props.boardId
    })

    setTitle('')
    setDescription('')
    setStatus(statuses[0].id)
  }

  return (
    <div className='add_task_container'>
      <p>Add a Task</p>
      <input
        placeholder='Enter Task Title'
        value={title}
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <input
        placeholder='Enter Description'
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <select
        value={status}
        onChange={(e) => {
          setStatus(e.target.value)
        }}
      >
        {statuses.map((statusVal) => {
          return (
            <option value={statusVal.id}>{statusVal.name}</option>
          )
        })}
      </select>
      <button onClick={onSubmit}>Add Task</button>
    </div>
  )
}

export { AddTask }
