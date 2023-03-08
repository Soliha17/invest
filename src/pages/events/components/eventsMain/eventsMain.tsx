import React from "react";
import EventsCard from "../eventsCard/EventsCard";
import { eventsCardDatas } from "../../../../mock/eventsCardDatas";

import "./eventsMain.scss";

function EventsMain() {
  return (
    <div className="events-main">
      {eventsCardDatas.map((item) => (
        <React.Fragment key={item.id}>
          <EventsCard
            id={item.id}
            title={item.title}
            type={item.type}
            date={item.date}
            time={item.time}
            text={item.text}
            location={item.location}
            img={item.img}
            fullInfo={item.fullInfo}
            fullImg={item.fullImg}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default EventsMain;
