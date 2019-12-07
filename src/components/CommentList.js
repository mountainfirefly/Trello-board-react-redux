import React from 'react'

import { AddComment } from './index'

const CommentsView = (props) => {
  const { comments, taskId } = props
  
  return (
    <div>
      <AddComment
        addComment={props.addComment}
        taskId={taskId}
      />
      {
        comments.map((comment) => {
          return (
            <div>
              <p>{comment.text}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export { CommentsView }
