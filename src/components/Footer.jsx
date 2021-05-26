import React from "react";

import githubMark from "../images/logos/GitHub-Mark-Light-64px.png";
import itch from "../images/logos/itchio-textless-white.svg";
import linkedin from "../images/logos/In-White-48.png";

function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/ImInfenix" rel="noreferrer">
              <img src={githubMark} alt="Github Mark" />
            </a>
          </li>
          <li>
            <a href="https://infenix.itch.io/" rel="noreferrer">
              <img src={itch} alt="Itch Mark" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/duncan-sourdin/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="LinkedIn Mark" />
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
