import React, { useState, useEffect } from "react";

// useEffect with EventListener.
function EventEffect() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getPosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", getPosition);
    return () => {
      window.removeEventListener("mousemove", getPosition);
    };
  }, []);

  return (
    <div>
      <ul>
        <li>Position X: {x}</li>
        <li>Position Y: {y}</li>
      </ul>
    </div>
  );
}

export default EventEffect;
