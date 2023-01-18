import React from "react";
import { useSidebar } from "../../hooks/UseSidebar";

import NewsFeed from "./components/newsFeed/Index";
import Sidebar from "../../components/sidebar/Index";
import NewsMain from "./components/newsMain/Index";

function News() {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="wrapper">
      <div className="main">
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
        <div className="main-full">
          <NewsFeed />
          <NewsMain />
        </div>
      </div>
    </div>
  );
}

export default News;
