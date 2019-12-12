import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import { toggleTodoSelected } from '../actions'
import { Button, Form, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { getTodoSelected } from '../utils'

import './style.css';

const AddComment = ({ dispatch }) => {
  let input;
  let todos = useSelector(state => state.todos);
  let id_todo_selected = getTodoSelected(todos);
  return (
    <div>
        {todos.length !== 0 ?
            <div>
                <Row>
                    <DropdownButton style={{'margin-bottom': "10px"}} id="dropdown-basic-button" title="Task selector">
                        {todos.map(todo =>
                            <Dropdown.Item key={todo.id} onClick={() => dispatch(toggleTodoSelected(todo.todo_id))}> {todo.text} </Dropdown.Item>
                        )}
                    </DropdownButton>
                </Row>
                <Row>
                    <Form className="form-inline" onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()) {
                        return
                        }
                        dispatch(addComment(input.value, id_todo_selected))
                        input.value = ''
                    }}>
                        <Form.Control className="inputAdd" type="text" ref={node => input = node} placeholder="Add a comment" />
                        <Button className="btnAdd" variant="primary" type="submit">Add</Button>
                    </Form>
                </Row> 
            </div> : ''}
    </div>
  )
}

export default connect()(AddComment)
