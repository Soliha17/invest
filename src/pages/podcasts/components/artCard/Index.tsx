import React from "react";

import "./style.scss";

import { PodcastsCardData } from "../../../../mock/podcastsCardDatas";

import voiceIcon from "../../../../assets/icons/mickrophone-icon.svg";
import smallHeartIcon from "../../../../assets/icons/small-heart-icon.svg";
import smallShareIcon from "../../../../assets/icons/small-share-icon.svg";
import smallSavedIcon from "../../../../assets/icons/small-saved-icon.svg";

function ArtCard({ id, img, title, text, podcastTime }: PodcastsCardData) {
  return (
    <div className="podcast-card">
      <span className="top__podcast-card">
        <img src={img} alt="podcast img" />
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

export default ArtCard;
