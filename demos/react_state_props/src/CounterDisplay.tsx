import React from "react";

interface CounterDisplayProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={onIncrement} style={{ margin: "5px" }}>
        +
      </button>
      <button onClick={onDecrement} style={{ margin: "5px" }}>
        -
      </button>
      <button onClick={onReset} style={{ margin: "5px" }}>
        Reset
      </button>
    </div>
  );
};

export default CounterDisplay;
