import React, { Component } from 'react'
import NewProjectForm from './components/todoList/NewProjectForm'
import TodoList from './components/todoList/TodoList'
// import { createStore } from 'redux'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewProjectForm />
        <TodoList />
      </div>
    )
  }
}

export default App
