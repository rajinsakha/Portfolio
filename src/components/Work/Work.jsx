import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Work.css";
import Reveal from "../Animations/Reveal";
import Modal from "../Common/Modal";

const Work = ({ imgs, title, description, link, index, techStack }) => {
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
              <div className="flex items-center gap-4 mb-4">
                {techStack.map(({ Icon, name, color }) => (
                  <motion.div
                    key={name}
                    className="flex items-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      className={`h-8 w-8 text-${color}`}
                      style={{ color: color }}
                    />
                  </motion.div>
                ))}
              </div>
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
          <div className="app__work_image " onClick={handleImageClick}>
            <Reveal>
              <img src={imgs[0]} alt={`${imgs[0]} thumbnail`} />
            </Reveal>
          </div>
        </>
      ) : (
        <>
          <div className="app__work_image" onClick={handleImageClick}>
            <Reveal>
              <img src={imgs[0]} alt={`${imgs[0]} thumbnail`} />
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
              <div className="flex items-center gap-4 mb-4">
                {techStack.map(({ Icon, name, color }) => (
                  <motion.div
                    key={name}
                    className="flexitems-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon
                      className={`h-8 w-8 text-${color}`}
                      style={{ color: color }}
                    />
                  </motion.div>
                ))}
              </div>
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
      {isModalOpen && (
        <Modal
          imgs={imgs}
          initialIndex={0}
          isOpen={isModalOpen}
          setIsOpen={setIsModalOpen}
        />
      )}
    </div>
  );
};

export default Work;
