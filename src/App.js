import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { Switch, Route } from "react-router-dom";
import Home from "./sitePages/Home";
import About from "./sitePages/About";
import Careers from "./sitePages/Careers";
import Skills from "./sitePages/Skills";
import ModalSocialDropDown from "./components/skillsPageComponent/SkillsDefinition/ModalSocialDropDown";
import { useGlobalContext } from "./components/context";
function App() {
  const { showModal } = useGlobalContext();
  return (
    <div className="App">
      <Navbar />
      {showModal && <ModalSocialDropDown />}
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/careers">
          <Careers />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
