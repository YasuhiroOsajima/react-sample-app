import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Component: React.FC = () => (
  <>
    <Helmet>
      <title>Link page</title>
    </Helmet>
    <Link to={`/table`}>Table page</Link>
  </>
);

export default Component;
