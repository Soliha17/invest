import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import "./style.scss";
import { grantsInfo } from "../../../../mock/grantsInfoDatas";

import copyIcon from "../../../../assets/icons/copy-icon.svg";
import spamIcon from "../../../../assets/icons/spam-icon.svg";
import grantsLogo from "../../../../assets/icons/grant-page-mark.svg";
import threeDotsIcon from "../../../../assets/icons/three-dots-icon.svg";
import eyeIcon from "../../../../assets/icons/eye-icon.svg";
import sendIcon from "../../../../assets/icons/send-icon.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";

function GrantsMain() {
  const [visibleDots, setVisibleDots] = useState<boolean[]>(() =>
    Array(grantsInfo.length).fill(false)
  );
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/grants/${id}`);
  }

  return (
    <div className="grants-container">
      {grantsInfo.map((info, index) => (
        <span className="grants-box" key={info.id}>
          <span className="grants__top flex">
            <img src={grantsLogo} alt="grants Logo" />
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
                alt="dots"
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
          <p className="grants-type font-style__1619">{info.grantsType}</p>
          <span className="grants-middle" onClick={() => onSelect(info?.id)}>
            <p className="font-style__2431">{info.text}</p>
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
              <img src={sendIcon} alt="send icon" />
              <img src={savedIcon} alt="saved icon" />
            </span>
          </span>
        </span>
      ))}
    </div>
  );
}

export default GrantsMain;
