import React from "react";
import "./postJobs.css";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
const PostJobsFree = () => {
  const { pageVariant, variantProps } = useVariants();
  return (
    <motion.section
      className="postJobs"
      variants={pageVariant(1)}
      {...variantProps}
    >
      <div className="postJobs__container">
        <h2 className="postJobs__title">
          Post Nigerian Internship and Entry-level Job Ads Online for Free
        </h2>
        <p className="postJobs__text">
          Posting ads directly on Careersome can help you meet more relevant
          candidates than any other platform. Best of all, it is free.
        </p>
        <p className="postJobs__text">
          Simply download <span className="postJobs__doc">this</span> attached
          file, complete it, and email it to us at
          <a href="mailto:mail@careersome.com" className="postJobs__mail">
            mail@careersome.com
          </a>
        </p>
        <p className="postJobs__text">
          If the above is done, your vacancy will appear on our jobboard in
          24hrs.{" "}
        </p>
        <p className="postJobs__text">
          For more information or assistance, please call 08156610093.
        </p>
      </div>
    </motion.section>
  );
};

export default PostJobsFree;
