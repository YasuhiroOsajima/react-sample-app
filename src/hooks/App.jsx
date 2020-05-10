import React from "react";
// import React, { createContext, useState, useReducer } from "react";
// import React, { createContext, useReducer } from "react";
//import React, { useReducer, useEffect } from "react";
//import axios from "axios";

// import Counter from "./components/useState1";
// import From from "./components/useState2";
// import Item from "./components/useState3";
// import EffectCount from "./components/useEffect1";
// import EffectPosition from "./components/useEffect2";
// import EffectFetch from "./components/useEffect3";
// import EffectFetchById from "./components/useEffect4";
// import ComponentP from "./components/useContextP";
// import CounterReducer from "./components/useReducer1";
// import ComponentA from "./components/useReducerA";
// import ComponentB from "./components/useReducerB";
// import { WrapComponent } from "./components/useCallback";
// import Check from "./components/useMemo";
// import FocusInput from "./components/useRef1";
import CountWithRef from "./components/useRef2";

// export const UserContext = createContext();
// export const LanguageContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <From /> */}
      {/* <Item /> */}
      {/* <EffectCount /> */}
      {/* <EffectPosition /> */}
      {/* <EffectFetch /> */}
      {/* <EffectFetchById /> */}
      {/* <CounterReducer /> */}
      {/* <WrapComponent /> */}
      {/* <Check /> */}
      {/* <FocusInput /> */}
      <CountWithRef />
    </div>
  );

  //
  // useContext
  //const [user, setUser] = useState({ first: "test1", last: "test2" });
  //const [language, setLanguage] = useState("English");
  //return (
  //  <div className="App">
  //    <UserContext.Provider value={user}>
  //      <LanguageContext.Provider value={language}>
  //        <ComponentP />
  //      </LanguageContext.Provider>
  //    </UserContext.Provider>
  //  </div>
  //);
  //
  // useReducer with useContext.
  //const [count, dispatch] = useReducer(reducer, initialState);
  //return (
  //  <div className="App">
  //    <h1>Count: {count.counterOne}</h1>
  //    <CountContext.Provider
  //      value={{ countState: count, countDispatch: dispatch }}
  //    >
  //      <ComponentA />
  //      <ComponentB />
  //    </CountContext.Provider>
  //  </div>
  //);
  //
  // useReducer with useEffect.
  //const [state, dispatch] = useReducer(reducer, initialState);
  //useEffect(() => {
  //  axios
  //    .get("https://jsonplaceholder.typicode.com/posts/1")
  //    .then(res => {
  //      dispatch({ type: "SUCCESS", payload: res.data });
  //    })
  //    .catch(err => {
  //      dispatch({ type: "ERROR" });
  //    });
  //});
  //return (
  //  <div className="App">
  //    <h1>{state.loading ? "Loading..." : state.post.title}</h1>
  //    <h2>{state.error ? state.error : null}</h2>
  //  </div>
  //);
}
export default App;

// export const CountContext = createContext();
// const initialState = {
//   counterOne: 0
// };
// const reducer = (state, action) => {
//   switch (action.type) {
//     case "increment1":
//       return { ...state, counterOne: state.counterOne + action.value };
//     case "decrement1":
//       return { ...state, counterOne: state.counterOne - action.value };
//     case "reset":
//       return initialState;
//     default:
//       return state;
//   }
// };

//const initialState = {
//  loading: true,
//  error: "",
//  post: {}
//};
//const reducer = (state, action) => {
//  switch (action.type) {
//    case "SUCCESS":
//      return { loading: false, error: "", post: action.payload };
//    case "ERROR":
//      return { loading: false, error: "Fetching data is failed.", post: {} };
//    default:
//      return state;
//  }
//};
