import React from "react";

import Sidebar from "../../components/sidebar/Index";
import EventsFeed from "./components/eventsFeed/Index";
import Menu from "../../components/menu/Index";
import EventsMain from "./components/eventsMain/Index";

function Events() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <EventsFeed />
          <div className="main-inner">
            <EventsMain />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;
