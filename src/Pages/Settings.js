import React from "react";
import { Link, Outlet } from "react-router-dom";

const Settings = () => {
  return (
    <React.Fragment>
      <h1>SETTINGS</h1>
      <div className="w-1/2 flex flex-row justify-center items-center gp-10">
        <div className="w-2/5 flex flex-col gap-10">
          <Link to="/settings/set-values">Values</Link>
          <Link to="/settings/set-lists">Lists</Link>
        </div>
        <div className="w-3/5 flex justify-center items-center">
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Settings;
