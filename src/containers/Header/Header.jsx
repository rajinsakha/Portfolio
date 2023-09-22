import React from 'react';

import images from '../../constants/images'
import './Header.css'

const Header = () => {
  return (
    <div className='app__header section__padding' id='#home'>
      <div className="app__wrapper_info">
        <p className='app__header-p'>Front End Developer</p>
        <h1 className='app__header-h1'>Hi, I'm <span className='app__header_highlighted'>Rajin</span></h1>
        <h1 className='app__header-h1'>Sakha From Nepal</h1>
        <button type='button' className='custom__button' style={{marginTop:"2rem"}}>Download CV</button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.headerImg} alt="header image" />
      </div>
    
    </div>
  )
}

export default Header
