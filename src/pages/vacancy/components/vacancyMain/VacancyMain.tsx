import React from "react";

import "./vacancyMain.scss";
import { vacancyCards } from "../../../../mock/vacancyCardDatas";
import VacancyCard from "../vacancyCard/VacancyCard";


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
