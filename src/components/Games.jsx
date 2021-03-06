import React from "react";
import Project from "./Project";
import "./styles/project.css";

import { gamesData } from "../data/games";
import { Trans } from "react-i18next";

class Games extends React.Component {
  render() {
    return (
      <div className="projects">
        <h1>
          <Trans i18nKey="Games" />
        </h1>

        {gamesData.map((data, key) => {
          return (
            <Project
              key={key}
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
}

export default Games;
