import React from "react";

import Sidebar from "../../components/sidebar/Index";
import GrantsFeed from "./components/grantsFeed/Index";
import GrantsMain from "./components/grantsMain/Index";

function Grants() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <GrantsFeed />
          <GrantsMain />
        </div>
      </div>
    </div>
  );
}

export default Grants;
