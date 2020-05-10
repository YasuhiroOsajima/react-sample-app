import React, { useState } from "react";

// useState with simple data type.
function CounterHook() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  const incrementCountTen = () => {
    for (let i = 0; i < 10; i++) {
      setCount(prevCount => prevCount + 1);
    }
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Count+</button>
      <button onClick={incrementCountTen}>Count10+</button>
    </div>
  );
}

export default CounterHook;
