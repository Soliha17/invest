import React from "react";

import GrantsFeed from "./components/grantsFeed/Index";
import GrantsMain from "./components/grantsMain/Index";

function Grants() {
  const [visibility, setVisibility] = React.useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="wrapper">
      <div className="main">
        <div className="main-full">
          <GrantsFeed
            visibility={visibility}
            toggleVisibility={toggleVisibility}
          />
          <GrantsMain />
        </div>
      </div>
    </div>
  );
}

export default Grants;
