import React from "react";
import { Link, withRouter } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logos/Infenix.png"}
                alt="Infenix Logo"
              />
            </Link>
          </li>
          <li className="underline">
            <Link to="/">Home</Link>
          </li>
          <li className="underline">
            <Link to="games">Games</Link>
          </li>
          <li className="underline">
            <Link to="projects">Projects</Link>
          </li>
          <li className="underline">
            <Link to="about">About</Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default withRouter(Navigation);
