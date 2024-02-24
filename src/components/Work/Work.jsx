import React from "react";

import "./Work.css";

const Work = ({ imgUrl, title, description, link, index }) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div
      className={`app__work ${isEvenIndex ? "even" : "odd"}`}
    >
      {isEvenIndex ? (
        <>
          <div className="app__work_details">
            <h3 className="app__work_details-title">{title}</h3>
            <p className="app__work_details-description">{description}</p>
            <a href={link} target="_blank" rel="noreferrer"  className="custom__button">View Project</a>
          </div>
          <div className="app__work_image">
            <img src={imgUrl} alt={`${imgUrl} thumbnail`} />
          </div>
        </>
      ) : (
        <>
          <div className="app__work_image">
            <img src={imgUrl} alt={`${imgUrl} thumbnail`} />
          </div>
          <div className="app__work_details">
            <h3 className="app__work_details-title">{title}</h3>
            <p className="app__work_details-description">{description}</p>
            <a href={link} target="_blank" rel="noreferrer" className="custom__button">View Project</a>
          </div>
        </>
      )}
    </div>
  );
};

export default Work;
