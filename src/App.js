/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Docs from "./Pages/Docs";
import Header from "./Components/Header";

const App = () => {
  return (
    // ayush
    <React.Fragment>
      <div className="homepage-container w-full flex flex-col justify-center items-center gap-10">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/docs" element={<Docs />} />
        </Routes>
      </div>
      <div className="mobile-view">
        <h1>iLumnr doesn't work on Mobile</h1>
      </div>
    </React.Fragment>
  );
};

export default App;
