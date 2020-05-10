import React from "react";
//import React, { createContext, useState } from "react";

// import Counter from "./components/useState1";
// import From from "./components/useState2";
// import Item from "./components/useState3";
// import EffectCount from "./components/useEffect1";
// import EffectPosition from "./components/useEffect2";
// import EffectFetch from "./components/useEffect3";
// import EffectFetchById from "./components/useEffect4";
// import ComponentP from "./components/useContextP";
import CounterReducer from "./components/useReducer1";

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
      <CounterReducer />
    </div>
  );

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
}
export default App;
