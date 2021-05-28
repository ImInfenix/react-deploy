import React from "react";

class Image extends React.Component {
  render() {
    if (this.props.src) {
      var imagePath;

      if (this.props.src.charAt(0) === "/") {
        imagePath = process.env.PUBLIC_URL + this.props.src;
      } else {
        imagePath = this.props.src;
      }

      return (
        <input
          type="image"
          className={this.props.className}
          src={imagePath}
          alt={this.props.alt}
        />
      );
    }

    return null;
  }
}

export default Image;
