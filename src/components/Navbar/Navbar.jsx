import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

import images from "../../constants/images";

import "./Navbar.css";
import { data } from "../../constants";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          {" "}
          <img src={images.logo} alt="logo" />
        </a>
      </div>

      <ul className="app__navbar-links">
        {data.navList.map((nav) => (
          <li className="app__navbar-link" key={nav.id}>
            <a href={nav.link}>{nav.title}</a>
          </li>
        ))}
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
              {data.navList.map((nav) => (
                <li className="app__navbar-link" key={nav.id}>
                  <a href={nav.link}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
