import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isDisabled, setIsDisabled] = useState(false);
  const increase = () => {
    setCount(count + 1);
  };

  const decrease = () => {
    setCount(count - 1);
  };

  const toggle = () => {
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <button data-testid="minus-button" disabled={isDisabled} onClick={decrease}>
          -
        </button>
        <button data-testid="plus-button" disabled={isDisabled} onClick={increase}>
          +
        </button>
      </header>
      <button
        data-testid="on/off-button"
        style={{
          backgroundColor: "blue",
        }}
        onClick={toggle}
      >
        on/off
      </button>
    </div>
  );
}

export default App;
