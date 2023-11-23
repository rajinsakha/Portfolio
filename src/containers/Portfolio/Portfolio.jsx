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
      img: images.logistics,
      title: 'Logistics',
      description:"The Logistics Web App is developed using React JS for its dynamic frontend and enhanced with Tailwind CSS for a sleek, and responsive design. This front-end solution is designed to enhance the logistics experience by providing a seamless and intuitive interface for users.",
      link:"https://rajinsakha.github.io/Logistics/"
    },
    {
      img: images.calculator,
      title: 'Calculator',
      description:"This Calculator, built using React JS, combines simplicity, functionality, and elegance. It's user-friendly, making input easy and results clear. It handles basic math and complex computations with precision. React JS ensures a smooth and intuitive experience, making this Calculator a reliable tool for solving math problems quickly and accurately.",
      link:"https://rajinsakha.github.io/Calculator/"
    },
    {
      img: images.travelAgency,
      title: 'Travel Agency',
      description:"This Travel Agency website is a design created with React JS. It looks like a real travel website where you can find places to visit, hotels, and flights, but it's just a sample to show what a travel website could look like. It has a simple, clean and responsive design that works well on all devices.",
      link:"https://rajinsakha.github.io/TravelAgency/"
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
