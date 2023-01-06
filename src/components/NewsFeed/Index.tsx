import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

import { newsFeedLinks } from "../../utils/newsFeed";

function NewsFeed() {
  return (
    <div className="news-feed">
      <h1 className="f-3441">Yangiliklar lentasi</h1>
      <span className="action-groups__news-feed">
        {newsFeedLinks.map((item) => (
          <Link className="action-box" key={item.id} to={""}>
            <span className="icon__action-box">
              <img src={item.img} alt="actions icon" />
            </span>
            <p className="font-style__2024">{item.title}</p>
          </Link>
        ))}
      </span>
    </div>
  );
}

export default NewsFeed;
