import * as React from "react";
import * as ReactDOM from "react-dom";

import Table from "./table/table";
import { rows } from "./data/mock_data";

ReactDOM.render(
  <React.StrictMode>
    <h1>AAAA</h1>
    <Table rows={rows} />
  </React.StrictMode>,
  document.getElementById("root")
);
