import React from "react";
import { About, Contact, Header, Portfolio } from './containers';
import { Navbar, Footer } from './components';
import './App.css';
import TopButton from "./components/BackToTopButton/TopButton";

const App = () => (
  <div>
    <Navbar />
    <TopButton />
    <Header />
    <About />
    {/* <Services /> */}
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
