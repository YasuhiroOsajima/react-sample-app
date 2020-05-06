import * as React from "react";
import { Redirect, Route, Switch } from "react-router";

import List from "./linkpage";
import Page from "./table";

const Component: React.FC = () => (
  <React.StrictMode>
    <Switch>
      <Route path="/table" component={Page} />
      <Route path="/" component={List} />
      <Redirect to="/" />;
    </Switch>
  </React.StrictMode>
);

export default Component;
