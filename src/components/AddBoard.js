import React, { useState } from 'react'

const AddBoard = (props) => {
  const [name, setName] = useState()

  const onSubmit = () => {
    props.addBoard(name)
    setName('')
  }

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
      <button onClick={onSubmit}>Add Board</button>
    </div>
  )
}

export { AddBoard }
