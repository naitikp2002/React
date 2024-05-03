import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

function App() {
  const AddTodohandler=(text: string)=>{
    console.log(text);
  }
  const todos=[{id:23, text:"buy toys"},{id:23, text:"pay bills"}]
  return (
    <div className="App">
      <NewTodo addTodo={AddTodohandler}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
