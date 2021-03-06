import React from "react";
// import React, { createContext, useState, useReducer } from "react";
// import React, { createContext, useReducer } from "react";
//import React, { useReducer, useEffect } from "react";
//import axios from "axios";

// import Counter from "./components/1_useState/useState1";
// import From from "./components/1_useState/useState2";
// import Item from "./components/1_useState/useState3";

// import EffectCount from "./components/2_useEffect/useEffect1";
// import EffectPosition from "./components/2_useEffect/useEffect2";
// import EffectFetch from "./components/2_useEffect/useEffect3";
// import EffectFetchById from "./components/useEffect/useEffect4";

// import ComponentP from "./components/3_useContext/useContextP";

// import CounterReducer from "./components/4_useReducer/useReducer1";
// import ComponentA from "./components/4_useReducer/useReducerA";
// import ComponentB from "./components/4_useReducer/useReducerB";

// import WrapComponent from "./components/5_useCallback/useCallback";

// import Check from "./components/6_useMemo/useMemo";

// import FocusInput from "./components/7_useRef/useRef1";
// import CountWithRef from "./components/7_useRef/useRef2";

// import DocTitleUpdateOne from "./components/8_CustomHooks/CustomHooks1A";
// import DocTitleUpdateTwo from "./components/8_CustomHooks/CustomHooks1B";
import Form from "./components/8_CustomHooks/CustomHooks2A";

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
      {/* <CountWithRef /> */}
      {/* <DocTitleUpdateOne /> */}
      {/* <DocTitleUpdateTwo /> */}
      <Form />
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
