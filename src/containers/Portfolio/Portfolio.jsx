import React from 'react';

import images from '../../constants/images';
import Work from '../../components/Work/Work';
import './Portfolio.css';

const Portfolio = () => {
  const projects = [
    {
      img: images.groceryStore, 
      title: 'Grocery Store',
      description: 'Impex Grocery Store is a captivating digital marketplace developed as a collegiate endeavor. With a rich interface designed using HTML, CSS, and JavaScript, it ensures an engaging user experience while reflecting a modern aesthetic. The backend functionality, powered by PHP and MySQL, facilitates a seamless, reliable management of product listings, user data, and transaction processing. ',
      link: "http://impexgrocerystore.000webhostapp.com/"
    },
    {
      img: images.textUtils,
      title: 'TextUtils',
      description:"TextUtils is an intuitive text-processing utility engineered to aid users in streamlining their textual content. Whether it's removing extra spaces, counting words, or tallying characters, TextUtils is adept in delivering precise and instant results. Built using the powerful and dynamic React JS framework, TextUtils not only boasts a responsive and user-friendly interface, but also exemplifies modern web application efficiency.",
      link:"https://rajinsakha.github.io/React-TextUtils/"
    },
    {
      img: images.calculator,
      title: 'Calculator',
      description:"This Calculator, crafted using the robust and dynamic React JS framework, exemplifies a seamless melding of simplicity, functionality, and elegance. With a user-friendly interface that facilitates easy input and clear display, alongside precise computational abilities, it effortlessly handles a variety of calculations, be it basic arithmetic or complex computations. The React JS backbone ensures a responsive and intuitive user experience, making this Calculator not just a tool, but a reliable companion for solving mathematical queries swiftly and accurately.",
      link:"https://rajinsakha.github.io/Calculator/"
    },
  ]


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
