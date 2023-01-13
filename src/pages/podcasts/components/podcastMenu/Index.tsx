import React from "react";
import { useLocation } from "react-router-dom";

import "./style.scss";

function PodcastMenu() {
  const location = useLocation();
  return (
    <div className="podcast-menu">
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
}

export default PodcastMenu;
