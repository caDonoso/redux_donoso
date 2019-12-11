import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ListGroup } from 'react-bootstrap'

import './App.css';

const TodoList = ({ todos, toggleTodo }) => (
  <ListGroup className="listTodos">
    {todos.map(todo =>
      <div style={{'display': 'inline'}}>
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        />
      </div>
    )}
  </ListGroup>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
