import React from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Footer from "./components/Footer";
import {Helmet} from "react-helmet";

const App = () => {
  return <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Květinový ateliér Poupě</title>
      <link rel="canonical" href="http://mysite.com/example" />
      <meta name="description" content="Květinový ateliér Poupě v Dobřichovicích nabízí širokou nabídku květin. V nabídce máme kromě sezónních květin i stálou nabídku trvalek. Rádi Vám pomůžeme." />
    </Helmet>
    <Navbar />
    <Hero />
    <About />
    <Footer />
  </div>
}

export default App
