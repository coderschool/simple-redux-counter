import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const num = useSelector((state) => state.todoCount);
  return (
    <div className="App">
      <h1>I've been clicked {num} times</h1>
      <button
        onClick={() =>
          dispatch({
            type: "increment",
          })
        }
      >
        Click me
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "decrement",
          })
        }
      >
        Don't Click Me
      </button>
    </div>
  );
}

export default App;
