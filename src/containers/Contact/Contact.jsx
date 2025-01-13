import React, { useState } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";
import { BsFacebook, BsGithub, BsLinkedin } from "react-icons/bs";

import "./Contact.css";
import Reveal from "../../components/Animations/Reveal";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [msg, setMsg] = useState("");
  const [showMsg, setShowMsg] = useState(false);

  const { name, email, message } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value }); //Object Literal
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/rajinsakha07/google_sheets/uRbDDglvCtqbkVTx",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            [name, email, message, new Date().toLocaleString()],
          ]),
        }
      );
      await response.json();
      setShowMsg(true);
      setMsg("Form Submitted!");
      setData({ ...data, name: "", email: "", message: "" });
      setTimeout(() => {
        setShowMsg(false);
      }, 3000);
    } catch (err) {
      console.log(err);
      setShowMsg(true);
      setMsg("Form Submission Failed!");
      setTimeout(() => {
        setShowMsg(false);
      }, 3000);
    }
  };

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
          <a href="https://www.facebook.com/Rajinsakha" target="_blank" rel="noreferrer">
            <BsFacebook className="social_icon" fontSize={30} color="#ababab" />
          </a>
          </Reveal>
    
    <Reveal>
    <a href="https://www.instagram.com/rajinsakha07/" target="_blank" rel="noreferrer">
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
            target="_blank" rel="noreferrer"
          >
            <BsLinkedin className="social_icon" fontSize={30} color="#ababab" />
          </a>
    </Reveal>
         
     <Reveal>
     <a href="https://www.github.com/rajinsakha" target="_blank" rel="noreferrer">
            <BsGithub className="social_icon" fontSize={30} color="#ababab" />
          </a>
     </Reveal>
        
        </div>
      </div>

      <div className="app__contact_form">
        <Reveal width="100%">
        <form id="app__contact-form" method="POST" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="contact-btn" style={{ marginTop: "0.7rem" }}>
            Send Message
          </button>
        </form>
        </Reveal>
        
        {showMsg && <div className="sent-message">{msg}</div>}
      </div>
    </div>
  );
};

export default Contact;
