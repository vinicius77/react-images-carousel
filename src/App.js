import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar />
        <Home />
        <About />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          accusantium dolores id pariatur totam. Beatae, nobis vero? Accusantium
          numquam asperiores beatae facilis ducimus praesentium totam doloremque
          voluptatibus sapiente dolores vero cumque, tempora unde sint autem,
          corporis minus recusandae! Quam odio quas nihil quidem? Iste ea
          accusamus, numquam necessitatibus magni quas.
        </p>

        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
