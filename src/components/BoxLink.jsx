import React from "react";
import "./styles/project.css";

class BoxLink extends React.Component {
  render() {
    if (!this.props.link || !this.props.text) return null;

    return (
      <li>
        <a href={this.props.link} class="box-link">
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default BoxLink;
