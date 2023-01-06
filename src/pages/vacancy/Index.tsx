import React from "react";

import "./style.scss"

import VacancyMain from "../../components/VacancyMain/Index";
import Sidebar from "../../components/Sidebar/Index";
import VacancyFeed from "../../components/VacancyFeed/Index";
import VacancyMenu from "../../components/VacancyMenu/Index";

function Vacancy() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <VacancyFeed />
          <div className="main-inside-container">
            <VacancyMain />
            <VacancyMenu/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
