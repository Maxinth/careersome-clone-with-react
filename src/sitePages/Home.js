import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import OptionsCards from "../components/OptionsCard/OptionsCards";
import Testimonials from "../components/Testimonials/Testimonials";
import { motion } from "framer-motion";
import { useVariants } from "../components/useVariants";
import useDocumentTitle from "../components/UseTitle";



const Home = () => {
  const { variantProps, pageVariant } = useVariants();
  useDocumentTitle('Latest Fresh Graudate, Entry Level Jobs & Internships in Nigeria')
  return (
    <motion.section
      className="home"
      variants={pageVariant(1)}
      {...variantProps}
    >
      <HeroSection />
      <OptionsCards />
      <Testimonials />
    </motion.section>
  );
};

export default Home;
