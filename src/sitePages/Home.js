import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import OptionsCards from "../components/OptionsCard/OptionsCards";
import Testimonials from "../components/Testimonials/Testimonials";
import { motion } from "framer-motion";
import { useVariants } from "../components/useVariants";

const Home = () => {
  const { variantProps, pageVariant } = useVariants();
  return (
    <motion.section className="home" variants={pageVariant(2)} {...variantProps}>
      <HeroSection />
      <OptionsCards />
      <Testimonials />
    </motion.section>
  );
};

export default Home;
