import React from "react";
import "./styles/timeline.css";

import { aboutTimelinesData } from "../data/aboutTimelinesData";
import Timeline from "./Timeline";
import { Trans } from "react-i18next";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="brick">
          <div className="home">
            <p>
              <Trans i18nKey="about_contact_at" />{" "}
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
}

export default About;
