import React from "react";
import SecondMiddle from "./SecondMiddle";

interface MiddleProps {
  count: number;
  onIncrement: () => void;
  onDecrement: () => void;
  onReset: () => void;
}

const Middle: React.FC<MiddleProps> = ({
  count,
  onIncrement,
  onDecrement,
  onReset,
}) => {
  return (
    <div style={{ marginTop: "20px" }}>
      <h3>Middle Component</h3>
      {/* Passing props down to the child */}
      <SecondMiddle
        count={count}
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        onReset={onReset}
      />
    </div>
  );
};

export default Middle;
