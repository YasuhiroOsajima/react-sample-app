import * as React from "react";
import { Redirect, Route, Switch } from "react-router";

import List from "./linkpage";
import Page from "./table";
import Hooks from "./hooks_count";
import Timer from "./hooks_timer/containers/App";
import Redux from "./redux/App";

const Component: React.FC = () => (
  <React.StrictMode>
    <Switch>
      <Route path="/table" component={Page} />
      <Route path="/hooks_count" component={Hooks} />
      <Route path="/hooks_timer" component={Timer} />
      <Route path="/redux" component={Redux} />
      <Route path="/" component={List} />
      <Redirect to="/" />;
    </Switch>
  </React.StrictMode>
);

export default Component;
