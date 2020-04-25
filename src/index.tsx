import * as React from "react";
import * as ReactDOM from "react-dom";

import { rows } from "./data";
import Thead from "./table/thead";
import Tbody from "./table/tbody";

ReactDOM.render(
  <div>
    <h1>AAAA</h1>
    <table>
      <Thead />
      <Tbody rows={rows} />
    </table>
  </div>,
  document.getElementById("root")
);
