import { connect } from 'react-redux'

import { BoardsView } from '../components'

import { addBoard } from '../actions'

const mapStateToProps = (state) => {
  const { boards } = state.boards

  return {
    boards
  }
}

const BoardsList = connect(mapStateToProps, {
  addBoard
})(BoardsView)

export { BoardsList }

