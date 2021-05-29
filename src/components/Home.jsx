import React from "react";
import "./styles/resume.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="brick home">
          <h2>Hi ! I'm Duncan.</h2>
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
