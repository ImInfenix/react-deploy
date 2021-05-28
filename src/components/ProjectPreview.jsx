import React from "react";
import Image from "./Image";

class ProjectPreview extends React.Component {
  render() {
    if (this.props.image) {
      return (
        <Image
          type="image"
          className="splash"
          src={this.props.image}
          alt="Project Image Preview"
        />
      );
    }

    if (this.props.video)
      return (
        <iframe
          title="video preview"
          className="splash"
          width="560"
          height="315"
          src={this.props.video}
          frameBorder="0"
          allowFullScreen
        />
      );

    return null;
  }
}

export default ProjectPreview;
