import React from 'react';

import './AboutItem.css';
import Reveal from '../Animations/Reveal';

const AboutItem = ({title, subtitle}) => {
  return (
    <div className='app__aboutItem'>
      <Reveal delay={0.1}>
      <p className='p__description' style={{color:'var(--color-red)'}}>{title}</p>
      </Reveal>
    
    <Reveal delay={0.1}>
    <p className='p__description'>{subtitle}</p>
    </Reveal>
  
    </div>
  )
}

export default AboutItem
