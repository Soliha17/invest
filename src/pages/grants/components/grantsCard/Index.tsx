import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.scss"
import copyIcon from "../../../../assets/icons/copy-icon.svg";
import spamIcon from "../../../../assets/icons/spam-icon.svg";
import grantsLogo from "../../../../assets/icons/grant-page-mark.svg";
import threeDotsIcon from "../../../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../../../assets/icons/eye-icon.svg";
import sendIcon from "../../../../assets/icons/send-icon.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";
import { GrantsCardTypes } from "../../../../mock/grantCardDatas";

function GrantsCard({
  id,
  grantsType,
  text,
  img,
}: GrantsCardTypes) {
  const [dots, setDots] = useState(false);

  const navigate = useNavigate();

  function onSelect(id: number) {
    navigate(`/grants/${id}`);
  }

  return (
      <div className="grants-card" key={id}>
        <span className="grants-card__top flex">
          <img src={grantsLogo} alt="grants Logo" />
          <span className="three-dots">
            <img
              src={threeDotsIcon}
              onClick={() => setDots(!dots)}
              alt="dots"
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
        <p className="grants-card__type font-style__1619">{grantsType}</p>
        <span className="grants-card__middle" onClick={() => onSelect(id)}>
          <p className="font-style__2431">{text}</p>
          <img src={img} alt="oxford img" />
        </span>
        <span className="footer__grants-card flex">
          <span className="left__footer flex">
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
      </div>
  );
}

export default GrantsCard;
