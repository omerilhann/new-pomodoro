import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 minutes in seconds
  const [breakTimeLeft, setBreakTimeLeft] = useState(300); // 5 minutes in seconds
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval = null;
    if (timerRunning) {
      interval = setInterval(() => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning]);

  useEffect(() => {
    if (timeLeft === 0 && !isBreak) {
      setIsBreak(true);
      setTimeLeft(breakTimeLeft);
    } else if (timeLeft === 0 && isBreak) {
      setIsBreak(false);
      setTimeLeft(1500);
    }
  }, [timeLeft, isBreak, breakTimeLeft]);

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handleStop = () => {
    setTimerRunning(false);
  };

  const handleReset = () => {
    setTimerRunning(false);
    setIsBreak(false);
    setTimeLeft(1500);
    setBreakTimeLeft(300);
  };

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div className="timer">
        <div className="time-left">
          {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toLocaleString("en-US", {
            minimumIntegerDigits: 2,
            useGrouping: false,
          })}
          {isBreak ? " (Break)" : " (Work)"}
        </div>
        <div className="buttons">
          {timerRunning ? (
            <button onClick={handleStop}>Stop</button>
          ) : (
            <button onClick={handleStart}>Start</button>
          )}
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
