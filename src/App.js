import React from "react";

import "./App.css";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./sitePages/Home";
import About from "./sitePages/About";
import Careers from "./sitePages/Careers";
import Skills from "./sitePages/Skills";
import BackDrops from "./components/BackDrops";
import SignUp from "./sitePages/SignUp";
import Login from "./sitePages/Login";
import PostJobs from "./sitePages/PostJobs";
import Internships from "./sitePages/Internships";
import EntryLevel from "./sitePages/EntryLevel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BackDrops />

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
        <Route path="/register">
          <SignUp />
        </Route>

        <Route path="/login">
          <Login />
        </Route>

        <Route path="/post-job-free">
          <PostJobs />
        </Route>
        <Route path="/internships-in-nigeria">
          <Internships />
        </Route>

        <Route path="/entry-level-jobs">
          <EntryLevel />
        </Route>

        <Redirect from="/blog" to="/" />
        <Redirect from="/career-path-test" to="/" />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
