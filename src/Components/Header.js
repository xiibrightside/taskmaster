import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  return (
    <React.Fragment>
      <header className="w-full flex flex-row justify-between items-center px-20 py-5">
        <Link to="/">
          <h1>LISTMASTER</h1>
        </Link>
        <div className="flex flex-row gap-14">
          <Link to="/settings">Settings</Link>
          <Link to="/docs">Docs</Link>
          <a
            href="https://twitter.com/badhackerdotnet"
            alt="Link for the developers Twitter Profile"
            text="Link for the developers Twitter Profile"
          >
            <FontAwesomeIcon className="iconsnav" icon={faTwitter} />
          </a>
          <a
            href="https://github.com/xiibrightside"
            alt="Link for the developers Github Page"
            text="Link for the developers Github Page"
          >
            <FontAwesomeIcon className="iconsnav" icon={faGithub} />
          </a>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
