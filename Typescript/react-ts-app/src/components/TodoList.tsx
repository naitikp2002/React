import React from "react";

interface Todo {
  todo: {
    id: string;
    text: string;
  }[];
}
const TodoList: React.FC<Todo> = (props) => {
  return (
    <>
      <h2>TodoList</h2>
      {props.todo.map((to) => (
        <div>{to.text}</div>
      ))}
    </>
  );
};

export default TodoList;
