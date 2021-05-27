import React from "react";
import BoxLink from "./BoxLink";
import ProjectPreview from "./ProjectPreview";

class Project extends React.Component {
  render() {
    return (
      <>
        <section class="project">
          <h2>
            {this.props.name} ({this.props.year})
          </h2>
          <ProjectPreview
            image={this.props.splashImage}
            video={this.props.video}
          />
          <p class="subtitle">{this.props.subtitle}</p>
          <p class="explanation">{this.props.description}</p>
          <div class="project-links">
            <ul>
              <BoxLink link={this.props.codeLink} text={this.props.codeText} />
              <BoxLink link={this.props.gameLink} text={this.props.gameText} />
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default Project;
