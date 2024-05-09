import { useState } from "react";
import classes from "./ToDoList.module.scss";

export function ToDoList() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(event) {
    event.preventDefault();
    const todo = event.target.elements.todo.value;
    setTodos((todos) => [...todos, todo]);
    event.target.reset();
  }

  function resetTodo() {
    setTodos([]);
  }

  function handleRemoveTodo(index) {
    setTodos((todos) => todos.filter((_, i) => i !== index));
  }

  return (
    <div className={classes.todolist}>
      <form onSubmit={handleAddTodo}>
        <input data="todo-input" name="todo" />
        <button type="submit">Add</button>
        <button onClick={resetTodo}>Reset</button>
      </form>
      <ul data="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button
              className={classes.button}
              onClick={() => handleRemoveTodo(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
