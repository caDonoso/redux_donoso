import React from 'react'
import { connect } from 'react-redux'
import { addComment } from '../actions'
import { Button, Form, Row, Col } from 'react-bootstrap';

import './style.css';

const AddComment = ({ dispatch }) => {
  let input

  return (
    <div>
        <Row className="justify-content-md-center">
            <Form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()) {
                return
                }
                dispatch(addComment(input.value))
                input.value = ''
            }}>
                <Form.Label>Add a comment</Form.Label>
                <Col>
                    <Form.Control type="text" ref={node => input = node} />
                </Col>
                <Col>
                    <Button className="btnAdd" variant="primary" type="submit">Add</Button>
                </Col>
            </Form>
        </Row>
    </div>
  )
}

export default connect()(AddComment)
