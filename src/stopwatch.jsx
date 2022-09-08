import { useEffect, useReducer } from 'react';
import { useState } from 'react';
import './style.css'

  const initialState = {
    isRunning: false,
    time: 0,
  };
  // state => newState 
  const reducer = (state, action) => {
      switch (action.type) {
        case "start":
          return { ...state, isRunning: true };
        case "stop":
          return { ...state, isRunning: false };
        case "reset":
          return { isRunning: false, time: 0 };
        case "tick":
          return { ...state, time: state.time + 1 };
        default:
          throw new Error();
      }
  }
  
  export const Stopwatch = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    useEffect(() => {
      if (!state.isRunning) return;
  
      const interval = setInterval(() => dispatch({ type: "tick" }), 1000);
      return () => {
        clearInterval(interval);
      };
    }, [state.isRunning]);
  
    return (
      <div>
        <h1>{state.time}s</h1>
          <button onClick={() => dispatch({ type: "start" })}>Start</button>
          <button onClick={() => dispatch({ type: "stop" })}>Stop</button>
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    );
  }