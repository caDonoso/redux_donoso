import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ListGroup } from 'react-bootstrap'
import { Card } from 'react-bootstrap';

import './App.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <div>
    <ul>
    {todos.map(todo =>
      <Card className="cardContainer" style={{ width: '18rem' }}>
        <Card.Body style={{'text-align': 'center'}}>
          <Todo
            key={todo.todo_id}
            {...todo}
            toggleTodo={() => toggleTodo(todo.todo_id)}
            deleteTodo={() => deleteTodo(todo.todo_id)}/>
        </Card.Body>
      </Card>
    )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
