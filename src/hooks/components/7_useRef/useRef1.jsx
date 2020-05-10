import React, { useEffect, useRef } from "react";

// Simple useRef.
// useRef gives access path to DOM(JSX) from JS function internal namespace.
// This sample is focusing at the rendered timing.
function FocusInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h1>useRef</h1>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
