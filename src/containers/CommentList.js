import { connect } from 'react-redux'

import { CommentsView } from '../components'

import { addComment } from '../actions'

const mapStateToProps = (state, ownProps) => {
  const { comments } = state.comments

  return {
    comments: comments.filter((comment) => {
      return comment.taskId === ownProps.taskId
    })
  }
}

const CommentsList = connect(mapStateToProps, {
  addComment
})(CommentsView)

export { CommentsList }
