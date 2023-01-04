import React from "react";

import NewsFeed from "../../components/NewsFeed/Index";
import Sidebar from "../../components/Sidebar/Index";
import NewsMain from "../../components/NewsMain/Index";

function Grants() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <h1>Bu Grantlar sahifasi</h1>
        </div>
      </div>
    </div>
  );
}

export default Grants;
