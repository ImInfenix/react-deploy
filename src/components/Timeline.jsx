import React from "react";
import Image from "./Image";
import "./styles/timeline.css";

class Timeline extends React.Component {
  render() {
    const { category, elements } = this.props;

    var content = null;

    var alignLeft = false;

    if (elements) {
      content = elements.map((data, key) => {
        alignLeft = !alignLeft;
        return (
          <div
            key={key}
            className={alignLeft ? "container left" : "container right"}
          >
            <div className="content">
              <h2>{data.date}</h2>
              <h3 className="duration">
                {data.duration ? "(" : null}
                {data.duration}
                {data.duration ? ")" : null}
              </h3>
              <Image src={data.imageLink} alt="Content illustration" />
              <p>
                {data.name}
                {data.description ? <br /> : null}
                {data.description}
              </p>
              <h3>{data.additionalInformationTitle}</h3>
              <p>{data.additionalInformationContent}</p>
            </div>
          </div>
        );
      });
    }

    return (
      <div className="brick">
        <h1>{category}</h1>
        <div className="timeline">{content}</div>
      </div>
    );
  }
}

export default Timeline;
