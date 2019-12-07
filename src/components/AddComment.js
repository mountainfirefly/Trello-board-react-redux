import React, { useState } from 'react'

const AddComment = (props) => {
  const [comment, setComment] = useState('')

  const onSubmit = () => {
    props.addComment({
      text: comment,
      id: Date.now(),
      createdAt: Date.now(),
      taskId: props.taskId
    })
    setComment('')
  }

  return (
    <div>
      <p>Add comment</p>
      <input
        value={comment}
        placeholder={'Enter your comment here...'}
        onChange={(e) => setComment(e.target.value)}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            onSubmit()
          }
        }}
      />
    </div>
  )
}

export { AddComment }
