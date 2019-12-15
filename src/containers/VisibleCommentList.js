import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import { editComment, updateComment } from '../actions'

const getComments = (comments) => {
  return comments;
}

const mapStateToProps = state => ({
  comments: getComments(state.comments)
})

const mapDispatchToProps = dispatch => ({
  editComment: id => dispatch(editComment(id)),
  updateComment: (id, text) => dispatch(updateComment(id, text)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentList)
