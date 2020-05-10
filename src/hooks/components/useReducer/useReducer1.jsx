import React, { useReducer } from "react";

// Simple useReducer.
const initialState = {
  counterOne: 0,
  counterTen: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment1":
      return { ...state, counterOne: state.counterOne + action.value };
    case "decrement1":
      return { ...state, counterOne: state.counterOne - action.value };
    case "increment10":
      return { ...state, counterTen: state.counterTen + action.value };
    case "decrement10":
      return { ...state, counterTen: state.counterTen - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count1: {count.counterOne}</h1>
      <h1>Count10: {count.counterTen}</h1>
      <button onClick={() => dispatch({ type: "increment1", value: 1 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement1", value: 1 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "increment10", value: 10 })}>
        increment
      </button>
      <button onClick={() => dispatch({ type: "decrement10", value: 10 })}>
        decrement
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
    </div>
  );
}

export default CounterReducer;
