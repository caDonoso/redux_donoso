import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { Card } from 'react-bootstrap';
import { Transition, animated } from 'react-spring/renderprops';

import './App.css';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => (
  <div>
    <ul>
    {todos.map(todo =>
      <Transition
        native
        items={todo.enabled}
        from={{opacity: 0}}
        enter={{opacity: 1}}
        leave={{opacity: 0}}
        config={{ duration: 500 }}
        key={todo.todo_id}
      >
        {show => show && (props => (
          <animated.div style={props}>
            <Card>
              <Card.Body style={{'textAlign': 'center'}}>
                <Todo
                  {...todo}
                  toggleTodo={() => toggleTodo(todo.todo_id)}
                  deleteTodo={() => deleteTodo(todo.todo_id)}/>
              </Card.Body>
            </Card>
          </animated.div>
        ))}
      </Transition>
    )}
    </ul>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    completed: PropTypes.bool.isRequired,
    selected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired
}

export default TodoList
