import * as React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

import counterReducer from "./reducer";
import Counter from "./containers/Counter";

const store = createStore(counterReducer);

const Component: React.FC = () => (
  <>
    <Provider store={store}>
      <header>
        <h1>Redux counter</h1>
      </header>
      <Counter />
    </Provider>
  </>
);

export default Component;
