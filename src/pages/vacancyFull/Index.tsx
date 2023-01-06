import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./style.scss";
import { VacancyInfo, vacancyInfos } from "../../utils/vacancyInfo";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import smallLocationIcon from "../../assets/icons/small-location-icon.svg";
import backIcon from "../../assets/icons/back-icon.svg";

import Sidebar from "../../components/Sidebar/Index";
import VacancyMenu from "../../components/VacancyMenu/Index";

function VacancyFull() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dots, setDots] = useState(false);
  const [vacancy, setVacancy] = useState<VacancyInfo[]>([]);

  let result = vacancyInfos.filter((item) => {
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
          <img src={backIcon} alt="" />
        </span>
        <span className="main-inside-container">
          <div className="vacancy-container vacancy-full-container">
            {vacancy.map((info) => (
              <span className="vacancy-box" key={info.id}>
                <span className="vacancy__top flex">
                  <span className="info__top flex">
                    <img src={info.logoImg} alt="" />
                    <span className="date-group flex">
                      <img src={watchIcon} alt="" />
                      <p className="f-1215">{info.vacancyDate}</p>
                    </span>
                  </span>
                  <span className="three-dots">
                    <img
                      src={threeDotsIcon}
                      onClick={() => setDots(!dots)}
                      alt="proas"
                    />
                    <span
                      className="dots-content"
                      style={dots ? { display: "block" } : { display: "none" }}
                    >
                      <Link to="">
                        <img src={copyIcon} alt="" />
                        Nusxalash
                      </Link>
                      <Link to="">
                        <img src={spamIcon} alt="" />
                        Shikoyat qilish
                      </Link>
                    </span>
                  </span>
                </span>
                <span className="vacancy__middle">
                  <span className="vacancy__info-top">
                    <p className="f-2431">{info.vacancyTitle}</p>
                    <p className="f-1417">{info.vacancyType}</p>
                  </span>
                  <span className="vacancy__info-bottom flex">
                    <p className="f-1417 flex">
                      <img src={smallLocationIcon} alt="location icon" />
                      {info.vacancyLocation}
                    </p>
                    <p className="f-1417">{info.vacancySalary}</p>
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
                    <img src={sendIcon} alt="" />
                    <img src={savedIcon} alt="" />
                  </span>
                </span>
                <span className="vacancy__full-info">
                  <p className="f-2024">Talablar</p>
                  <ul className="demand-list">
                    {info.demands.map((demand) => (
                      <li className="f-1625">{demand}</li>
                    ))}
                  </ul>
                  <p className="f-2024">Ishchining vazifasi</p>
                  <ul className="task-list">
                    {info.tasks.map((task) => (
                      <li className="f-1625">{task}</li>
                    ))}
                  </ul>
                  <p className="f-2024">Shartlar</p>
                  <ul className="condition-list">
                    {info.conditions.map((condition) => (
                      <li className="f-1625">{condition}</li>
                    ))}
                  </ul>
                  <p className="f-1417">
                    Qo'shimcha ma'lumotlar va aloqaga chiqish uchun pastdagi
                    tugmani bosing.
                  </p>
                </span>
                <button className="contact-btn flex f-1619">Aloqaga chiqish</button>
              </span>
            ))}
          </div>
          <VacancyMenu />
        </span>
      </div>
    </div>
  );
}

export default VacancyFull;
