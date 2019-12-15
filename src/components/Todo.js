import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'


import './App.css';


const Todo = ({ toggleTodo, deleteTodo, completed, text}) => (
  <div>
    <p
      onClick={toggleTodo}
      style={{
        textDecoration: completed ? 'line-through' : 'none',
        'marginBottom': '5px',
        'fontSize': '18px',
        'color': 'black',
      }}
    >{text}</p>
    <Button variant="danger" onClick={() => deleteTodo()}>Delete</Button>
  </div>
)

Todo.propTypes = {
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
}

export default Todo
