import React, { Component } from 'react'

//Components
import Footer from './Footer'
import Welcome from '../containers/Welcome'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import AddComment from '../containers/AddComment'
import VisibleCommentList from '../containers/VisibleCommentList'
import { Transition } from 'react-spring/renderprops';

//Styles
import './App.css';

class App extends Component {
  state = {
    showCommentsContainer: false,
  }

  toggle = e => this.setState({ showCommentsContainer: true });
  

  render(){
    return (
      <div className="container-fluid section-container">
        <div className="row justify-content-md-center">
          <div className="col-md-12 col-sm-12">
            <Welcome />
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div id="section-task" className="col-md-5 col-sm-12">
            <AddTodo toggle={this.toggle} />
            <VisibleTodoList />
            <Footer />
          </div>
            <Transition
              items={this.state.showCommentsContainer}
              from={{ opacity: 0 }}
              enter={{ opacity: 1 }}
              leave={{ opacity: 0 }}
              config={{ delay: 250, duration: 1000 }}
            >
              {toggle => 
                toggle 
                  ? props => <div style={props} id="section-comment" className="col-md-5 col-sm-12">
                    <AddComment />
                    <VisibleCommentList />
                  </div>
                  : props => ''
              }
            </Transition>
        </div>
      </div>);
  }
}

export default App
