import React from "react";
import { useSidebar } from "../../hooks/UseSidebar";

import Sidebar from "../../components/sidebar/Index";
import EventsFeed from "./components/eventsFeed/Index";
import Menu from "../../components/menu/Index";
import EventsMain from "./components/eventsMain/Index";

const Events: React.FC = () => {
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
          <EventsFeed
            visibility={visibility}
            toggleVisibility={toggleVisibility}
          />
          <div className="main-inner">
            <EventsMain />
            <Menu visibility={visibility} toggleVisibility={toggleVisibility} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
