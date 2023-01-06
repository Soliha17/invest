import React from "react";

import "./style.scss";

function VacancyMenu() {
  return (
    <div className="vacancy__menu">
      <h3 className="font-style__2024">Hudud</h3>
      <form>
        <select className="select">
          <option value="viloyat">Viloyatni tanlang</option>
          <option value="buxoro">Buxoro</option>
          <option value="samarqand">Samarqand</option>
          <option value="toshkent">Toshkent</option>
          <option value="sirdaryo">Sirdayo</option>
          <option value="andijon">Andijon</option>
        </select>
      </form>
      <h4 className="font-style__1619">Tuman/shahar</h4>
      <form>
        <select className="select">
          <option value="viloyat">Shaharni tanlang</option>
          <option value="buxoro">Buxoro</option>
          <option value="samarqand">Samarqand</option>
          <option value="toshkent">Toshkent</option>
          <option value="sirdaryo">Sirdayo</option>
          <option value="andijon">Andijon</option>
        </select>
      </form>
      <span className="direction-box">
        <h3 className="font-style__2024">Yo’nalish</h3>
        <span className="direction__checkbox">
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Barchasi
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Marketing
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Design
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Managment
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            HR
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Analitika
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Administratsiya
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Iqtisod
          </label>
        </span>
        <span className="condition-box">
          <h3 className="font-style__2024">Holat</h3>

          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Offline
          </label>
          <label className="checkbox">
            <input type="checkbox" />
            <span className="checkmark"></span>
            Online
          </label>
        </span>
      </span>
    </div>
  );
}

export default VacancyMenu;
