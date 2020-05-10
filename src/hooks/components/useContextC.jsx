import React, { useContext } from "react";
import { UserContext, LanguageContext } from "../App";

function ComponentC() {
  const user = useContext(UserContext);
  const language = useContext(LanguageContext);

  return (
    <div>
      <div>
        {user.first}: {language}
      </div>
    </div>
  );
}

export default ComponentC;
