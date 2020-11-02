import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
import ScrollUpButton from "./components/ScrollUpButton";
import Contact from "./components/Contact";

function App() {
  return (
    <React.Fragment>
      <ScrollUpButton />
      <Navbar />
      <Home />
      <About />
      <Services />
      <Skills />
      <Team />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;
