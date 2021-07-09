import React from "react";
import { Trans } from "react-i18next";
import "./styles/resume.css";
import i18n from "../i18n";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="brick home">
          <h2>
            <Trans i18nKey="home_hello" />
          </h2>
          <p>
            <Trans i18nKey="home_short_presentation" />
          </p>
        </div>
        <div className="brick resume">
          <a
            href={
              process.env.PUBLIC_URL +
              (i18n.language === "fr"
                ? "/documents/CV_Duncan_Sourdin_NoPersonal.pdf"
                : "/documents/Resume_Duncan_Sourdin_NoPersonal.pdf")
            }
          >
            <Trans i18nKey="home_download_resume" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
