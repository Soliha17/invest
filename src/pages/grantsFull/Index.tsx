import React, { useState, useEffect, useCallback } from "react";

import { Link, useNavigate, useParams } from "react-router-dom";

import "./style.scss";

import { GrantsCardTypes, grantsCardDatas } from "../../mock/grantCardDatas";
import GrantsFeed from "../grants/components/grantsFeed/Index";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import grantsLogo from "../../assets/icons/grant-page-mark.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import backIcon from "../../assets/icons/back-icon.svg";
import smallDateIcon from "../../assets/icons/small-date-icon.svg";
import smallLocationIcon from "../../assets/icons/small-location-icon.svg";

function GrantsFull() {
  const [dots, setDots] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const [grants, setGrants] = useState<GrantsCardTypes[]>([]);
  const [visibility, setVisibility] = React.useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  let result: GrantsCardTypes[] = grantsCardDatas.filter((item) => {
    return item.id === Number(id);
  });

  useEffect(() => {
    setGrants(result);
  });

  function goBack() {
    navigate(-1);
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
    <div className="main wrapper">
      <div className="main-full grants-full">
        <span className="top__grants-full flex">
          <span className="back-group flex" onClick={goBack}>
            <span className="back-icon">
              <img src={backIcon} alt="back icon" />
            </span>
          </span>
          <GrantsFeed
            visibility={visibility}
            toggleVisibility={toggleVisibility}
          />
        </span>
        <div className="grants-card">
          {grants.map((info) => (
            <span className="grants-card grants-card--auto" key={info.id}>
              <span className="grants-card__top flex">
                <img src={grantsLogo} alt="grants Logo" />
                <span className="three-dots">
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
              <p className="grants-card__type font-style__1619">
                {info.grantsType}
              </p>
              <span className="grants-card__middle">
                <p className="font-style__2431">{info.text}</p>
                <img
                  src={info.img}
                  className="grants-card__img"
                  alt="oxford img"
                />
              </span>
              <span className="footer__grants-card flex">
                <span className="left__footer flex">
                  <p className="flex font-style__1417">
                    <img
                      src={smallDateIcon}
                      width="16"
                      height="16"
                      alt="eye icon"
                    />
                    Tugash vaqti: 04.01.2023
                  </p>
                  <p className="flex font-style__1417">
                    <img src={smallLocationIcon} alt="location icon" />
                    Buyuk Britaniya
                  </p>
                </span>
                <span className="right__footer flex">
                  <img src={sendIcon} alt="icon" />
                  <img src={savedIcon} alt="icon" />
                </span>
              </span>
              <span className="info-box__grants-card">
                <span className="first__info-box">
                  <h6 className="font-style__2431">Batafsil</h6>
                  <p className="font-style__2024">{info.firstInfo}</p>
                </span>
                <span className="second__info-box">
                  <h6 className="font-style__2431">
                    Ariza topshirish jarayoni
                  </h6>
                  <p className="font-style__1621">{info.secondInfo}</p>
                  <ul>
                    <li>{info.listInfo}</li>
                    <li>{info.listInfoSecond}</li>
                    <li>{info.listInfoThird}</li>
                  </ul>
                </span>
                <span className="third__info-box">
                  <h6 className="font-style__2431">
                    Dasturning manfaatli tomoni
                  </h6>
                  <p>{info.thirdInfo}</p>
                  <ul>
                    <li>{info.firstList}</li>
                    <li>{info.secondList}</li>
                    <li>{info.thirdList}</li>
                  </ul>
                </span>
              </span>
              <span className="footer__grants-card  flex">
                <span className="left__footer flex">
                  <Link to={""} className="flex font-style__2431">
                    Ro‘yxatdan o‘tish
                  </Link>
                </span>
                <span className="right__footer flex">
                  <p className="flex font-style__1417">
                    <img src={eyeIcon} alt="eye icon" />
                    100
                  </p>
                  <img src={sendIcon} alt="send icon" />
                  <img src={savedIcon} alt="saved icon" />
                </span>
              </span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GrantsFull;
