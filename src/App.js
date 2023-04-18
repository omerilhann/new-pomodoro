import React, { useState } from "react";
import TodoList from "./TodoList";
import PomodoroTimer from "./PomodoroTimer";

function App() {
  const [todos, setTodos] = useState([]);
  const [currentTodo, setCurrentTodo] = useState("");
  const [pomodoroRunning, setPomodoroRunning] = useState(false);
  const [pomodoroSeconds, setPomodoroSeconds] = useState(0);
  const [pomodoroMinutes, setPomodoroMinutes] = useState(25);
  const [breakSeconds, setBreakSeconds] = useState(0);
  const [breakMinutes, setBreakMinutes] = useState(5);

  const addTodo = () => {
    setTodos([...todos, { text: currentTodo, completed: false }]);
    setCurrentTodo("");
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addTodo();
    }
  };

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleToggleCompleted = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleStartPomodoro = (minutes) => {
    setPomodoroRunning(true);
    setPomodoroSeconds(0);
    setPomodoroMinutes(minutes);
  };

  const handleStartBreak = (minutes) => {
    setPomodoroRunning(true);
    setBreakSeconds(0);
    setBreakMinutes(minutes);
  };

  const handleStopPomodoro = () => {
    setPomodoroRunning(false);
  };

  const handlePomodoroTick = () => {
    if (pomodoroSeconds > 0) {
      setPomodoroSeconds(pomodoroSeconds - 1);
    } else if (pomodoroMinutes > 0) {
      setPomodoroMinutes(pomodoroMinutes - 1);
      setPomodoroSeconds(59);
    } else {
      setPomodoroRunning(false);
    }
  };

  const handleBreakTick = () => {
    if (breakSeconds > 0) {
      setBreakSeconds(breakSeconds - 1);
    } else if (breakMinutes > 0) {
      setBreakMinutes(breakMinutes - 1);
      setBreakSeconds(59);
    } else {
      setPomodoroRunning(false);
    }
  };

  return (
    <div className="App">
      <h1>To-Do List and Pomodoro Timer</h1>
      <div className="container">
        <div className="todo-container">
          <h2>To-Do List</h2>
          <div className="todo-input">
            <input
              type="text"
              placeholder="Enter a task"
              value={currentTodo}
              onChange={(e) => setCurrentTodo(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={addTodo}>Add</button>
          </div>
          <TodoList
            todos={todos}
            onDelete={handleDelete}
            onToggleCompleted={handleToggleCompleted}
          />
        </div>
        <div className="pomodoro-container">
          <h2>Pomodoro Timer</h2>
          </div>
          </div>
          </div>)
}

export default App 