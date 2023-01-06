import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

import copyIcon from "../../assets/icons/copy-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import heartIcon from "../../assets/icons/heart-icon.svg";
import commentIcon from "../../assets/icons/comment-icon.svg";
import eyeIcon from "../../assets/icons/eye-icon.svg";
import sendIcon from "../../assets/icons/send-icon.svg";
import savedIcon from "../../assets/icons/saved-icon.svg";
import plusIcon from "../../assets/icons/kvd-plus-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import { newsInfos } from "../../utils/newsInfo";

function NewsMain() {
  const [dots, setDots] = useState(false);
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/news/${id}`);
  }
  return (
    <div className="news-main">
      {newsInfos.map((item) => (
        <span className="new" key={item.id}>
          <span className="top__news-main flex">
            <span className="info__top flex">
              <img src={item.logoImg} alt="" />
              <span className="date-group flex">
                <img src={watchIcon} alt="" />
                <p className="f-1215">{item.newsDate}</p>
              </span>
            </span>
            <span className="action__top flex">
              <img src={plusIcon} alt="" />
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
          </span>
          <span className="news__text" onClick={() => onSelect(item?.id)}>
            <h6 className="f-1619">{item.newsType}</h6>
            <h4 className="f-2431">{item.newsTitle}</h4>
            <p className="f-2024">{item.newsText}</p>
          </span>
          <Link className="news__img" to={""}>
            <img src={item.img} alt="" />
          </Link>
          <span className="footer__news-main flex">
            <span className="left__footer flex">
              <p className="flex">
                <img src={heartIcon} alt="" />
                55
              </p>
              <p className="flex">
                <img src={commentIcon} alt="" />
                35
              </p>
              <p className="flex">
                <img src={eyeIcon} alt="" />
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

export default NewsMain;
