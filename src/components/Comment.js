import React from 'react'
import PropTypes from 'prop-types'
import { Button, Form} from 'react-bootstrap'

import './App.css';

const Comment = ({ text, editComment}) => {
  return (
  <div> 
    <Form style={{'justifyContent': 'flex-end'}}>
      <p style={{
        'marginBottom': '5px',
        'fontSize': '15px'
      }}>
        {text}
      </p>
      <Button size="sm" style={{'marginLeft': '5px'}} variant="warning" onClick={() => editComment()}>Editar</Button>
    </Form>
  </div>
  )
}

Comment.propTypes = {
  text: PropTypes.string.isRequired,
  comment_id: PropTypes.number.isRequired
}

export default Comment 