import React from "react";

interface Todo {
  todo: {
    id: string;
    text: string;
  }[];
  deleteTodo: (id: string) => void;
}
const TodoList: React.FC<Todo> = (props) => {
  return (
    <>
      <h2>TodoList</h2>
      {props.todo.map((to) => (
        <div onClick={()=>props.deleteTodo(to.id)} key={to.id}>{to.text}</div>
      ))}
    </>
  );
};

export default TodoList;
