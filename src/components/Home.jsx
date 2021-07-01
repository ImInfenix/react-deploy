import React from "react";
// import { Trans } from "react-i18next";
import i18next from "i18next";
import "./styles/resume.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="brick home">
          <h2>
            {/* <Trans i18nKey="home_hello" /> */}
            {i18next.t("home_hello")}
          </h2>
          <p>
            I'm a 21 years old student in image processing and game development.
          </p>
        </div>
        <div className="brick resume">
          <a
            href={
              process.env.PUBLIC_URL +
              "/documents/Resume_Duncan_Sourdin_NoPersonal.pdf"
            }
          >
            Download my resume
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
