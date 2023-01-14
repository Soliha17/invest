import React, { useState } from "react";

import "./style.scss";

import {
  PodcastsCardData,
  podcastsCardDatas,
} from "../../../../mock/podcastsCardDatas";

import voiceIcon from "../../../../assets/icons/mickrophone-icon.svg";
import smallHeartIcon from "../../../../assets/icons/small-heart-icon.svg";
import smallShareIcon from "../../../../assets/icons/small-share-icon.svg";
import smallSavedIcon from "../../../../assets/icons/small-saved-icon.svg";
// const [cardActive, setCardActive] = useState(false);
// function isCardActive() {
//   setCardActive(true);
// }
// !showItems[id - 1]
//   ? { borderColor: "#008B34" }
//   : { borderColor: "transparent" }
export interface IProps {
  id: number;
  title: string;
  text: string;
  podcastTime: string;
  img: any;
  bug: number;
  setBug: Function;
}

function PodcastsCard({
  id,
  img,
  title,
  text,
  podcastTime,
  bug,
  setBug,
}: IProps) {
  // const [showItems, setShowItems] = useState(() =>
  //   Array(podcastsCardDatas.length).fill(false)
  // );

  return (
    <div
      className="podcast-card"
      style={{
        border: bug === id ? "1px solid green" : "1px solid transparent",
      }}
      onClick={() => setBug(id)}
    >
      <span className="top__podcast-card">
        <img
          src={img}
          alt="podcast img"
          style={{
            padding: bug === id ? "10px 3px 5px 3px" : "0",
            width: "309px"
          }}
        />
      </span>
      <span className="bottom__podcast-card">
        <h4 className="font-style__1619">{title}</h4>
        <h5 className="font-style__1215">{text}</h5>
        <span className="footer__podcast-card">
          <span className="left__footer">
            <img src={voiceIcon} alt="voice icon" />
            <p className="font-style__1215">{podcastTime}</p>
          </span>
          <span className="right__footer">
            <span className="action-group__footer">
              <div>
                <img src={smallHeartIcon} alt="heart icon" />
              </div>
              <p className="font-style__1215">55</p>
            </span>
            <span className="action-group__footer">
              <img src={smallShareIcon} alt="share icon" />
            </span>
            <span className="action-group__footer">
              <img src={smallSavedIcon} alt="saved icon" />
            </span>
          </span>
        </span>
      </span>
    </div>
  );
}

export default PodcastsCard;
