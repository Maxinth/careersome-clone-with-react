import React from "react";
import PageForm from "../components/pageFormComponents/PageForm";
import data from "../components/pageFormComponents/data";
import { motion } from "framer-motion";
import { useVariants } from "../components/useVariants";
import useDocumentTitle from "../components/UseTitle";
const Login = () => {
  const { pageVariant, variantProps } = useVariants();
  const { signIn } = data;
  useDocumentTitle("Sign in");
  return (
    <motion.section
      className="login"
      variants={pageVariant(2)}
      {...variantProps}
    >
      <PageForm {...signIn} />;
    </motion.section>
  );
};

export default Login;
