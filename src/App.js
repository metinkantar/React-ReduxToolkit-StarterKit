import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./redux/features/counter/counterSlice";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  return (
    <div className="App">
      <header className="App-header">
        <span className="meka">Created by @MeKa</span>
        <img src={logo} className="App-logo" alt="logo" />

        <div className="card text-center bg-dark">
          <div className="card-header">Counter Example With Redux Toolkit</div>
          <div className="card-body">
            <button
              className="btn btn-outline-success fs-2 me-3"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
            <span>{count}</span>
            <button
              className="btn btn-outline-danger fs-2 ms-3"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
          </div>
          <div className="card-footer">
            <div className="input-group input-group-sm mb-3">
              <input
                type="text"
                className="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-sm"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(e.target.value)}
              />
            </div>

            <button
              className="btn btn-outline-success btn-sm"
              onClick={() =>
                dispatch(incrementByAmount(Number(incrementAmount) || 0))
              }
            >
              Add Amount
            </button>
            <button className="btn btn-outline-danger btn-sm ms-3" onClick={() =>
                dispatch(incrementAsync(Number(incrementAmount) || 0))
              }>
              Add Async
            </button>
          </div>
        </div>

        <span className="mt-5">
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>,<span> and </span>
          <a
            className="App-link"
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bootstrap 5.1.3
          </a>
        </span>

      </header>
    </div>
  );
}

export default App;
