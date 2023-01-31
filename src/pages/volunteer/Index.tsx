import React from "react";
import { useSidebar } from "../../hooks/UseSidebar";

import Menu from "../../components/menu/Index";
import VolunteerFeed from "./components/volunteerFeed/Index";
import VolunteerMain from "./components/volunteerMain/Index";

function Volunteer() {
  const [visibility, setVisibility] = React.useState(true);

  const toggleVisibility = () => {
    setVisibility(!visibility);
  };
  return (
    <div className="wrapper">
      <div className="main">
        <div className="main-full">
          <VolunteerFeed
            visibility={visibility}
            toggleVisibility={toggleVisibility}
          />
          <div className="main-inner">
            <VolunteerMain />
            <Menu visibility={visibility} toggleVisibility={toggleVisibility} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Volunteer;
