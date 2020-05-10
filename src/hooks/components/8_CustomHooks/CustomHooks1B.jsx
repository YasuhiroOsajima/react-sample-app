import React, { useState } from "react";

import useDocumentTitle from "./CustomHooks1Title";

function DocTitleUpdateTwo() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>count: {count}</button>
    </div>
  );
}

export default DocTitleUpdateTwo;
