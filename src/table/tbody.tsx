import * as React from "react";

import TR from "./tr";
import { Rows } from "./data/data_type";

type Props = {
  rows: Rows;
};

const Component: React.FC<Props> = props => (
  <tbody>
    {props.rows.map(row => (
      <TR key={row.id} {...row} />
    ))}
  </tbody>
);

export default Component;
