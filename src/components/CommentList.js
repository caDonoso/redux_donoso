import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import { ListGroup, Button } from 'react-bootstrap';

const CommentList = ({ comments }) => (
  <div className="row justify-content-md-center">
      <ListGroup>
        {comments.map((comment, index) =>
          <div className="col-sm">
            <ListGroup.Item>
              <Comment
                key={comment.toString()}
                {...comment} />
              <Button key={index.toString()} className="btn-dark" variant="danger">Delete</Button>  
            </ListGroup.Item>
          </div>
        )}
      </ListGroup>
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
