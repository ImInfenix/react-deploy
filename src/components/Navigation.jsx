import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Trans } from "react-i18next";

var currentSection = window.location.href
  .substring(window.location.href.lastIndexOf("/") + 1)
  .toLowerCase();

if (currentSection === "") currentSection = "home";

class Navigation extends React.Component {
  setCurrentSection(value) {
    currentSection = value;
  }

  render() {
    return (
      <nav>
        <ul>
          <li className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logos/Infenix.png"}
                alt="Infenix Logo"
              />
            </Link>
          </li>
          <NavigationItem
            to="/"
            displayText="Home"
            onClick={this.setCurrentSection}
          />
          <NavigationItem
            to="/games"
            displayText="Games"
            onClick={this.setCurrentSection}
          />
          <NavigationItem
            to="/projects"
            displayText="Projects"
            onClick={this.setCurrentSection}
          />
          <NavigationItem
            to="/about"
            displayText="About"
            onClick={this.setCurrentSection}
          />
        </ul>
      </nav>
    );
  }
}
class NavigationItem extends React.Component {
  render() {
    var textLow = this.props.displayText.toLowerCase();
    return (
      <li className={currentSection === textLow ? "current" : "underline"}>
        <Link
          to={this.props.to}
          onClick={this.props.onClick.bind(this, textLow)}
        >
          <Trans i18nKey={this.props.displayText} />
        </Link>
      </li>
    );
  }
}

export default withRouter(Navigation, NavigationItem);
