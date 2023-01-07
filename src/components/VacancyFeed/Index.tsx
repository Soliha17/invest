import React,{useState} from "react";
import { Link } from "react-router-dom";

import { grantsFeed } from "../../utils/grantsFeed";

import "./style.scss";

function VacancyFeed(props: any) {
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState("");
  return (
    <div className="vacancy-feed grants-feed flex">
      <h1 className="f-3441">
        {window.location.pathname === "/vacancy"
          ? props.vacancyFeedTitle
          : props.eventsFeedTitle}
      </h1>
      <span className="action-groups__grants-feed flex">
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

export default VacancyFeed;
