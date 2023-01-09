import React from "react";

import VacancyMain from "./components/vacancyMain/Index";
import Sidebar from "../../components/sidebarcha/Index";
import VacancyFeed from "./components/vacancyFeed/Index";
import Menu from "../../components/menu/Index";

function Vacancy() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <VacancyFeed />
          <div className="main-inner">
            <VacancyMain />
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
