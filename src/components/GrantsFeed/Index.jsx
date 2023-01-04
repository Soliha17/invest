import React from "react";
import { Link } from "react-router-dom";

import { grantsFeed } from "../../utils/grantsFeed";

import "./style.scss";

function GrantsFeed() {
  return (
    <div className="grants-feed flex">
      <h1 className="f-3441">Grantlar lentasi</h1>
      <span className="action-groups__grants-feed flex">
        {grantsFeed.map((item) => (
          <Link className="action-box flex" key={item.id}>
            <span className="icon__action-box">
              <img src={item.img} alt="" />
            </span>
            <p className="f-2024">{item.text}</p>
          </Link>
        ))}
      </span>
    </div>
  );
}

export default GrantsFeed;
