import React from "react";

import "./Work.css";
import Reveal from "../Animations/Reveal";

const Work = ({ imgUrl, title, description, link, index }) => {
  const isEvenIndex = index % 2 === 0;

  return (
    <div className={`app__work ${isEvenIndex ? "even" : "odd"}`}>
      {isEvenIndex ? (
        <>
          <div className="app__work_details">
            <Reveal>
              <h3 className="app__work_details-title">{title}</h3>
            </Reveal>

            <Reveal>
              <p className="app__work_details-description">{description}</p>
            </Reveal>

            <Reveal>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="custom__button"
              >
                View Project
              </a>
            </Reveal>
          </div>
          <div className="app__work_image">
            <Reveal>
              <img src={imgUrl} alt={`${imgUrl} thumbnail`} />
            </Reveal>
          </div>
        </>
      ) : (
        <>
          <div className="app__work_image">
            <Reveal>
              <img src={imgUrl} alt={`${imgUrl} thumbnail`} />
            </Reveal>
          </div>
          <div className="app__work_details">
            <Reveal>
              <h3 className="app__work_details-title">{title}</h3>
            </Reveal>

            <Reveal>
              <p className="app__work_details-description">{description}</p>
            </Reveal>

            <Reveal>
              <a
                href={link}
                target="_blank"
                rel="noreferrer"
                className="custom__button"
              >
                View Project
              </a>
            </Reveal>
          </div>
        </>
      )}
    </div>
  );
};

export default Work;
