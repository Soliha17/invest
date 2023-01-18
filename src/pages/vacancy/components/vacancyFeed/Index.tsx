import React, { useState } from "react";

import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import settingIcon from "../../../../assets/icons/setting-icons.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";
import dateIcon from "../../../../assets/icons/date-icon.svg";

import "./style.scss";

interface Props {
  visibility: boolean;
  toggleVisibility: () => void;
}

const VacancyFeed: React.FC<Props> = ({ visibility, toggleVisibility }) => {
  const [openCalendar, setOpenCalendar] = useState(false);
  const [value, onChange] = useState(new Date());
  return (
    <div className="vacancy-feed flex">
      <h1 className="font-style__3441">Vakansiyalar lentasi</h1>
      <span className="action-group__vacancy-feed flex">
        <span className="action-box__vacancy-feed flex">
          <span className="action-box__icon">
            <img
              src={settingIcon}
              onClick={toggleVisibility}
              alt="actions icon"
            />
          </span>
        </span>
        <span className="action-box__vacancy-feed flex">
          <span className="action-box__icon">
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
        <span className="action-box__vacancy-feed flex">
          <span className="action-box__icon">
            <img src={savedIcon} alt="actions icon" />
          </span>
          <p className="font-style__2024">Saqlanganlar</p>
        </span>
      </span>
    </div>
  );
};

export default VacancyFeed;
