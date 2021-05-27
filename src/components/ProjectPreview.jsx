import React from "react";

class ProjectPreview extends React.Component {
  render() {
    if (this.props.image) {
      return (
        <input
          type="image"
          class="splash"
          src={this.props.image}
          alt="Project Image Preview"
        />
      );
    }

    if (this.props.video)
      return (
        <iframe
          title="video preview"
          class="splash"
          width="560"
          height="315"
          src={this.props.video}
          frameborder="0"
          allowfullscreen
        />
      );

    return null;
  }
}

export default ProjectPreview;
