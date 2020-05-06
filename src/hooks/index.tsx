import * as React from "react";

const Component: React.FC = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <>
      count is {count}
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </>
  );
};

export default Component;
