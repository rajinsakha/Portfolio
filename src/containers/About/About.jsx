import React, { useState } from "react";

import { images, data } from "../../constants";

import "./About.css";
import AboutItem from "../../components/AboutItem/AboutItem";

const About = () => {
  const [activeList, setActiveList] = useState(0); 

  return (
    <div className="app__about section__padding" id="about">
      <div className="app__about_img">
        <img src={images.aboutImg} alt="Rajin Sakha" />
      </div>

      <div className="app__wrapper_info">
        <h1 className="headtext__title">About Me</h1>
        <p className="p__description">
          Hello Everyone! I'm Rajin Sakha, an aspiring front-end developer with a strong foundation in HTML, CSS, JavaScript, and a particular interest in React JS. Through academic projects and self-driven exploration, I've developed a knack for creating clean, user-friendly, and responsive web interfaces.  As I near the completion of my studies, I am excited to apply my skills in a practical setting and contribute to meaningful web projects. Let's create something awesome together!
        </p>
        <div className="app__about-content">
          <p className={`tab-links ${activeList === 0 ? 'active' : ''}`} onClick={() => setActiveList(0)}>
            Skills
          </p>
          <p className={`tab-links ${activeList === 1 ? 'active' : ''}`} onClick={() => setActiveList(1)}>
            Experience
          </p>
          <p className={`tab-links ${activeList === 2 ? 'active' : ''}`} onClick={() => setActiveList(2)}>
            Education
          </p>
        </div>

        {activeList === 0 && 
          data.skills.map((skill, index) => (
            <AboutItem
              key={skill.title + index}
              title={skill.title}
              subtitle={skill.subtitle}
            />
          ))
        }

        {activeList === 1 && 
          data.experiences.map((experience, index) => (
            <AboutItem
              key={experience.title + index}
              title={experience.title}
              subtitle={experience.subtitle}
            />
          ))
        }

        {activeList === 2 && 
          data.qualifications.map((qualification, index) => (
            <AboutItem
              key={qualification.title + index}
              title={qualification.title}
              subtitle={qualification.subtitle}
            />
          ))
        }

      </div>
    </div>
  );
};

export default About;
