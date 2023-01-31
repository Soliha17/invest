import React, { useState, useEffect, useCallback } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import { NewsCardData, newsCardDatas } from "../../mock/newsCardDatas";
// import { commentsData } from "../../mock/commentsDatas";

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
import backIcon from "../../assets/icons/back-icon.svg";
import Comments from "../../components/comments/Index";

function NewsFull() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [dots, setDots] = useState(false);
  const [news, setNews] = useState<NewsCardData[]>([]);
  const [openComments, setOpenComments] = useState(false);

  let result = newsCardDatas.filter((item) => {
    return item.id === Number(id);
  });

  function openCommentsFn() {
    setOpenComments(!openComments);
  }

  function goBack() {
    navigate(-1);
  }

  useEffect(() => {
    setNews(result);
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
    <>
      <div className="main wrapper">
        <div className="main-full">
          <div className="news-main news-full-main">
            <span className="back-group" onClick={goBack}>
              <img src={backIcon} alt="back icon" />
            </span>
            {news.map((item) => (
              <span className="news-card" key={item.id}>
                <span className="top__news-card flex">
                  <span className="info__top flex">
                    <img src={item.logoImg} alt="logo img" />
                    <span className="date-group flex">
                      <img src={watchIcon} alt="watch icon" />
                      <p>{item.newsDate}</p>
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
                        style={
                          dots ? { display: "block" } : { display: "none" }
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
                <span className="text__news-card">
                  <h6 className="font-style__1619">{item.newsType}</h6>
                  <h4 className="font-style__2431">{item.newsTitle}</h4>
                  <p className="font-style__2024">{item.newsText}</p>
                </span>
                <Link to={"/"} className="img__news-card">
                  <img src={item.img} alt="news img" />
                </Link>
                <span className="full-text-box">
                  {item.fullInfo.split("\n").map((text, index) => (
                    <p className="full-text font-style__2024" key={index}>
                      {text}
                    </p>
                  ))}
                </span>
                <span className="footer__news-card flex">
                  <div className="left__footer flex">
                    <p className="flex">
                      <img src={heartIcon} alt="heart icon" />
                      55
                    </p>
                    <p className="flex">
                      <img
                        src={commentIcon}
                        className="hov"
                        onClick={openCommentsFn}
                        alt="comment icon"
                      />
                      35
                    </p>
                    <p className="flex">
                      <img src={eyeIcon} alt="eye icon" />
                      100
                    </p>
                  </div>
                  <span className="right__footer flex">
                    <img src={sendIcon} alt="send icon" />
                    <img src={savedIcon} alt="saved icon" />
                  </span>
                </span>
              </span>
            ))}
            <span
              className="comments-group"
              style={openComments ? { display: "block" } : { display: "none" }}
            >
              <h3 className="font-style__2431">Izohlar</h3>
              <textarea
                className="font-style__1619"
                cols={30}
                rows={10}
                placeholder="Izoh qoldirish ..."
              ></textarea>
              <button className="send-btn font-style__1619">Yuborish</button>
              <Comments />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsFull;
