import React, { useState } from "react";

import { images, data } from "../../constants";

import "./About.css";
import AboutItem from "../../components/AboutItem/AboutItem";
import Reveal from "../../components/Animations/Reveal";
import Title from "../../components/Common/Title";

const About = () => {
  const [activeList, setActiveList] = useState(0);

  return (
    <section className="app__about section__padding" id="about">
      <Reveal width="100%">
        <Title title={"About"} />
      </Reveal>
      <div className="app__about_main">
        <div className="app__about_img">
          <img src={images.aboutImg} alt="Rajin Sakha" />
        </div>

        <div className="app__wrapper_info">
          <Reveal>
            <p className="p__description">
              Hi, I'm <span className="about_highlighted">Rajin Sakha</span> , a{" "}
              <span className="about_highlighted">
                Junior Front-end Developer
              </span>{" "}
              specializing in{" "}
              <span className="about_highlighted">React.js.</span>{" "}and{" "}
              <span className="about_highlighted">Next.js.</span>{" "} Passionate
              about crafting captivating web experiences, I merge creativity
              with technical proficiency. Detail-oriented and committed to
              quality, I thrive in collaborative environments that value
              teamwork and clear communication. Eager to learn and evolve, I'm
              focused on making impactful contributions to each project. My goal
              is to continuously refine my skills, push boundaries, and build
              remarkable digital solutions. Let's connect and create something
              amazing together!
            </p>
          </Reveal>

          <Reveal>
            <div className="app__about-content">
              <p
                className={`tab-links ${activeList === 0 ? "active" : ""}`}
                onClick={() => setActiveList(0)}
              >
                Skills
              </p>
              <p
                className={`tab-links ${activeList === 1 ? "active" : ""}`}
                onClick={() => setActiveList(1)}
              >
                Experience
              </p>
              <p
                className={`tab-links ${activeList === 2 ? "active" : ""}`}
                onClick={() => setActiveList(2)}
              >
                Education
              </p>
            </div>
          </Reveal>

          <div className="fixed-list">
            {activeList === 0 &&
              data.skills.map((skill, index) => (
                <AboutItem
                  key={skill.title + index}
                  title={skill.title}
                  subtitle={skill.subtitle}
                />
              ))}

            {activeList === 1 &&
              data.experiences.map((experience, index) => (
                <AboutItem
                  key={experience.title + index}
                  title={experience.title}
                  subtitle={experience.subtitle}
                />
              ))}

            {activeList === 2 &&
              data.qualifications.map((qualification, index) => (
                <AboutItem
                  key={qualification.title + index}
                  title={qualification.title}
                  subtitle={qualification.subtitle}
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
