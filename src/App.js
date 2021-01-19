import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./sitePages/Home";
import About from "./sitePages/About";
import Careers from "./sitePages/Careers";

function App() {
  return (
    <div className="App">
      <Navbar />
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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
