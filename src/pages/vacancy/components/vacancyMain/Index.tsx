import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";
import { vacancyCards } from "../../../../mock/vacancyCardDatas";
import VacancyCard from "../vacancyCard/Index";


function VacancyMain() {
  return (
    <div className="vacancy-main">
      {vacancyCards.map((item) => (
        <React.Fragment key={item.id}>
          <VacancyCard
            id={item.id}
            path={item.path}
            vacancyTitle={item.vacancyTitle}
            vacancySalary={item.vacancySalary}
            vacancyType={item.vacancyType}
            vacancyDate={item.vacancyDate}
            vacancyLocation={item.vacancyLocation}
            logoImg={item.logoImg}
            demands={item.demands}
            conditions={item.conditions}
            tasks={item.tasks}
          />
        </React.Fragment>
      ))}
    </div>
  );
}

export default VacancyMain;
