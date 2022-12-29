import React from "react";
import Navbar from "../../components/Navbar/Index";
import NewsFeed from "../../components/NewsFeed/Index";
import Sidebar from "../../components/Sidebar/Index";
function NewsFull() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <NewsFeed />
          <NewsMain />
        </div>
      </div>
    </>
  );
}

export default NewsFull;
