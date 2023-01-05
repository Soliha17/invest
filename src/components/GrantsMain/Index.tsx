import React, { useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";

import "./style.scss";
import { grantsInfo } from "../../utils/grantsInfo";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import grantsLogo from "../../assets/icons/grant-page-mark.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";

function GrantsMain() {
  const [dots, setDots] = useState(false);
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/grants/${id}`);
  }
  return (
    <div className="grants-container">
      {grantsInfo.map((info) => (
        <span className="grants-box" key={info.id}>
          <span className="grants__top flex">
            <img src={grantsLogo} alt="grants Logo" />
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
          <p className="grants-type f-1619">{info.grantsType}</p>
          <span className="grants-middle" onClick={() => onSelect(info?.id)}>
            <p className="f-2431">{info.text}</p>
            <img src={info.img} alt="oxford img" />
          </span>
          <span className="footer__news-main flex">
            <span className="left__footer flex">
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
        </span>
      ))}
    </div>
  );
}

export default GrantsMain;
