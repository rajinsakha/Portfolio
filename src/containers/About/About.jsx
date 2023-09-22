import React, { useState } from "react";

import { images, data } from "../../constants";

import "./About.css";
import AboutItem from "../../components/AboutItem/AboutItem";

const About = () => {
  const [activeList, setActiveList] = useState(0); 

  return (
    <div className="app__about app__wrapper section__padding" id="about">
      <div className="app__about_img">
        <img src={images.aboutImg} alt="about-img" />
      </div>

      <div className="app__wrapper_info">
        <h1 className="headtext__title">About Me</h1>
        <p className="p__description" style={{color:'var(--color-grey'}}>
          Hello Everyone! My name is Rajin Sakha. I am from Bhaktapur, Nepal.
          Currently, I am pursuing my Bachelor's degree in Information
          Technology. I am a beginner in programming with the basic knowledge of
          HTML, CSS , JS, C and Java.
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
