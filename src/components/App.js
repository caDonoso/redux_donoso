import React from 'react'

//Components
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddComment from '../containers/AddComment'
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
