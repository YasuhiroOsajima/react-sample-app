import * as React from "react";

interface AppProps {
  timeLeft: number;
  reset: () => void;
}

const Component: React.FC<AppProps> = props => (
  <>
    <header>
      <h1>Timer</h1>
    </header>
    time: {props.timeLeft}
    <button onClick={props.reset}>reset</button>
  </>
);

export default Component;
