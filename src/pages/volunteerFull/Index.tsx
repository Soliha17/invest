import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./style.scss";

import { EventsCardData, eventsCardDatas } from "../../mock/eventsCardDatas";
import { sameEventCardDatas } from "../../mock/eventsSameCardDatas";

import backIcon from "../../assets/icons/back-icon.svg";
import smallDateIcon from "../../assets/icons/small-date-icon.svg";
import smallWatchIcon from "../../assets/icons/small-watch-icon.svg";
import smallLocationIcon from "../../assets/icons/small-watch-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";

function VolunteerFull() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [events, setEvents] = useState<EventsCardData[]>([]);

  let result: EventsCardData[] = eventsCardDatas.filter((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    setEvents(result);
  },[result]);

  function goBack() {
    navigate(-1);
  }
  return (
    <div className="main wrapper">
      <div className="main-full events-full-container">
        <div className="back-group flex" onClick={goBack}>
          <span className="back-icon">
            <img src={backIcon} alt="back icon" />
          </span>
        </div>
        <div className="events-full">
          {events.map((item) => (
            <span className="events-full__card event-card">
              <span className="top__event-card">
                <span className="data-group__event-card">
                  <span className="left__data-group">
                    <h4 className="font-style__2431">{item.title}</h4>
                    <p className="font-style__1417">{item.type}</p>
                  </span>
                  <span className="right__data-group">
                    <span>
                      <img src={smallDateIcon} alt="smallDateIcon" />
                      <p className="font-style__1215">{item.date}</p>
                    </span>
                    <span>
                      <img src={smallWatchIcon} alt="smallwatchIcon" />
                      <p className="font-style__1215">{item.time}</p>
                    </span>
                  </span>
                </span>
                <span className="img-group__event-card">
                  <img src={item.fullImg} alt={item.title} />
                </span>
                <span className="btn-group__event-card">
                  <button className="sign-up font-style__1619">
                    Ro’yxatdan o’tish
                  </button>
                </span>
              </span>
              <span className="bottom__event-card">
                <h1 className="font-style__2431">Tadbir haqida</h1>
                <span className="info__event-card">
                  <span className="content__info">
                    <p className="font-style__1417">{item.type}</p>
                    <span className="right__data-group">
                      <span>
                        <img src={smallDateIcon} alt="smallDateIcon" />
                        <p className="font-style__1215">{item.date}</p>
                      </span>
                      <span>
                        <img src={smallWatchIcon} alt="smallwatchIcon" />
                        <p className="font-style__1215">{item.time}</p>
                      </span>
                    </span>
                  </span>
                  <p className="text__info font-style__1619">{item.fullInfo}</p>
                </span>
              </span>
            </span>
          ))}
          <h1 className="font-style__3441">O‘xshash tadbirlar</h1>
          <div className="same-cards-container">
            <span className="same-cards">
              {sameEventCardDatas.map((item) => (
                <span className="same-card">
                  <img src={item.img} alt={item.title} />
                  <span className="info__same-card">
                    <h5 className="font-style__2024">{item.title}</h5>
                    <p className="font-style__1417">{item.type}</p>
                    <span className="bottom__same-card">
                      <span className="dates____same-card">
                        <span className="top__datess">
                          <div>
                            <img src={smallDateIcon} alt="eye icon" />
                            <p className="font-style__1215"> {item.date}</p>
                          </div>
                          <div>
                            <img src={smallWatchIcon} alt="watch icon" />
                            <p className="font-style__1215">{item.time}</p>
                          </div>
                        </span>
                        <span className="flex font-style__1417">
                          <img src={smallLocationIcon} alt="location icon" />
                          {item.location}
                        </span>
                      </span>
                      <span className="actions____same-card flex">
                        <img src={sendIcon} alt="send icon" />
                        <img src={savedIcon} alt="saved icon" />
                      </span>
                    </span>
                  </span>
                </span>
              ))}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VolunteerFull;
