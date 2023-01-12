import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import settingIcon from "../../../../assets/icons/setting-icons.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";
import dateIcon from "../../../../assets/icons/date-icon.svg";

import "./style.scss";

function VolunteerFeed() {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, onChange] = useState(new Date());

  return (
    <div className="events-feed flex">
      <h1 className="f-3441">Volontyorlik</h1>
      <span className="action-group__events-feed flex">
        <span className="action-box flex">
          <span className="icon__action-box">
            <img src={settingIcon} alt="actions icon" />
          </span>
        </span>
        <span className="action-box flex">
          <span className="icon__action-box">
            <img
              src={dateIcon}
              onClick={() => setOpenCalendar(!openCalendar)}
              alt="actions icon"
            />
          </span>
          <div className="calendar-container">
            {openCalendar && <Calendar onChange={onChange} value={value} />}
          </div>
        </span>
        <span className="action-box flex">
          <span className="icon__action-box">
            <img src={savedIcon} alt="actions icon" />
          </span>
          <p className="font-style__2024">Saqlanganlar</p>
        </span>
      </span>
    </div>
  );
}
// <img
//   src={cc}
//   alt="actions icon"
//   onClick={() => setOpenCalendar(!openCalendar)}
// />
{
  /* <div>
  {openCalendar && <Calendar onChange={onChange} value={value} />}
</div> */
}

export default VolunteerFeed;
