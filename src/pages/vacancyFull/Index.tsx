import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./style.scss";

import { VacancyCardTypes, vacancyCards } from "../../mock/vacancyCardDatas";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import smallLocationIcon from "../../assets/icons/small-location-icon.svg";
import backIcon from "../../assets/icons/back-icon.svg";

import Sidebar from "../../components/sidebarcha/Index";
import Menu from "../../components/menu/Index";

function VacancyFull() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dots, setDots] = useState(false);
  const [vacancy, setVacancy] = useState<VacancyCardTypes[]>([]);

  let result = vacancyCards.filter((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    setVacancy(result);
  }, [id]);

  function goBack() {
    navigate(-1);
  }
  return (
    <div className="main wrapper">
      <Sidebar />
      <div className="main-full">
        <span className="back-group" onClick={goBack}>
          <img src={backIcon} alt="back icon" />
        </span>
        <span className="main-inner">
          <div className="vacancy-container vacancy-full-container">
            {vacancy.map((info) => (
              <span className="vacancy-card" key={info.id}>
                <span className="vacancy-card__top flex">
                  <span className="left__vacancy-card flex">
                    <img src={info.logoImg} alt="logo img" />
                    <span className="date-group flex">
                      <img src={watchIcon} alt="watch icon" />
                      <p className="font-style__1215">{info.vacancyDate}</p>
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
                    <p className="font-style__2431">{info.vacancyTitle}</p>
                    <p className="font-style__1417">{info.vacancyType}</p>
                  </span>
                  <span className="vacancy-card__location-group flex">
                    <p className="font-style__1417 flex">
                      <img src={smallLocationIcon} alt="location icon" />
                      {info.vacancyLocation}
                    </p>
                    <p className="font-style__1417">{info.vacancySalary}</p>
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
                <span className="vacancy__full-info">
                  <p className="font-style__2024">Talablar</p>
                  <ul className="demand-list">
                    {info.demands.map((demand, index) => (
                      <li className="font-style__1625" key={index}>
                        {demand}
                      </li>
                    ))}
                  </ul>
                  <p className="font-style__2024">Ishchining vazifasi</p>
                  <ul className="task-list">
                    {info.tasks.map((task, index) => (
                      <li className="font-style__1625" key={index}>
                        {task}
                      </li>
                    ))}
                  </ul>
                  <p className="font-style__2024">Shartlar</p>
                  <ul className="condition-list">
                    {info.conditions.map((condition, index) => (
                      <li className="font-style__1625" key={index}>
                        {condition}
                      </li>
                    ))}
                  </ul>
                  <p className="font-style__1417">
                    Qo'shimcha ma'lumotlar va aloqaga chiqish uchun pastdagi
                    tugmani bosing.
                  </p>
                </span>
                <button className="contact-btn flex font-style__1619">
                  Aloqaga chiqish
                </button>
              </span>
            ))}
          </div>
          <Menu />
        </span>
      </div>
    </div>
  );
}

export default VacancyFull;
