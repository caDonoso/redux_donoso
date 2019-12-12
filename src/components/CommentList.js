import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { getTodoSelected } from '../utils'

const CommentList = ({ comments }) => {
  let todos = useSelector(state => state.todos);
  let id_todo_selected = getTodoSelected(todos);
  return (
  <div>
    <ul>
    {comments.map(comment =>
      id_todo_selected === comment.id_todo ?
      <Card className="cardContainer" style={{ width: '18rem' }}>
        <Card.Body>
          <Comment
            key={comment.toString()}
            {...comment} /> 
        </Card.Body>
      </Card> : ''
    )}
    </ul>
  </div>
  )}

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
}

export default CommentList
