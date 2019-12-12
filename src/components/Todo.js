import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'


import './App.css';


const Todo = ({ toggleTodo, deleteTodo, completed, text}) => (
  <div>
    <p
      onClick={toggleTodo}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        'margin-bottom': '5px',
        'font-size': '18px'
      }}
    >{text}</p>
    <Button className="btn-block" variant="danger" style={{'margin-left': '5px'}} onClick={() => deleteTodo()}>Delete</Button>
  </div>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
