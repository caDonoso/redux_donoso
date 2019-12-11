import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Form, Row} from 'react-bootstrap';

import './style.css';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Row>
        <Form className="form-inline" onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <Form.Control className="inputAdd" type="text" ref={node => input = node} placeholder="Add a task" />
          <Button className="btnAdd" type="submit">Add</Button>
        </Form>
      </Row>
      
    </div>
  )
}

export default connect()(AddTodo)
