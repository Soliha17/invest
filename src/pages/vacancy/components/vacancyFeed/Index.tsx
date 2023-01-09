import React from "react";
import { Link } from "react-router-dom";

import { vacancyFeed } from "../../../../mock/vacancyFeedDatas";

import "./style.scss";

function VacancyFeed() {
  return (
    <div className="vacancy-feed flex">
      <h1 className="f-3441">Vakansiyalar lentasi</h1>
      <span className="action-group__vacancy-feed flex">
        {vacancyFeed.map((item) => (
          <Link to={"/"} className="action-box__vacancy-feed flex" key={item.id}>
            <span className="action-box__icon">
              <img src={item.img} alt="actions icon" />
            </span>
            <p className="font-style__2024">{item.text}</p>
          </Link>
        ))}
      </span>
    </div>
  );
}

export default VacancyFeed;
