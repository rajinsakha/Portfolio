import React from "react";
import { About, Contact, Header, Services, Portfolio } from './containers';
import { Navbar, Footer } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
  </div>
);

export default App;
