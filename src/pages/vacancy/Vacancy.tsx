import React, { useState } from "react";

import VacancyMain from "./components/vacancyMain/VacancyMain";
import VacancyFeed from "./components/vacancyFeed/VacancyFeed";
import Menu from "../../components/menu/Menu";

const Vacancy: React.FC = () => {
  const [visibility, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="wrapper">
      <div className="main">
        <div className="main-full">
          <VacancyFeed
            visibility={visibility}
            toggleVisibility={toggleVisibility}
          />
          <div className="main-inner">
            <VacancyMain />
            <Menu visibility={visibility} toggleVisibility={toggleVisibility} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vacancy;
