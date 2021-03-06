import React from 'react';
import NewProjectForm from './components/todoList/NewProjectForm';
import TodoList from './components/todoList/TodoList';

function App() {
  return (
    <div className="App">
      <NewProjectForm />
      <TodoList />
    </div>
  );
}

export default App;
