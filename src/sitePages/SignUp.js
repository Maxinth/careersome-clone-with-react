import React from "react";
import PageForm from "../components/pageFormComponents/PageForm";
import data from "../components/pageFormComponents/data";
import { motion } from "framer-motion";
import { useVariants } from "../components/useVariants";
import useDocumentTitle from "../components/UseTitle";
const SignUp = () => {
  const { signUp } = data;
  const { pageVariant, variantProps } = useVariants();
  useDocumentTitle("Sign up");
  return (
    <motion.section
      className="signUp"
      variants={pageVariant(2)}
      {...variantProps}
    >
      <PageForm {...signUp} />
    </motion.section>
  );
};

export default SignUp;
