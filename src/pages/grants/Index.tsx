import React from "react";
import { useSidebar } from "../../hooks/UseSidebar";

import Sidebar from "../../components/sidebar/Index";
import GrantsFeed from "./components/grantsFeed/Index";
import GrantsMain from "./components/grantsMain/Index";

function Grants() {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const [visibility, setVisibility] = React.useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="wrapper">
      <div className="main">
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
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
