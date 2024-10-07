import React from 'react';
import Work from '../../components/Work/Work';
import './Portfolio.css';
import { projects } from '../../constants/projects';

const Portfolio = () => {
 

  return (
    <div className='app__portfolio section__padding' id='portfolio'>
       <h1 className="headtext__title" style={{textAlign:'center'}}>My Portfolio</h1>

       <div className="app__portfolio-content">
        {projects.map((project, index)=>(
          <Work imgUrl={project.img} title={project.title} index={index} description={project.description} link={project.link} key ={project.title + index} />
        ))}
        </div>
      
    </div>
  )
}

export default Portfolio
