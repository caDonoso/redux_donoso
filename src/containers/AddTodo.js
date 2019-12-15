import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import { Button, Form, Row} from 'react-bootstrap';
import { Spring } from 'react-spring/renderprops';

import './style.css';

const AddTodo = ({ dispatch, toggle }) => {
  let input

  return (
    <Spring
      from={{opacity: 0}}
      to={{opacity: 1}}
      config={{ delay: 500, duration: 1000}}
    >
      { props => (
          <div style={props}>
              <Row>
                <Form className="form-inline" onSubmit={e => {
                  e.preventDefault()
                  if (!input.value.trim()) {
                    return
                  }
                  toggle()
                  dispatch(addTodo(input.value))
                  input.value = ''
                }}>
                  <Form.Control className="inputAdd" type="text" ref={node => input = node} placeholder="Add a task" />
                  <Button className="btnAdd" type="submit">Add</Button>
                </Form>
              </Row>
          </div>
      ) }
    </Spring>
  )
}

export default connect()(AddTodo)
