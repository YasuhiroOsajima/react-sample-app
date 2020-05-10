import React, { useState, useCallback } from "react";

import Title from "./useCallbackTitle";
import Count from "./useCallbackCount";
import Button from "./useCallbackButton";

// use React.memo + useCallback.
// React.memo cache function component and not generate new object if it was not changed.
// useCallback cache function and not generate new object if watching value was not changed.
const WrapComponent = () => {
  const [age, setAge] = useState(30);
  const [score, setScore] = useState(100);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementScore = useCallback(() => {
    setScore(score + 100);
  }, [score]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Count text="Score" count={score} />
      <Button handleClick={incrementAge}>Age+</Button>
      <Button handleClick={incrementScore}>Score+</Button>
    </div>
  );
};

export default WrapComponent;
