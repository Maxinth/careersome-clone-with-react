import React from "react";
import AboutContainer from "../components/aboutPageComponents/AboutContainer";
import useDocumentTitle from "../components/UseTitle";
const About = () => {
  useDocumentTitle("About Careersome");
  return <AboutContainer />;
};

export default About;
