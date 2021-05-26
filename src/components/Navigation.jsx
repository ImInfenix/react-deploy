import React from "react";
import { Link, withRouter } from "react-router-dom";

import logo from "../images/logos/Infenix.png";

function Navigation(props) {
  return (
    <nav>
      <ul>
        <li class="logo">
          <Link to="/">
            <img src={logo} alt="Infenix Logo" />
          </Link>
        </li>
        <li class="current">
          <Link to="/">Home</Link>
        </li>
        <li class="underline">
          <Link to="games">Games</Link>
        </li>
        <li class="underline">
          <Link to="projects">Projects</Link>
        </li>
        <li class="underline">
          <Link to="about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default withRouter(Navigation);
