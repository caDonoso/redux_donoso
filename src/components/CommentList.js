import React from 'react'
import PropTypes from 'prop-types'
import Comment from './Comment'
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { getTodoSelected } from '../utils'
import { Transition, animated } from 'react-spring/renderprops';
import { Button, Form} from 'react-bootstrap'

import './App.css';

const CommentList = ({ comments, editComment, updateComment }) => {
  let todos = useSelector(state => state.todos);
  let id_todo_selected = getTodoSelected(todos);
  let input;
  console.log("id_todo_selected: ", id_todo_selected);
  return (
  <div>
    <ul>
    {comments.map(comment =>
        <Transition
        native
        items={comment}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
        config={{ duration: 500 }}
      >
        {show => show && (props => (
          id_todo_selected === comment.id_todo ?
          <animated.div style={props} key={comment.text}>
              <Card>
                <Card.Body style={{'textAlign': 'center'}}>
                  {comment.edit_mode ? 
                    <Form className="form-inline" onSubmit={e => {
                      e.preventDefault()
                      if (!input.value.trim()) {
                        return
                      }
                      console.log("input.value: ", input.value)
                      updateComment(comment.comment_id, input.value)
                      input.value = ''
                    }}>
                      <Form.Control className="inputAdd" type="text" ref={node => input = node} defaultValue={comment.text} />
                      <Button className="btnAdd" type="submit" variant="success">Guardar</Button>
                    </Form>
                    :
                    <Comment
                    key={comment.toString()}
                    
                    {...comment}
                    editComment={() => editComment(comment.comment_id)}/> 
                  }
                  
                </Card.Body>
              </Card>
          </animated.div> : ''
        ))}
      </Transition>
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
