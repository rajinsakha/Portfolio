import React, { useEffect, useState } from "react";

import "./Work.css";
import Reveal from "../Animations/Reveal";
import Modal from "../Common/Modal";

const Work = ({ imgUrl, title, description, link, index }) => {
  const isEvenIndex = index % 2 === 0;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleImageClick = () => {
    setIsModalOpen(true);
  };
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);


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
          <div className="app__work_image" onClick={handleImageClick} >
            <Reveal>
              <img src={imgUrl} alt={`${imgUrl} thumbnail`} />
            </Reveal>
          </div>
        </>
      ) : (
        <>
          <div className="app__work_image" onClick={handleImageClick}>
            <Reveal>
              <img src={imgUrl} alt={`${imgUrl} thumbnail`}  />
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
      {isModalOpen && <Modal imgURL={imgUrl} isOpen={isModalOpen} setIsOpen={setIsModalOpen} />}
    </div>
  );
};

export default Work;
