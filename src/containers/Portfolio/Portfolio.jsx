import React from "react";
import Work from "../../components/Work/Work";
import "./Portfolio.css";
import { projects } from "../../constants/projects";
import Reveal from "../../components/Animations/Reveal";
import Title from "../../components/Common/Title";

const Portfolio = () => {
  return (
    <div className="app__portfolio section__padding" id="projects">
      <Reveal width="100%">
        <Title title={"Projects"} />
      </Reveal>

      <div className="app__portfolio-content">
        {projects.map((project, index) => (
          <Work
            imgs={project.imgs}
            title={project.title}
            index={index}
            description={project.description}
            link={project.link}
            techStack={project.techStack}
            key={project.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
