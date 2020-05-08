import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Component: React.FC = () => (
  <>
    <Helmet>
      <title>Link page</title>
    </Helmet>
    <ul>
      <li>
        <Link to={`/table`}>Table page</Link>
      </li>
      <li>
        <Link to={`/hooks_count`}>Hooks count page</Link>
      </li>
      <li>
        <Link to={`/hooks_timer`}>Hooks timer page</Link>
      </li>
      <li>
        <Link to={`/redux`}>Redux page</Link>
      </li>
      <li>
        <Link to={`/bootstrap`}>Bootstrap page</Link>
      </li>
    </ul>
  </>
);

export default Component;
