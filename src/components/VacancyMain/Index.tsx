import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { vacancyInfos } from "../../utils/vacancyInfo";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import smallLocationIcon from "../../assets/icons/small-location-icon.svg";

function VacancyMain() {
  const [visibleDots, setVisibleDots] = useState<boolean[]>(() =>
    Array(vacancyInfos.length).fill(false)
  );
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/vacancy/${id}`);
  }
  return (
    <div className="vacancy-container">
      {vacancyInfos.map((info,index) => (
        <span className="vacancy-box" key={info.id}>
          <span className="vacancy__top flex">
            <span className="info__top flex">
              <img src={info.logoImg} alt="company logo icon" />
              <span className="date-group flex">
                <img src={watchIcon} alt="watch icon" />
                <p className="font-style__1215">{info.vacancyDate}</p>
              </span>
            </span>
            <span className="three-dots">
              <img
                src={threeDotsIcon}
                onClick={() =>
                  setVisibleDots((dots) =>
                    dots.map((visibleDot, visibleDotIndex) =>
                      index === visibleDotIndex
                        ? !visibleDots[index]
                        : visibleDot
                    )
                  )
                }
                alt="dots icon"
              />
              <span
                className="dots-content"
                style={
                  visibleDots[index]
                    ? { display: "block" }
                    : { display: "none" }
                }
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
          <span className="vacancy__middle">
            <span className="vacancy__info-top">
              <p
                className="font-style__2431"
                onClick={() => onSelect(info?.id)}
              >
                {info.vacancyTitle}
              </p>
              <p className="font-style__1417">{info.vacancyType}</p>
            </span>
            <span className="vacancy__info-bottom flex">
              <p className="font-style__1417 flex">
                <img src={smallLocationIcon} alt="location icon" />
                {info.vacancyLocation}
              </p>
              <p className="font-style__1417">{info.vacancySalary}</p>
            </span>
          </span>
          <span className="vacancy__footer flex">
            <span className="left__footer">
              <p className="flex">
                <img src={eyeIcon} alt="eye icon" />
                100
              </p>
            </span>
            <span className="right__footer flex">
              <img src={sendIcon} alt="send icon" />
              <img src={savedIcon} alt="saved icon" />
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

export default VacancyMain;
