import React from 'react';
import './Header.css'
import Reveal from '../../components/Animations/Reveal';

const Header = () => {
  
  return (
    <div className='app__header section__padding' id='home'>
      <div className="app__wrapper_info">
        <Reveal>
        <p className='app__header-p'>Front End Developer</p>
        </Reveal>

        <Reveal>  <h1 className='app__header-h1'>Hi, I'm <span className='app__header_highlighted'>Rajin</span></h1></Reveal>
     
      <Reveal>
      <h1 className='app__header-h1'>Sakha From Nepal</h1>
      </Reveal>
      <Reveal>
      <a href='/RajinSakha_Resume.pdf' target='_blank' rel='noreferrer' className='custom__button' style={{marginTop:"2rem"}}>View Resume</a>
      </Reveal>
      
      </div>

      <div className="app__wrapper_img" id='img-div'>
        {/* <img src={images.headerImg} alt="Rajin Sakha" /> */}
      </div>
    
    </div>
  )
}

export default Header
