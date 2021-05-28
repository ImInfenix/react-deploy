import React from "react";
import Project from "./Project";
import "./styles/project.css";

import { projectsData } from "../data/projects";

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>

      {projectsData.map((data, key) => {
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
            ciBadge={data.ciBadge}
          />
        );
      })}
    </div>
  );
}

export default Projects;
