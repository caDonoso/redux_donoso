import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import { toggleTodoSelected } from '../actions'
import { Button, Form, Row, DropdownButton, Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { getTodoSelected } from '../utils'

import './style.css';

const AddComment = ({ dispatch }) => {
  let input; //Store the input text value
  let todos = useSelector(state => state.todos);
  let id_todo_selected = getTodoSelected(todos);
  return (
    <div>
        {todos.length !== 0 ?
            <div>
                <Row>
                    <DropdownButton style={{'marginBottom': "10px"}} id="dropdown-basic-button" title="Task selector">
                        {todos.map(todo =>
                            todo.enabled ?
                            <Dropdown.Item key={todo.todo_id} onClick={() => dispatch(toggleTodoSelected(todo.todo_id))}> {todo.text} </Dropdown.Item> : ''
                        )}
                    </DropdownButton>
                    {id_todo_selected !== undefined ?
                        todos.map(todo =>
                            todo.todo_id === id_todo_selected ?
                            <p key={todo.todo_id} style={{
                                'color': 'white', 
                                'marginLeft': '5px',
                                'marginTop': '7px'
                                }}>
                            Task selected: {todo.text}
                            </p> : ''
                    ) : ''}
                </Row>
                <Row>
                    {id_todo_selected !== undefined ? 
                        <Form className="form-inline" onSubmit={e => {
                            e.preventDefault()
                            if (!input.value.trim()) {
                            return
                            }
                            dispatch(addComment(input.value, id_todo_selected))
                            input.value = ''
                        }}>
                            <Form.Control style={{'width': '150px', 'marginTop': '10px'}} type="text" ref={node => input = node} placeholder="Add a comment" />
                            <Button className="btnAdd" variant="primary" type="submit">Add</Button>
                        </Form> : ''
                    }
                    
                </Row> 
            </div> : ''}
    </div>
  )
}

export default connect()(AddComment)
