import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { useState } from "react";

interface Todo {
  id: string;
  text: string;
}
function App() {
  const [todoText, setTodoText] = useState<Todo[]>([]);
  const deleteTodo=(id:string) => {
    setTodoText((pre) => {
      return pre.filter((todo) => todo.id!== id);
    });
  }
  const AddTodohandler = (text: string) => {
    console.log(text);
    setTodoText((pre) => {
      return [...pre, { id: Math.random().toString(), text: text }];
    });
  };
  // const todos=[{id:23, text:"buy toys"},{id:23, text:"pay bills"}]
  return (
    <div className="App">
      <NewTodo addTodo={AddTodohandler} />
      <TodoList todo={todoText} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
