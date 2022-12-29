import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

import {
  sidebarLinks,
  sidebarPagesLinks,
  sidebarSocialImages,
} from "../../utils/sidebarLinks";

function Sidebar() {
  return (
    <div className="sidebar flex">
      <span className="sidebar__links flex">
        {sidebarLinks.map((item) => (
          <Link to={item.path} className="sidebar__link flex">
            <img src={item.img} alt={item.title} />
            <p className="f-2024">{item.title}</p>
          </Link>
        ))}
      </span>
      <span className="sidebar__pages">
        <h4 className="f-2024">Sahifalar</h4>
        {sidebarPagesLinks.map((item) => (
          <Link className="sidebar__page flex">
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
            <img src={item.img} />
          ))}
        </span>
      </span>
    </div>
  );
}

export default Sidebar;
// 90 414 49 91
