import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./style.scss";

import {
  sidebarLinks,
  sidebarPagesLinks,
  sidebarSocialImages,
} from "../../mock/sidebarLinksDatas";

function Sidebar() {
  let location = useLocation();

  return (
    <div className="sidebar flex">
      <span className="sidebar__links flex">
        {sidebarLinks.map((item) => (
          <Link
            to={item.path}
            key={item.id}
            className={`sidebar__link flex ${
              location.pathname === item.path && "active-link"
            }`}
          >
            <img src={item.img} alt={item.title} />
            <p className="font-style__2024">{item.title}</p>
          </Link>
        ))}
      </span>
      <span
        className="sidebar__pages"
        style={
          location.pathname === "/vacancy"
            ? { display: "none" }
            : { display: "flex" }
        }
      >
        <h4 className="font-style__2024">Sahifalar</h4>
        {sidebarPagesLinks.map((link) => (
          <Link
            to={link.path}
            key={link.id}
            className={`sidebar__link flex ${
              location.pathname === link.path && "active-page"
            }`}
          >
            <img src={link.img} alt="sidebar links icon" />
            <p className="font-style__2024">{link.title}</p>
          </Link>
        ))}
      </span>
      <span className="sidebar__footer">
        <p className="font-style__1619">© invest-hub Inc. 2022</p>
        <p className="font-style__1619">Biz bilan bog'lanish</p>
        <span className="sidebar__social-group">
          {sidebarSocialImages.map((item) => (
            <img src={item.img} key={item.id} alt="social-icons" />
          ))}
        </span>
      </span>
    </div>
  );
}

export default Sidebar;
