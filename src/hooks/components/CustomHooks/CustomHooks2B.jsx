import { useState } from "react";

// Custom Hooks to use state in outside of React Component.
// This state can be shared state.
function useInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value);
    }
  };

  return [value, bind, reset];
}

export default useInput;
