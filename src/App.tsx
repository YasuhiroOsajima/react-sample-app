import * as React from "react";
import { Redirect, Route, Switch } from "react-router";

import Page from "./page";

const Component: React.FC = () => (
  <React.StrictMode>
    <Switch>
      <Route path="/" component={Page} />
      <Redirect to="/" />;
    </Switch>
  </React.StrictMode>
);

export default Component;
