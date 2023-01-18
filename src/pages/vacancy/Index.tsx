import React, { useEffect,useState } from "react";
import { useSidebar } from "../../hooks/UseSidebar";

import VacancyMain from "./components/vacancyMain/Index";
import Sidebar from "../../components/sidebar/Index";
import VacancyFeed from "./components/vacancyFeed/Index";
import Menu from "../../components/menu/Index";

const Vacancy: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useSidebar();
  const [visibility, setVisibility] = useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="wrapper">
      <div className="main">
        {/* <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} /> */}
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
