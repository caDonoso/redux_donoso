import React from 'react'

//Components
import Footer from './Footer'
import Welcome from '../containers/Welcome'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddComment from '../containers/AddComment'
import VisibleCommentList from '../containers/VisibleCommentList'
import { Row, Col } from 'react-bootstrap'

//Styles
import './App.css';

const App = () => (
  <div>
    <Row>
      <Welcome />
    </Row>
    <Row>
      <Col>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </Col>

      <Col>
        <AddComment />
        <VisibleCommentList />
      </Col>
    </Row>
  </div>
)

export default App
