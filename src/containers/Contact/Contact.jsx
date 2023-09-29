import React from 'react';
import {HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker} from 'react-icons/hi';
import {FaInstagram} from 'react-icons/fa';
import {BsFacebook, BsGithub , BsLinkedin} from 'react-icons/bs';

import './Contact.css'

const Contact = () => {
  return (
    <div className='app__contact section__padding' id='contact'>
      <div className="app__contact_details">
        <h1 className='app__contact-head'>Contact Me</h1>
        <div className='flex__center'>
          <HiOutlineMail fontSize={30}  color='#ff004f'/> 
        <p className='app__contact-text'>rajinsakha07@gmail.com</p> 
        </div>

        <div className='flex__center'>
          <HiOutlinePhone fontSize={30}  color='#ff004f'/> 
        <p className='app__contact-text'>+977-9761626067</p> 
        </div>

        <div className='flex__center'>
          <HiOutlineLocationMarker fontSize={30}  color='#ff004f'/> 
        <p className='app__contact-text'>Duwakot, Bhaktapur, Nepal</p> 
        </div>

        <div className="flex__center app__contact-social_icons">
          <a href="https://www.facebook.com/Rajinsakha" target='_blank'><BsFacebook className='social_icon' fontSize={30} color='#ababab'/></a>
          <a href="https://www.instagram.com/rajinsakha07/" target='_blank'><FaInstagram className='social_icon' fontSize={30} color='#ababab'/></a>
          <a href="https://www.linkedin.com/in/rajin-sakha-22003b229" target='_blank'><BsLinkedin className='social_icon' fontSize={30} color='#ababab'/></a>
          <a href="https://www.github.com/rajinsakha" target='_blank'><BsGithub className='social_icon' fontSize={30} color='#ababab'/></a>
          
        </div>

      </div>

      <div className="app__contact_form">
        <form action="" id='app__contact-form'>
          <input type="text" name="" id=""  placeholder='Your Full Name'/>
          <input type="email" name='' id='' placeholder='Your Email' />
          <textarea name="" id="" cols="30" rows="10" placeholder='Your Message'></textarea>
          <button className='custom__button send-msg' style={{marginTop:'0.7rem'}}>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
