import React, { useState } from "react";

import listenImg from "../../assets/images/listent-img.svg";

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/src/styles.scss";

import "./style.scss";
import closeIcon from "../../assets/icons/close-icon.svg";

import watchGreenGroup from "../../assets/icons/watch-green-group.svg";
import smallWatchGreenGroup from "../../assets/icons/small-watch-green-group.svg";
import heartBlackGroup from "../../assets/icons/heart-black-group.svg";
import threeDotsBlackIcon from "../../assets/icons/three-dots-black-icon.svg";
import threeDotsIcon from "../../assets/icons/three-dots-icon.svg";
import savedIcon from "../../assets/icons/small-saved-listen-icon.svg";
import shareIcon from "../../assets/icons/small-share-listen-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import smallDateIcon from "../../assets/icons/small-date-icon.svg";
import spamIcon from "../../assets/icons/spam-icon.svg";
import Sidebar from "../../components/sidebar/Index";
import PodcastsFeed from "./components/podcastsFeed/Index";
import PodcastsMain from "./components/podcastsMain/Index";
import PodcastMenu from "./components/podcastMenu/Index";

function Podcasts() {
  const [dots, setDots] = useState(false);
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
    <div className="wrapper podcast-wrapper">
      <div className="main podcast-main">
        <Sidebar />
        <div className="main-full podcast-full">
          <PodcastsFeed />
          <div className="main-inner">
            <PodcastsMain />
            <PodcastMenu />
          </div>
        </div>
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
        <div className="player-info">
          <span className="login__header">
            {/* <button className="flex font-style__1619" onClick={onChange}>
              <img src={imagePath.userIcon} alt="user icon" />
              Kirish
            </button> */}
            <span
              className="content__login"
              // style={
              //   openProfileMenu ? { display: "block" } : { display: "none" }
              // }
            >
              <img
                src={closeIcon}
                className="close-icon"
                alt="close icon"
                // onClick={() => setOpenProfileMenu(!openProfileMenu)}
              />
              <span className="profile-info__login">
                <span className="camere-group flex">
                  <h3 className="font-style__1619">Albom</h3>
                  <p className="font-style__1215">IT</p>
                </span>
                <h1 className="font-style__2431">IT Life</h1>
                <span className="info-group">
                  <h6 className="font-style__1619">Kuylovchi:</h6>
                  <p className="font-style__1619">Thewizardlizz</p>
                </span>
                <span className="top__dates">
                  <span>
                    <img src={smallDateIcon} alt="eye icon" />
                    <p className="font-style__1215">02.08.2022 </p>
                  </span>
                  <span>
                    <img src={watchIcon} alt="watch icon" />
                    <p className="font-style__1215">14:36</p>
                  </span>
                </span>
                <span className="action-group">
                  <img src={watchGreenGroup} alt="green watch icon" />
                  <img src={heartBlackGroup} alt="black heart icon" />
                  <span className="three-dots-group">
                    <img
                      src={threeDotsBlackIcon}
                      alt="black three dots icon"
                      width={12}
                    />
                  </span>
                </span>
              </span>
              <span className="profile-links__login">
                <span className="music-group">
                  <span className="left__music-group">
                    <img src={smallWatchGreenGroup} alt="small green group" />
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">2</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">3</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">4</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">5</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">6</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">7</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
                <span className="music-group">
                  <span className="left__music-group">
                    <h1 className="font-style__2024">8</h1>
                    <p className="font-style__1619">IT Life</p>
                  </span>
                  <p className="font-style__1619">2:29</p>
                </span>
              </span>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Podcasts;
