import React from 'react'

//Components
import NavBar from './NavBar'
import Home from '../containers/Home'
import AddTodo from '../containers/AddTodo'
import AddComment from '../containers/AddComment'
import VisibleTodoList from '../containers/VisibleTodoList'
import VisibleCommentList from '../containers/VisibleCommentList'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


//Styles
import './App.css';

const App = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/addTodo" component={AddTodo}/>
      <Route path="/addComment" component={AddComment}/>
      <Route path="/viewTodoList" component={VisibleTodoList}/>
      <Route path="/viewComments" component={VisibleCommentList}/>
      <Route path="/addTodo" component={AddTodo}/>
    </Switch>
  </Router>
)

export default App
