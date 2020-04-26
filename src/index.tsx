import * as React from "react";
import * as ReactDOM from "react-dom";

import Thead from "./table/thead";
import Tbody from "./table/tbody";

import { rows } from "./data/mock_data";

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
