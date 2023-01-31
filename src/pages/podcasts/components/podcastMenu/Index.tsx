import React from "react";

import closeMenu from "../../../../assets/icons/setting-icons.svg";
import "./style.scss";
interface Props {
  visibility: boolean;
  toggleVisibility: () => void;
}
const PodcastMenu: React.FC<Props> = ({ visibility, toggleVisibility }) => {
  return (
    <div className={`podcast-menu ${visibility ? "show" : "hide"}`}>
      <div onClick={toggleVisibility} className="close-menu">
        <img src={closeMenu} alt="close menu" />
      </div>
      <span className="direction-box__menu box-direction">
        <h3 className="font-style__2024">Kategoriyalar</h3>
        <span className="top__box-direction">
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Barchasi
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Obunalar
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            So’ngilar
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            IT
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Texnologiya
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Biotexnologiya
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            San’at
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Ekologiya
          </label>
        </span>
      </span>
    </div>
  );
};

export default PodcastMenu;
