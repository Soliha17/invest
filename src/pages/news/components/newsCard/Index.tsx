import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";

import "./style.scss";
import { NewsCardData } from "../../../../mock/newsCardDatas";

import copyIcon from "../../../../assets/icons/copy-icon.svg";
import spamIcon from "../../../../assets/icons/spam-icon.svg";
import heartIcon from "../../../../assets/icons/heart-icon.svg";
import commentIcon from "../../../../assets/icons/comment-icon.svg";
import eyeIcon from "../../../../assets/icons/eye-icon.svg";
import sendIcon from "../../../../assets/icons/send-icon.svg";
import savedIcon from "../../../../assets/icons/saved-icon.svg";
import plusIcon from "../../../../assets/icons/kvd-plus-icon.svg";
import threeDotsIcon from "../../../../assets/icons/three-dots-icon.svg";
import watchIcon from "../../../../assets/icons/small-watch-icon.svg";

function NewsCard({
  id,
  path,
  logoImg,
  newsDate,
  newsType,
  newsTitle,
  newsText,
  img,
  fullInfo,
}: NewsCardData) {
  const [dots, setDots] = useState(false);
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/news/${id}`);
  }

  return (
    <>
      <span className="news-card" key={id}>
        <span className="top__news-card flex">
          <span className="info__top flex">
            <img src={logoImg} alt="" />
            <span className="date-group flex">
              <img src={watchIcon} alt="watch icon" />
              <p className="font-style__1215">{newsDate}</p>
            </span>
          </span>
          <span className="action__top flex">
            <img src={plusIcon} alt="plus icon" />
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
        </span>
        <span className="text__news-card" onClick={() => onSelect(id)}>
          <h6 className="font-style__1619">{newsType}</h6>
          <h4 className="font-style__2431">{newsTitle}</h4>
          <p className="font-style__2024">{newsText}</p>
        </span>
        <Link className="img__news-card" to={""}>
          <img src={img} alt="" />
        </Link>
        <span className="footer__news-card flex">
          <span className="left__footer flex">
            <p className="flex">
              <img src={heartIcon} alt="heart icon" />
              55
            </p>
            <p className="flex">
              <img src={commentIcon} alt="comment icon" />
              35
            </p>
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

export default NewsCard;
