import React from "react";

import NewsFeed from "./components/newsFeed/Index";
import NewsMain from "./components/newsMain/Index";

function News() {

  return (
    <div className="wrapper">
      <div className="main">
        <div className="main-full">
          <NewsFeed />
          <NewsMain />
        </div>
      </div>
    </div>
  );
}

export default News;
