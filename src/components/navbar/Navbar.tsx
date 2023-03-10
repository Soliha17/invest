import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSidebar } from "../../hooks/UseSidebar";

import "./navbar.scss";

import { imagePath } from "../../mock/navbarImagesDatas";
import { userLinks } from "../../mock/navbarUserActionsDatas";
import Sidebar from "../sidebar/Sidebar";

interface NavbarProps {}

const Navbar: React.FunctionComponent<NavbarProps> = () => {
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const [showActions, setShowActions] = useState(false);
  const { sidebarOpen, toggleSidebar } = useSidebar();

  function onChange() {
    setOpenProfileMenu(true);
  }

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = useCallback((event: any) => {
    const clickedElement = event.target.closest(
      ".header-section__actions-login"
    );
    if (!clickedElement) setOpenProfileMenu(false);
  }, []);

  function handleActions() {
    setShowActions(!showActions);
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
              className="hamburger-menu"
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
            <div
              className={`header-section__actions ${
                showActions ? "header-section__actions--active" : ""
              }`}
            >
              <p className="close-plus" onClick={handleActions}>
                -
              </p>
              <div className="actions-wrapper">
                <button
                  className="font-style__1619 header-section__actions-add"
                  onClick={handleActions}
                >
                  <div>Joylashtirish</div>
                  <span>+</span>
                </button>
                <span className="language-dropdown">
                  <div className="select-box dropdown__header">
                    <div className="select-box__current" tabIndex={1}>
                      <div className="select-box__value">
                        <input
                          className="select-box__input"
                          type="radio"
                          id="0"
                          value="1"
                          name="Ben"
                          defaultChecked
                        />
                        <p className="select-box__input-text font-style__1619">
                          Ruscha
                        </p>
                      </div>
                      <div className="select-box__value">
                        <input
                          className="select-box__input"
                          type="radio"
                          id="1"
                          value="2"
                          name="Ben"
                          defaultChecked
                        />
                        <p className="select-box__input-text font-style__1619">
                          Inglizcha
                        </p>
                      </div>
                      <div className="select-box__value">
                        <input
                          className="select-box__input"
                          type="radio"
                          id="2"
                          value="3"
                          name="Ben"
                          defaultChecked
                        />
                        <p className="select-box__input-text font-style__1619">
                          O'zbekcha
                        </p>
                      </div>
                    </div>
                    <ul className="select-box__list">
                      <li>
                        <label
                          className="select-box__option font-style__1619"
                          htmlFor="0"
                          aria-hidden
                        >
                          Ruscha
                        </label>
                      </li>
                      <li>
                        <label
                          className="select-box__option font-style__1619"
                          htmlFor="1"
                          aria-hidden
                        >
                          Inglizcha
                        </label>
                      </li>
                      <li>
                        <label
                          className="select-box__option font-style__1619"
                          htmlFor="2"
                          aria-hidden
                        >
                          O'zbekcha
                        </label>
                      </li>
                    </ul>
                  </div>
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
              {/* header-section__actions-login */}
              <div className="header-section__actions-login">
                <button
                  className="font-style__1619 enter-group"
                  onClick={onChange}
                >
                  <img src={imagePath.userIcon} alt="user icon" />
                  <div className="enter font-style__1619">Kirish</div>
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
