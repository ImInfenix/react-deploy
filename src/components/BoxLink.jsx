import React from "react";
import "./styles/project.css";

class BoxLink extends React.Component {
  render() {
    if (this.props.ciBadge)
      return (
        <li>
          <img src={this.props.ciBadge} alt="CI Status" />
        </li>
      );

    if (!this.props.link || !this.props.text) return null;

    return (
      <li>
        <a href={this.props.link} className="box-link">
          {this.props.text}
        </a>
      </li>
    );
  }
}

export default BoxLink;
