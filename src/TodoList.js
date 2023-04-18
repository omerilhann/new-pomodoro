import React from "react";

function TodoList(props) {
  return (
    <ul className="todo-list">
      {props.todos.map((todo, index) => (
        <li
          key={index}
          className={todo.completed ? "completed" : ""}
          style={{ color: todo.color }}
        >
          <span onClick={() => props.onToggleCompleted(index)}>
            {todo.text}
          </span>
          <button onClick={() => props.onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
