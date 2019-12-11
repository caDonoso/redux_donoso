import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import { Card } from 'react-bootstrap';

const CommentList = ({ comments }) => (
  <div>
    <ul>
    {comments.map((comment, index) =>
      <Card className="cardContainer">
        <Card.Body>
          <Comment
            key={comment.toString()}
            {...comment} /> 
        </Card.Body>
      </Card>
    )}
    </ul>
  </div>
)

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  //toggleTodo: PropTypes.func.isRequired
}

export default CommentList
