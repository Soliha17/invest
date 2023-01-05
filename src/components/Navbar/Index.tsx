import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./style.scss";

import { imagePath } from "../../utils/navbarImages";
import { userLinks } from "../../utils/navbarUserActions";

function Navbar() {
  const [login, setLogin] = useState(false);
  function onChange() {
    setLogin(true);
  }
  return (
    <>
      <header className="header wrapper flex">
        <div className="header__logo-group flex">
          <img src={imagePath.menuIcon} alt="menu-icon" />
          <img src={imagePath.investLogo} alt="invest hub logo" />
        </div>
        <div className="header__input-group flex">
          <img src={imagePath.searchIcon} alt="" />
          <input type="text" className="f-1619" placeholder="Izlash..." />
        </div>
        <div className="header__action flex">
          <button className="add-btn flex f-1619">
            Joylashtirish
            <img src={imagePath.plusIcon} alt="" />
          </button>
          <span className="dropdown__header">
            <button className="flex f-1619">
              O‘zbekcha
              <img src={imagePath.dropdownIcon} alt="dropdown icon" />
            </button>
            <span className="dropdown-content">
              <Link to="">Russian</Link>
              <Link to="">English</Link>
            </span>
          </span>
          <span className="login__header">
            <button className="flex f-1619" onClick={onChange}>
              <img src={imagePath.userIcon} alt="user icon" />
              Kirish
            </button>
            <span
              className="login-content"
              style={login ? { display: "block" } : { display: "none" }}
            >
              <img
                src={imagePath.closeIcon}
                className="close-icon"
                alt="close icon"
                onClick={() => setLogin(!login)}
              />
              <span className="profile-info flex">
                <span className="camere-group flex">
                  <img src={imagePath.camereIcon} alt="camera" />
                </span>
                <span className="info-group">
                  <h6 className="f-1619">Qayum Murtazoyev</h6>
                  <p>+9989 *** ** 99</p>
                </span>
              </span>
              <span className="profile-links flex">
                {userLinks.map((item) => (
                  <span className="profile-link flex" key={item.id}>
                    <Link to={item.path} className="link-title flex">
                      <img src={item.img} alt="saved icon" />
                      <p className="fs-2024">{item.title}</p>
                    </Link>
                    {item.rightImg ? (
                      <img src={item.rightImg} alt="right arrow icon" />
                    ) : item.rightImg === false ? (
                      ""
                    ) : (
                      <>
                        <input
                          type="checkbox"
                          className="switch-input"
                          id="switch"
                        />
                        <label htmlFor="switch" className="switch-label">
                          Toggle
                        </label>
                      </>
                    )}
                  </span>
                ))}
              </span>
            </span>
          </span>
        </div>
      </header>
      <Outlet />
    </>
  );
}
export default Navbar;
