import React from "react";

interface Todo {
  todos: {
    id: number;
    text: string;
  }[];
}
const TodoList: React.FC<Todo> = (props) => {
  return (
    <>
      <h2>TodoList</h2>
      {props.todos.map((todo) => (
        <div>{todo.text}</div>
      ))}
    </>
  );
};

export default TodoList;
