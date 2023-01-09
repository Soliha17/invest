import React from "react";

import "./style.scss";

function Menu() {
  return (
    <div className="menu">
      <h3 className="font-style__2024">Hudud</h3>
      <form>
        <select className="select__menu">
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
        <select className="select__menu">
          <option value="viloyat">Shaharni tanlang</option>
          <option value="buxoro">Buxoro</option>
          <option value="samarqand">Samarqand</option>
          <option value="toshkent">Toshkent</option>
          <option value="sirdaryo">Sirdayo</option>
          <option value="andijon">Andijon</option>
        </select>
      </form>
      <span className="direction-box__menu box-direction">
        <h3 className="font-style__2024">Yo’nalish</h3>
        <span className="top__box-direction">
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
        <span className="bottom__box-direction">
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

export default Menu;