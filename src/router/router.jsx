import React from "react";
import { Route, Routes } from "react-router-dom";

import { navbarUtils } from "../utils/navbar";
import Navbar from "../components/Navbar/Index";

const Rout = () => {
  return (
    <div>
      <Routes>
        <Route element={<Navbar />}>
          {navbarUtils.map((pages) => (
            <Route key={pages.id} path={pages.path} element={pages.element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
};

export default Rout;
