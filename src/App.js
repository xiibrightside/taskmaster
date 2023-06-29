/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Docs from "./Pages/Docs";
import Header from "./Components/Header";
import Settings from "./Pages/Settings";
import SplitValues from "./Pages/Settings Pages/SplitValues";
import ListNumber from "./Pages/Settings Pages/ListNumber";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <React.Fragment>
      <div className="homepage-container w-full flex flex-col justify-center items-center gap-10">
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="docs" element={<Docs />} />
          <Route path="settings" element={<Settings />}>
            <Route index element={<SplitValues />} />
            <Route path="set-values" element={<SplitValues />} />
            <Route path="set-lists" element={<ListNumber />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <div className="mobile-view">
        <h1>iLumnr doesn't work on Mobile</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
