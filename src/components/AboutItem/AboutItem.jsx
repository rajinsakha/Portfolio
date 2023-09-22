import React from 'react';

import './AboutItem.css';

const AboutItem = ({title, subtitle}) => {
  return (
    <div className='app__aboutItem'>
      <p className='p__description' style={{color:'var(--color-red)'}}>{title}</p>
      <p className='p__description'>{subtitle}</p>
    </div>
  )
}

export default AboutItem
