import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        <li className="p__poppins">
          <a href="#home">Home</a>
        </li>
        <li className="p__poppins">
          <a href="#about">About</a>
        </li>
        <li className="p__poppins">
          <a href="#services">Services</a>
        </li>
        <li className="p__poppins">
          <a href="#portfolio">Portfolio</a>
        </li>
        <li className="p__poppins">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          className="app__navbar-smallscreen_hamburger"
          color="#fff"
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <IoClose
              className="overlay__close"
              onClick={() => {
                setToggleMenu(false);
              }}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__poppins">
                <a href="#home">Home</a>
              </li>
              <li className="p__poppins">
                <a href="#about">About</a>
              </li>
              <li className="p__poppins">
                <a href="#services">Services</a>
              </li>
              <li className="p__poppins">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li className="p__poppins">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
