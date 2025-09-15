import React from "react";
import CounterDisplay from "./CounterDisplay";

interface MiddleProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const SecondMiddle: React.FC<MiddleProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Second Middle Component</h3>
      {/* Passing props down to the child */}
      <CounterDisplay
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </div>
  );
};

export default SecondMiddle;
