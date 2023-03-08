import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./volunteerCard.scss";
import { EventsCardData } from "../../../../mock/eventsCardDatas";

import copyIcon from "../../../../assets/icons/copy-icon.svg";
import spamIcon from "../../../../assets/icons/spam-icon.svg";
import threeDotsIcon from "../../../../assets/icons/three-dots-icon.svg";
import sendIcon from "../../../../assets/icons/send-icon.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";
import watchIcon from "../../../../assets/icons/small-watch-icon.svg";
import smallDateIcon from "../../../../assets/icons/small-date-icon.svg";
import smallLocationIcon from "../../../../assets/icons/small-location-icon.svg";

function VolunteerCard({
  id,
  title,
  type,
  text,
  date,
  time,
  location,
  img,
}: EventsCardData) {
  const navigate = useNavigate();
  const [dots, setDots] = useState(false);
  function handleDots() {
    setDots(!dots);
  }

  function onSelect(id: number) {
    navigate(`/volunteer/${id}`);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = useCallback((event: any) => {
    const clickedElement = event.target.closest(".three-dots");
    if (!clickedElement) setDots(false);
  }, []);

  return (
    <>
      <div className="events-card">
        <span className="image__events-card">
          <img src={img} alt={title} />
        </span>
        <span className="info__events-card">
          <span className="top__events-card">
            <span className="title__events-group">
              <h4 className="font-style__2024" onClick={() => onSelect(id)}>
                {title}
              </h4>
              <p className="font-style__1417">{type}</p>
            </span>
            <span className="three-dots">
              <span>
                <img src={threeDotsIcon} onClick={handleDots} alt="dots icon" />
              </span>
              <span
                className="dots-content font-style__1417"
                style={dots ? { display: "block" } : { display: "none" }}
              >
                <Link to="">
                  <img src={copyIcon} alt="copy icon" />
                  Nusxalash
                </Link>
                <Link to="">
                  <img src={spamIcon} alt="spam icon" />
                  Shikoyat qilish
                </Link>
              </span>
            </span>
          </span>
          <p className="font-style__1619">{text}</p>
          <span className="bottom__events-card">
            <span className="dates____events-card">
              <span className="top__dates">
                <span>
                  <img src={smallDateIcon} alt="eye icon" />
                  <p className="font-style__1215"> {date}</p>
                </span>
                <span>
                  <img src={watchIcon} alt="watch icon" />
                  <p className="font-style__1215">{time}</p>
                </span>
              </span>
              <span className="flex font-style__1417">
                <img src={smallLocationIcon} alt="location icon" />
                {location}
              </span>
            </span>
            <span className="actions____events-card flex">
              <img src={sendIcon} alt="send icon" />
              <img src={savedIcon} alt="saved icon" />
            </span>
          </span>
        </span>
      </div>
    </>
  );
}

export default VolunteerCard;
