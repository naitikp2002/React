import React, { useState } from "react";

type NewTodoProps = {
  addTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const [todoText, setTodoText] = useState("");

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const trimmedTodoText = todoText.trim();
    if (trimmedTodoText.length > 0) {
      props.addTodo(trimmedTodoText);
      setTodoText(""); // Clear the input field after adding a todo
    }
  };

  const todoInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  return (
    <div>
      <form onSubmit={todoSubmitHandler}>
        <div>
          <label htmlFor="todo-text">Enter Task</label>
          <input
            type="text"
            id="todo-text"
            value={todoText}
            onChange={todoInputChangeHandler}
          />
        </div>
        <button type="submit">ADD TODOs</button>
      </form>
    </div>
  );
};

export default NewTodo;