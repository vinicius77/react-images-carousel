import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Team from './components/Team';
import ScrollUpButton from './components/ScrollUpButton';
import Contact from './components/Contact';
import { useGoogleAnalytics } from './googleAnalytics/useGoogleAnalytics';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function Routes() {
  useGoogleAnalytics();
  return (
    <Switch>
      <Route exact path="/">
        <ScrollUpButton />
        <Navbar />
        <Home />
        <About />
        <Services />
        <Skills />
        <Team />
        <Contact />
        <Footer />
      </Route>
    </Switch>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;
