import React from "react";
import { Link } from "react-router-dom";

import { grantsFeed } from "../../../../mock/grantsFeedDatas";

import "./style.scss";

function GrantsFeed() {
  return (
    <div className="grants-feed flex">
      <h1 className="font-style__3441">Grantlar lentasi</h1>
      <span className="action-group__grants-feed flex">
        {grantsFeed.map((item) => (
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

export default GrantsFeed;
