import React from "react";


// import "./style.scss";

import VacancyMain from "../../components/vacancyMain/Index";
import Sidebar from "../../components/sidebar/Index";
import VacancyFeed from "../../components/vacancyFeed/Index";
import VacancyMenu from "../../components/vacancyMenu/Index";
import EventsMain from "../../components/eventsMain/Index";

const eventsFeedTitle: string = "Tadbirlar lentasi";


function Events() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <VacancyFeed eventsFeedTitle={eventsFeedTitle} />
          <div className="main-inside-container">
            <EventsMain />
            <VacancyMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Events;