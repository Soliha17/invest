import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { navbarUtils } from "../utils/navbar";
import Navbar from "../components/Navbar/Index";

const Rout = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Navbar />}>
          {navbarUtils.map((pages) => (
            <Route
              path={pages.path}
              element={<pages.element />}
              key={pages.id}
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
