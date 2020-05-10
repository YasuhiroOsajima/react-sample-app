import React, { useState, useEffect } from "react";

// Simple useEffect.
function EffectHook() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    document.title = `Click: ${count}`;
  }, [count]);

  return (
    <div>
      <p>Click: {count}</p>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>CountUp</button>
    </div>
  );
}

export default EffectHook;
