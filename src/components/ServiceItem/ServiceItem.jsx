import React from 'react';



import './ServiceItem.css'

const ServiceItem = ({Icon, title, description}) => {
  return (
    <div className='app__serviceItem'>
        <Icon className='app__serviceItem_icon' />
        <h2 className='app__serviceItem_headtext'>{title}</h2>
        <p className='p__description'>{description}</p>
    </div>
  )
}

export default ServiceItem
