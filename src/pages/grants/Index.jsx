import React from "react";

import NewsFeed from "../../components/NewsFeed/Index";
import Sidebar from "../../components/Sidebar/Index";
import NewsMain from "../../components/NewsMain/Index";
import GrantsFeed from "../../components/GrantsFeed/Index";
import GrantsMain from "../../components/GrantsMain/Index"

function Grants() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <GrantsFeed />
          <GrantsMain/>
        </div>
      </div>
    </div>
  );
}

export default Grants;
