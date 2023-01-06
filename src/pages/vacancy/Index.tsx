import React from "react";

import "./style.scss";

import VacancyMain from "../../components/vacancyMain/Index";
import Sidebar from "../../components/sidebar/Index";
import VacancyFeed from "../../components/vacancyFeed/Index";
import VacancyMenu from "../../components/vacancyMenu/Index";

function Vacancy() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <VacancyFeed />
          <div className="main-inside-container">
            <VacancyMain />
            <VacancyMenu />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
