import React from "react";

import EventsFeed from "./components/eventsFeed/EventsFeed";
import Menu from "../../components/menu/Menu";
import EventsMain from "./components/eventsMain/eventsMain";

const Events: React.FC = () => {
  const [visibility, setVisibility] = React.useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="wrapper">
      <div className="main">
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
