import React from "react";
import "./Hero.css";
import Reveal from "../../components/Animations/Reveal";

import { CodeBlock } from "../../components/CodeBlock/CodeBlock";

const Hero = () => {
  return (
    <div className="app__header section__padding" id="home">
      <div className="app__wrapper_info">
        <Reveal>
          <h1 className="app__header-h1">
            Hi, I'm Rajin<span className="custom-red">.</span>
          </h1>
        </Reveal>
        <Reveal>
          {" "}
          <h2 className="app__header-h2">
            I'm a{" "}
            <span className="app__header_highlighted">Front End Developer</span>
          </h2>
        </Reveal>

        <Reveal>
          <p className="app__header-p">
            I create user-friendly web applications with a focus on modern
            technologies like React.js and Next.js. Let&apos;s turn your ideas
            into reality!
          </p>
        </Reveal>
        <Reveal>
          <a
            href="/RajinSakha_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="custom__button"
            style={{ marginTop: "2rem" }}
          >
            View Resume
          </a>
        </Reveal>
      </div>


<div className="app__wrapper_img max-lg:!hidden">
<CodeBlock />
</div>
      {/* <div className="flex-1 w-full   flex items-center justify-end ml-8">
        <div className="w-80 h-80 bg-[#ff004f] rounded-full flex items-center justify-center">
          <img src={images.heroImg} alt="Rajin Sakha" className="w-40 h-40" />
        </div>
      </div> */}
  
    </div>
  );
};

export default Hero;
