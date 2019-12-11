import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import Footer from './Footer'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <div>
        <Todo
        key={todo.id}
        {...todo}
        onClick={() => toggleTodo(todo.id)}
        />
        <Footer />
      </div>
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
