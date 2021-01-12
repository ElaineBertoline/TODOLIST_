import React from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList.js';

function App() {
  return (
    <div className="App">
     <span className="title"> To Do List</span> <br />
      <TodoList />
    </div>
  );
}

export default App;
