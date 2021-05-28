import React from "react";
import BoxLink from "./BoxLink";
import ProjectPreview from "./ProjectPreview";

class Project extends React.Component {
  render() {
    return (
      <>
        <section className="project">
          <h2>
            {this.props.name} ({this.props.year})
          </h2>
          <ProjectPreview
            image={this.props.splashImage}
            video={this.props.video}
          />
          <p className="subtitle">{this.props.subtitle}</p>
          <p className="explanation">{this.props.description}</p>
          <div className="project-links">
            <ul>
              <BoxLink link={this.props.codeLink} text={this.props.codeText} />
              <BoxLink link={this.props.gameLink} text={this.props.gameText} />
              <BoxLink ciBadge={this.props.ciBadge} />
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Project;
