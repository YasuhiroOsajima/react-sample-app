import React, { useState, useEffect, useRef } from "react";

// useRef gives access path to function internal namespace from JSX.
function CountWithRef() {
  const [count, setCount] = useState(0);
  const internalRef = useRef();

  useEffect(() => {
    internalRef.current = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(internalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(internalRef.current)}>Stop </button>
    </div>
  );
}

export default CountWithRef;
