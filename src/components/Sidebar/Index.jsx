import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import {
  sidebarLinks,
  sidebarPagesLinks,
  sidebarSocialImages,
} from "../../utils/sidebarLinks";

function Sidebar() {
  const [click, setClick] = useState(4);
  const [page, setPage] = useState(1);
  const changeClick = (arg) => setClick(arg);
  const changePage = (arg) => setPage(arg);
  return (
    <div className="sidebar flex">
      <span className="sidebar__links flex">
        {sidebarLinks.map((item) => (
          <Link
            to={item.path}
            onClick={() => changeClick(item.id)}
            key={item.id}
            className={`sidebar__link flex ${
              window.location.pathname === item.path && "active-link"
            }`}
          >
            <img src={item.img} alt={item.title} />
            <p className="f-2024">{item.title}</p>
          </Link>
        ))}
      </span>
      <span className="sidebar__pages">
        <h4 className="f-2024">Sahifalar</h4>
        {sidebarPagesLinks.map((item) => (
          <Link
            key={item.id}
            onClick={() => changePage(item.id)}
            className={`sidebar__link flex ${
              page === item.id && "active-page"
            }`}
          >
            <img src={item.img} alt="" />
            <p className="f-2024">{item.title}</p>
          </Link>
        ))}
      </span>
      <span className="sidebar__footer">
        <p className="f-1619">© invest-hub Inc. 2022</p>
        <p className="f-1619">Biz bilan bog'lanish</p>
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
// 90 414 49 91
