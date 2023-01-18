import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSidebar } from "../../hooks/UseSidebar";

import "./style.scss";

import { imagePath } from "../../mock/navbarImagesDatas";
import { userLinks } from "../../mock/navbarUserActionsDatas";
import Sidebar from "../sidebar/Index";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const { sidebarOpen, toggleSidebar } = useSidebar();

  function onChange() {
    setOpenProfileMenu(true);
  }

  return (
    <>
      <header className="header">
        <div className="container header-section">
          <div className="header-section__images">
            <img
              src={imagePath.menuIcon}
              alt="menu-icon"
              onClick={toggleSidebar}
            />
            <img src={imagePath.investLogo} alt="invest hub logo" />
          </div>
          <div className="inner-wrapper">
            <div className="header-section__searching">
              <img
                className="header-section__searching-icon"
                src={imagePath.searchIcon}
                alt="search icon"
              />
              <input
                type="text"
                className="font-style__1619"
                placeholder="Izlash..."
              />
            </div>
            <div className="header-section__actions">
              <div className="actions-wrapper">
                <button className="font-style__1619 header-section__actions-add">
                  <div>Joylashtirish</div>
                  <span>+</span>
                </button>
                <span className="language-dropdown">
                  <select className="dropdown__header font-style__1619">
                    <option value="uz">O'zbekcha</option>
                    <option value="ru">Ruscha</option>
                    <option value="en">Inglizcha</option>
                  </select>
                  <select className="dropdown__header--short font-style__1619">
                    <option value="uz">Uz</option>
                    <option value="ru">Ru</option>
                    <option value="en">En</option>
                  </select>
                  <img
                    className="dropdown-icon"
                    src={imagePath.dropdownIcon}
                    alt="ArrowDown"
                  />
                </span>
              </div>

              <div className="header-section__actions-login">
                <button className="font-style__1619" onClick={onChange}>
                  <img src={imagePath.userIcon} alt="user icon" />
                  <div className="enter">Kirish</div>
                </button>

                <div
                  className="login-content"
                  style={
                    openProfileMenu ? { display: "block" } : { display: "none" }
                  }
                >
                  <img
                    src={imagePath.closeIcon}
                    className="close-icon"
                    alt="close icon"
                    onClick={() => setOpenProfileMenu(!openProfileMenu)}
                  />

                  <div className="login-content__user">
                    <div className="camera">
                      <img src={imagePath.camereIcon} alt="camera" />
                    </div>

                    <div className="login-content__user-info">
                      <h6 className="font-style__1619">Qayum Murtazoyev</h6>
                      <p className="font-style__1417">+9989 *** ** 99</p>
                    </div>
                  </div>
                  <div className="login-content__sections">
                    {userLinks.map((userLink) => (
                      <div className="section" key={userLink.id}>
                        <Link to={userLink.path} className="section-link">
                          <img src={userLink.img} alt="saved icon" />
                          <p className="font-style__2024">{userLink.title}</p>
                        </Link>
                        {userLink.rightImg ? (
                          <img src={userLink.rightImg} alt="right arrow icon" />
                        ) : userLink.rightImg === false ? (
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
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <Outlet />
    </>
  );
};
export default Navbar;
