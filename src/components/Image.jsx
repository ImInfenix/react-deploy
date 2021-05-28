import React from "react";

class Image extends React.Component {
  render() {
    if (this.props.src) {
      return (
        <input
          type="image"
          className={this.props.className}
          src={this.props.src}
          alt={this.props.alt}
        />
      );
    }

    return null;
  }
}

export default Image;
