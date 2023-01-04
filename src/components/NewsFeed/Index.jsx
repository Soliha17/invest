import React from "react";
import {Link} from "react-router-dom"
import "./style.scss";

import { newsFeedLinks } from "../../utils/newsFeed";

function NewsFeed() {
  return (
    <div div className="news-feed">
      <h1 className="f-3441">Yangiliklar lentasi</h1>
      <span className="action-groups__news-feed">
        {newsFeedLinks.map((item) => (
          <Link className="action-box" key={item.id}>
            <span className="icon__action-box">
              <img src={item.img} alt="" />
            </span>
            <p className="f-2024">{item.title}</p>
          </Link>
        ))}
      </span>
    </div>
  );
}

export default NewsFeed;
