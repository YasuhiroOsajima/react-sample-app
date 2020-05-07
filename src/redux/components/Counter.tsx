import * as React from "react";

export interface CounterProps {
  count?: number;
  add?: (amount: number) => void;
  decrement?: () => void;
  increment?: () => void;
}

const Component: React.FC<CounterProps> = ({
  count = 0,
  add = () => undefined,
  decrement = () => undefined,
  increment = () => undefined
}) => (
  <>
    count is {count}
    <button onClick={increment}>+1</button>
    <button onClick={decrement}>-1</button>
    <button onClick={() => add(10)}>+10</button>
  </>
);

export default Component;
