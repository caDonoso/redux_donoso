import React from 'react'

//Components
import Footer from '../containers/Footer'
import AddTodo from '../containers/AddTodo'
import AddComment from '../containers/AddComment'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleCommentList from '../containers/VisibleCommentList'


//Styles
import './App.css';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <AddComment />
    <VisibleCommentList />
  </div>
)

export default App
