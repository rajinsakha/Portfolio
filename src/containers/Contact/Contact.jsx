
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

import "./Contact.css";
import Reveal from "../../components/Animations/Reveal";
import ContactForm from "../../components/ContactForm/ContactForm";


const Contact = () => {
  


  return (
    <div className="app__contact section__padding" id="contact">
      <div className="app__contact_details">
        <Reveal>
          <h1 className="app__contact-head">Contact Me</h1>
        </Reveal>

        <Reveal>
          <div className="flex__center">
            <HiOutlineMail fontSize={30} color="#ff004f" />
            <p className="app__contact-text">rajinsakha07@gmail.com</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex__center">
            <HiOutlinePhone fontSize={30} color="#ff004f" />
            <p className="app__contact-text">+977-9761626067</p>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex__center">
            <HiOutlineLocationMarker fontSize={30} color="#ff004f" />
            <p className="app__contact-text">Bhaktapur, Nepal</p>
          </div>
        </Reveal>

        <div className="flex__center app__contact-social_icons gap-4">
          <Reveal>
            <a
              href="https://www.facebook.com/Rajinsakha"
              target="_blank"
              rel="noreferrer"
            >
              <BsFacebook
                className="social_icon"
                fontSize={30}
                color="#ababab"
              />
            </a>
          </Reveal>

          <Reveal>
            <a
              href="https://www.instagram.com/rajinsakha07/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram
                className="social_icon"
                fontSize={30}
                color="#ababab"
              />
            </a>
          </Reveal>

          <Reveal>
            <a
              href="https://www.linkedin.com/in/rajin-sakha-22003b229"
              target="_blank"
              rel="noreferrer"
            >
              <BsLinkedin
                className="social_icon"
                fontSize={30}
                color="#ababab"
              />
            </a>
          </Reveal>

          <Reveal>
            <a
              href="https://www.github.com/rajinsakha"
              target="_blank"
              rel="noreferrer"
            >
              <BsGithub className="social_icon" fontSize={30} color="#ababab" />
            </a>
          </Reveal>
        </div>
      </div>

      <div className="app__contact_form">
        <Reveal width="100%">
         <ContactForm />
         
        </Reveal>

     
      </div>
    </div>
  );
};

export default Contact;
