import React from "react";
import "./styles/timeline.css";

import { aboutTimelinesData } from "../data/aboutTimelinesData";
import Timeline from "./Timeline";

function About() {
  return (
    <div>
      <div className="brick">
        <div className="home">
          <p>
            You can contact me at{" "}
            <a
              className="box-link"
              href="mailto:duncan.sourdin@protonmail.com?subject=Questions"
            >
              duncan.sourdin@protonmail.com
            </a>
          </p>
        </div>
      </div>

      {aboutTimelinesData.map((data, key) => {
        return (
          <Timeline
            key={key}
            category={data.category}
            elements={data.elements}
          />
        );
      })}
    </div>
  );
}

export default About;
