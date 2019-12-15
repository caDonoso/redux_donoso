import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form} from 'react-bootstrap'

import './App.css';

const Comment = ({ text, editComment}) => {
  return (
  <div> 
    <Form className="form-inline">
      <p style={{
        'marginBottom': '5px',
        'fontSize': '18px'
      }}>
        {text}
      </p>
      <Button variant="warning" onClick={() => editComment()}>Editar</Button>
    </Form>
  </div>
  )
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  comment_id: PropTypes.number.isRequired
}

export default Comment 