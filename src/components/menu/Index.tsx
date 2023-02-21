import React,{useEffect, useState} from "react";
import Select from "react-select";
import { useLocation } from "react-router-dom";

import { countryOptions, cityOptions } from "../../utils/MenuSelect";

import closeMenu from "../../assets/icons/setting-icons.svg";

import "./style.scss";
interface Props {
  visibility: boolean;
  toggleVisibility: () => void;
}

const Menu: React.FC<Props> = ({ visibility, toggleVisibility }) => {
  const [showMenu, setShowMenu] = useState("menu");
  const location = useLocation();

  useEffect(() => {
    !visibility ? setShowMenu("menu menu--active") : setShowMenu("menu");
  });

  return (
    <div className={showMenu}>
      <div onClick={toggleVisibility} className="close-menu">
        <img src={closeMenu} alt="close menu" />
      </div>
      <div className="menu__content">
        <h3 className="font-style__2024">Hudud</h3>
        <form className="menu__select-form">
          <Select
            placeholder="Viloyatni tanlang"
            options={countryOptions}
            theme={(theme: any) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,

                primary25: "#d8e0e7",
                primary: "#008b34",
              },
            })}
          />
        </form>
        <h4 className="font-style__1619">Tuman/shahar</h4>
        <form className="menu__select-form">
          <Select
            placeholder="Shaharni tanlang"
            options={cityOptions}
            theme={(theme: any) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,

                primary25: "#d8e0e7",
                primary: "#008b34",
              },
            })}
          />
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
          <span
            className="bottom__box-direction"
            style={
              location.pathname === "/volunteer"
                ? { display: "none" }
                : { display: "block" }
            }
          >
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
    </div>
  );
};

export default Menu;
