import React from 'react'
import {FaCode, FaCropAlt, FaAppStore } from 'react-icons/fa'

import './Services.css';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

const services = [
  {
    icon: FaCropAlt,
    title: 'UI/UX Design',
    description: 'Designing Web/Mobile App Interfaces.',
  },
  {
    icon: FaCode,
    title: 'Web App Development',
    description: 'Developing Web Application',
  },
  {
   icon: FaAppStore,
    title: 'Mobile App Development',
    description: 'Developing Mobile Application',
  },
 
];


const Services = () => {
 

  return (
    <div className='app__services section__padding'>
        <h1 className="headtext__title" style={{textAlign:'center'}}>My Services</h1>

        <div className="app__grid_content">
          {services.map((service,index)=>(
            <ServiceItem Icon={service.icon} title={service.title} description={service.description} key={service.title + index}   />
          ))}
        </div>
      
    </div>
  )
}

export default Services
