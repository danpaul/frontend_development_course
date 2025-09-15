import React, { useState } from "react";
import Middle from "./Middle";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);
  const reset = () => setCount(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Parent Component</h2>
      <Middle
        count={count}
        onIncrement={increment}
        onDecrement={decrement}
        onReset={reset}
      />
    </div>
  );
};

export default Counter;
