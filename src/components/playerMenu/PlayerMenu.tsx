import React from "react";

import "./playerMenu.scss";

import watchGreenGroup from "../../assets/icons/watch-green-group.svg";
import smallWatchGreenGroup from "../../assets/icons/small-watch-green-group.svg";
import heartBlackGroup from "../../assets/icons/heart-black-group.svg";
import threeDotsBlackIcon from "../../assets/icons/three-dots-black-icon.svg";
import closeIcon from "../../assets/icons/close-icon.svg";
import watchIcon from "../../assets/icons/small-watch-icon.svg";
import smallDateIcon from "../../assets/icons/small-date-icon.svg";

interface PodcastMenuProps {
  handleClose: () => void;
}

const PlayerMenu: React.FC<PodcastMenuProps> = ({ handleClose }) => {
  return (
    <div className="player-info">
      <span className="login__header">
        <span className="content__login">
          <img
            src={closeIcon}
            onClick={handleClose}
            className="close-icon"
            alt="close icon"
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
            <span className="music-group">
              <span className="left__music-group">
                <h1 className="font-style__2024">9</h1>
                <p className="font-style__1619">Konsta</p>
              </span>
              <p className="font-style__1619">2:29</p>
            </span>
            <span className="music-group">
              <span className="left__music-group">
                <h1 className="font-style__2024">10</h1>
                <p className="font-style__1619">Timur Alixanov</p>
              </span>
              <p className="font-style__1619">2:29</p>
            </span>
          </span>
        </span>
      </span>
    </div>
  );
};

export default PlayerMenu;
