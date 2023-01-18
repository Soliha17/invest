import React from "react";
import Sidebar from "../../components/sidebar/Index";
import { useSidebar } from "../../hooks/UseSidebar";

function Home() {
  const { sidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div className="wrapper">
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
      <div className="main">
        <div className="main-full">
          <h1>Bu Home ya'ni asosiy sahifa</h1>
        </div>
      </div>
    </div>
  );
}

export default Home;
