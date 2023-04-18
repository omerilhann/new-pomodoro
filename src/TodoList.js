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
            {todo.text} <div class="icon-container">
<img src="dog-icon.png" alt="dog icon" class="icon"/>
</div>
          </span>
          <button onClick={() => props.onDelete(index)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
