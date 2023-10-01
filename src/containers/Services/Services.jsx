import React from 'react'
import {FaCode, FaCropAlt } from 'react-icons/fa';
import {BiSolidDevices} from 'react-icons/bi';

import './Services.css';
import ServiceItem from '../../components/ServiceItem/ServiceItem';

const services = [
  {
    icon: FaCropAlt,
    title: 'UI/UX Design Implementation' ,
    description: 'Converting UI/UX Design into Web Application that focuses on bringing visually appealing designs to life while ensuring a user-friendly experience',
  },
  {
    icon: BiSolidDevices,
    title: 'Resonsive Web Development',
    description: 'Designing Responsive Web Application that can be tailored for all devices.',
  },
  {
   icon: FaCode,
    title: 'Writing Clean Codes ',
    description: 'Writing Clean Codes for developing easily maintainable, scalable and bug-free web application ',
  },
 
];


const Services = () => {
 

  return (
    <div className='app__services section__padding' id='services'>
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
