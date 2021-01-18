import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Navbar";
import OptionsCards from "./components/OptionsCard/OptionsCards";
import Testimonials from "./components/Testimonials/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OptionsCards />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
