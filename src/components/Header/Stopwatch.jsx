import React from "react";
import { useStopwatch } from "react-timer-hook";

export const MyStopwatch = () => {
  const {
    totalSeconds,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  } = useStopwatch({ autoStart: true });

  const formatTime = time => {
    return time < 10 ? `0${time}` : time;
  };

  return (
    <div
      style={{ textAlign: "center", marginLeft: "20px", marginTop: "-45px", opacity: "0%" }}
    >
      <h1>react-timer-hook</h1>
      <p>Stopwatch Demo</p>
      <div style={{ fontSize: "30px" }}>
        <span style={{ fontSize: "30px", color: "blue" }}>
          {formatTime(minutes)}
        </span>
        :
        <span style={{ fontSize: "30px", color: "blue" }}>
          {formatTime(seconds)}
        </span>
      </div>
      <p>{isRunning ? "Running" : "Not running"}</p>
      <button onClick={start} disabled={isRunning}> 
      </button>
    </div>
  );
};