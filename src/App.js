import React from "react";
import { About, Contact,  Hero, Portfolio } from './containers';
import { Navbar, Footer } from './components';
import './App.css';
import TopButton from "./components/BackToTopButton/TopButton";

const App = () => (
  <div>
    <Navbar />
    <TopButton />
    <Hero />
    <About />
    {/* <Services /> */}
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
