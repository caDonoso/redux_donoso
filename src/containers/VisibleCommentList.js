import { connect } from 'react-redux'
import CommentList from '../components/CommentList'

const getComments = (comments) => {
  return comments;
}

const mapStateToProps = state => ({
  comments: getComments(state.comments)
})

export default connect(
  mapStateToProps,
)(CommentList)
