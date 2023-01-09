import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./style.scss";

import Sidebar from "../../components/sidebar/Index";

import { EventsCardData, eventsCardDatas } from "../../mock/eventsCardDatas";

import backIcon from "../../assets/icons/back-icon.svg";

function EventsFull() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [events, setEvents] = useState<EventsCardData[]>([]);

  let result: EventsCardData[] = eventsCardDatas.filter((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    setEvents(result);
  }, []);

  function goBack() {
    navigate(-1);
  }
  return (
    <div className="main wrapper">
      <Sidebar />
      <div className="main-full events-full">
        <div className="back-group flex" onClick={goBack}>
          <span className="back-icon">
            <img src={backIcon} alt="back icon" />
          </span>
        </div>
        <div className="events-full__card">
          {events.map((item) => (
            <span className="section__card">
                
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventsFull;
