import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap';

import './App.css';

const Link = ({ active, children, onClick }) => (
    <Button
       onClick={onClick}
       disabled={active}
       style={{
           marginLeft: '4px',
       }}
       size="sm"
       variant='dark'
    >
      {children}
    </Button>
)

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link
