import React from "react";

import NewsFeed from "../../components/newsFeed/Index";
import Sidebar from "../../components/sidebar/Index";
import NewsMain from "../../components/newsMain/Index";

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
