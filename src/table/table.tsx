import * as React from "react";

import Thead from "./thead";
import Tbody from "./tbody";
import { Rows } from "../data/data_type";

import "./table.css";

type Props = {
  rows: Rows;
};

const Component: React.FC<Props> = props => (
  <table>
    <Thead />
    <Tbody rows={props.rows} />
  </table>
);

export default Component;
