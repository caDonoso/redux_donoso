import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'


import './App.css';


const Todo = ({ onClick, completed, text }) => (
  <ListGroup.Item
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none',
      'margin-bottom': '5px'
    }}
  >
    <p> {text} </p>
    <Button variant="danger" style={{'margin-left': '5px'}}>-</Button>
  </ListGroup.Item>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
