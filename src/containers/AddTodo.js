import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Form, Row, Col } from 'react-bootstrap';

import './style.css';

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <Row className="justify-content-md-center">
        <Form onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}>
          <Form.Label>Add a task</Form.Label>
          <Col>
            <Form.Control type="text" ref={node => input = node} />
            <Button className="btnAdd" type="submit">Add</Button>
          </Col>
        </Form>
      </Row>
      
    </div>
  )
}

export default connect()(AddTodo)
