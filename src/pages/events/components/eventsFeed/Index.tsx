import React, { useState } from "react";
import { Link } from "react-router-dom";

import { eventsFeed } from "../../../../mock/eventsFeedDatas";

import "./style.scss";

function EventsFeed() {
  return (
    <div className="events-feed flex">
      <h1 className="f-3441">Vakansiyalar lentasi</h1>
      <span className="action-group__events-feed flex">
        {eventsFeed.map((item) => (
          <Link to={"/"} className="action-box flex" key={item.id}>
            <span className="icon__action-box">
              <img src={item.img} alt="actions icon" />
            </span>
            <p className="font-style__2024">{item.text}</p>
          </Link>
        ))}
      </span>
    </div>
  );
}

export default EventsFeed;
