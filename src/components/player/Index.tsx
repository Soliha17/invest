import React, { useState, useEffect, useCallback } from "react";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import listenImg from "../../assets/images/listent-img.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import savedIcon from "../../assets/icons/small-saved-listen-icon.svg";
import shareIcon from "../../assets/icons/small-share-listen-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";

import "./style.scss";

function Player() {
  const [dots, setDots] = useState(false);

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

  const playerHeader = (
    <div className="listent-info-container">
      <img src={listenImg} alt="korinmayopti" />
      <span>
        <h1 className="font-style__1619">FrontoWeek</h1>
        <p className="font-style__1215">Thewizardlizz</p>
      </span>
    </div>
  );
  const playerFooter = (
    <div className="player-footer">
      <span className="three-dots">
        <img
          src={threeDotsIcon}
          onClick={() => setDots(!dots)}
          alt="dots icon"
        />
        <span
          className="dots-content"
          style={dots ? { display: "flex" } : { display: "none" }}
        >
          <span>
            <img src={savedIcon} alt="saved icon" />
            Saqlash
          </span>
          <span>
            <img src={shareIcon} alt="share icon" />
            Ulashish
          </span>
          <span>
            <img src={spamIcon} alt="spam icon" />
            Shikoyat qilish
          </span>
        </span>
      </span>
    </div>
  );
  return (
    <div className="player-container">
      <div className="player">
        <AudioPlayer
          header={playerHeader}
          src="https://hanzluo.s3-us-west-1.amazonaws.com/music/wuyuwuqing.mp3"
          volume={0.5}
          footer={playerFooter}
        />
      </div>
    </div>
  );
}

export default Player;
