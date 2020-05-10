import React, { useState, useMemo } from "react";

// useMemo caches value and return if target function's return value will be same.
function Check() {
  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(10);

  const increamtOne = () => {
    setCountOne(countOne + 1);
  };

  const increamtTwo = () => {
    setCountTwo(countTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 400000000) i++;
    return countOne % 2 === 0;
  }, [countOne]);

  return (
    <div>
      <h2>Count: {isEven ? "Even" : "Odd"} </h2>
      <button onClick={increamtOne}>Count1: {countOne}</button>
      <button onClick={increamtTwo}>Count2: {countTwo}</button>
    </div>
  );
}

export default Check;
