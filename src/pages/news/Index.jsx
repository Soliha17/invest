import React from "react";

import NewsFeed from "../../components/NewsFeed/Index";
import Sidebar from "../../components/Sidebar/Index";
import NewsMain from "../../components/NewsMain/Index";

function News() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <NewsFeed />
          <NewsMain />
        </div>
      </div>
    </div>
  );
}

export default News;
