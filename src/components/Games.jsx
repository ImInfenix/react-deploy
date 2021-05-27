import React from "react";
import Project from "./Project";
import "./styles/project.css";

import { gamesData } from "../data/games";

function Games() {
  return (
    <div class="projects">
      <h1>Games</h1>

      {gamesData.map((data, key) => {
        return (
          <Project
            name={data.name}
            year={data.year}
            description={data.description}
            splashImage={data.splashImage}
            video={data.video}
            subtitle={data.subtitle}
            codeLink={data.codeLink}
            codeText={data.codeText}
            gameLink={data.gameLink}
            gameText={data.gameText}
          />
        );
      })}
    </div>
  );
}

export default Games;
