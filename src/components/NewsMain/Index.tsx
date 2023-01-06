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
  const [visibleDots, setVisibleDots] = useState<boolean[]>(() =>
    Array(newsInfos.length).fill(false)
  );
  const navigate = useNavigate();
  function onSelect(id: number) {
    navigate(`/news/${id}`);
  }
  return (
    <div className="news-main">
      {newsInfos.map((item, index) => (
        <span className="new" key={item.id}>
          <span className="top__news-main flex">
            <span className="info__top flex">
              <img src={item.logoImg} alt="" />
              <span className="date-group flex">
                <img src={watchIcon} alt="watch icon" />
                <p className="font-style__1215">{item.newsDate}</p>
              </span>
            </span>
            <span className="action__top flex">
              <img src={plusIcon} alt="plus icon" />
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
          </span>
          <span className="news__text" onClick={() => onSelect(item?.id)}>
            <h6 className="font-style__1619">{item.newsType}</h6>
            <h4 className="font-style__2431">{item.newsTitle}</h4>
            <p className="font-style__2024">{item.newsText}</p>
          </span>
          <Link className="news__img" to={""}>
            <img src={item.img} alt="" />
          </Link>
          <span className="footer__news-main flex">
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
      ))}
    </div>
  );
}

export default NewsMain;
