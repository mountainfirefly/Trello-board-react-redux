import { connect } from 'react-redux'

import { BoardsView } from '../components'

import {
  addBoard,
  editBoard,
  setEditBoardId,
  deleteBoard
} from '../actions'

const mapStateToProps = (state) => {
  const { boards, editBoardId } = state.boards

  return {
    boards,
    editBoardId
  }
}

const BoardsList = connect(mapStateToProps, {
  addBoard,
  editBoard,
  setEditBoardId,
  deleteBoard
})(BoardsView)

export { BoardsList }

