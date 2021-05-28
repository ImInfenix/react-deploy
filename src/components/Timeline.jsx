import React from "react";
import "./styles/timeline.css";

class Timeline extends React.Component {
  render() {
    const { category, elements } = this.props;

    return (
      <div className="brick">
        <h1>{category}</h1>
        <div className="timeline"></div>
        <p>{JSON.stringify(elements)}</p>

        {/* {elements} */}

        {/* {elements.map((data) => {
          return <p>{data.date}</p>;
        })} */}

        {/* {element.map((data, key) => {
          return (
            <div class="container left">
              <div class="content">
                <h2>{data.date}</h2>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })} */}
      </div>
    );
  }
}

export default Timeline;
