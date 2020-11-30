import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Team from "./components/Team";
import ScrollUpButton from "./components/ScrollUpButton";
import Contact from "./components/Contact";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
    ReactGA.pageview(window.location.pathname);
  }, []);

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
