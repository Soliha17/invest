import React from "react";
import Sidebar from "../../components/Sidebar/Index";
import Grants from "../grants/Index";
import News from "../news/Index";



function Home() {
  return (
    <div className="wrapper">
      <div className="main">
        <Sidebar />
        <div className="main-full">
          <h1>Bu Home ya'ni asosiy sahifa</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;
