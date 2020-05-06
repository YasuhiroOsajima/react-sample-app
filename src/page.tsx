import * as React from "react";

import Table from "./table/table";
import { rows } from "./data/mock_data";

const Component: React.FC = () => (
  <React.StrictMode>
    <h1>AAAA</h1>
    <Table rows={rows} />
  </React.StrictMode>
);

export default Component;
