import React, { useState,useCallback,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { VacancyCardTypes } from "../../../../mock/vacancyCardDatas";

import copyIcon from "../../../../assets/icons/copy-icon.svg";
import spamIcon from "../../../../assets/icons/spam-icon.svg";
import threeDotsIcon from "../../../../assets/icons/three-dots-icon.svg";
import sendIcon from "../../../../assets/icons/send-icon.svg";
import watchIcon from "../../../../assets/icons/small-watch-icon.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";
import eyeIcon from "../../../../assets/icons/eye-icon.svg";
import smallLocationIcon from "../../../../assets/icons/small-location-icon.svg";

function VacancyCard({
  id,
  path,
  logoImg,
  vacancyDate,
  vacancyType,
  vacancyTitle,
  vacancySalary,
  vacancyLocation,
}: VacancyCardTypes) {
  const [dots, setDots] = useState(false);
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/vacancy/${id}`);
  }

   useEffect(() => {
     document.addEventListener("click", handleClick);
     return () => {
       document.removeEventListener("click", handleClick);
     };
   }, []);

   const handleClick = useCallback((event: any) => {
     const clickedElement = event.target.closest(".three-dots");
     if (!clickedElement) setDots(false);
   }, []);
  
  return (
    <>
      <span className="vacancy-card" key={id}>
        <span className="vacancy-card__top flex">
          <span className="left__vacancy-card flex">
            <img src={logoImg} alt="company logo icon" />
            <span className="date-group__vacancy-card flex">
              <img src={watchIcon} alt="watch icon" />
              <p className="font-style__1215">{vacancyDate}</p>
            </span>
          </span>
          <span className="right__vacancy-card three-dots">
            <img
              src={threeDotsIcon}
              onClick={() => setDots(!dots)}
              alt="dots icon"
            />
            <span
              className="dots-content"
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
        <span className="vacancy-card__middle">
          <span className="vacancy-card__title-group">
            <p className="font-style__2431" onClick={() => onSelect(id)}>
              {vacancyTitle}
            </p>
            <p className="font-style__1417">{vacancyType}</p>
          </span>
          <span className="vacancy-card__location-group flex">
            <p className="font-style__1417 flex">
              <img src={smallLocationIcon} alt="location icon" />
              {vacancyLocation}
            </p>
            <p className="font-style__1417">{vacancySalary}</p>
          </span>
        </span>
        <span className="vacancy-card__footer flex">
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
    </>
  );
}

export default VacancyCard;
