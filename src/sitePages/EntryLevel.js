import React from "react";
import data from "../components/jobListingsComponents/entryLevelData";
import JobsInfoMain from "../components/jobListingsComponents/JobsInfoMain";
import JobListingPagination from "../components/jobListingsComponents/JobListingPagination";
import usePagination from "../components/usePagination";
import JobPageItems from "../components/jobListingsComponents/JobPageItems";
import { useVariants } from "../components/useVariants";
import { motion } from "framer-motion";
import useDocumentTitle from "../components/UseTitle";
const EntryLevel = () => {
  const { entryLevel } = data;
  const { pages, mainText, extract, title } = entryLevel;
  const { pageNo, makeCurrentPage } = usePagination();
  const { pageVariant, variantProps } = useVariants();

  useDocumentTitle(
    "Find the latest entry level jobs and fresh graduate jobs in Nigeria"
  );
  return (
    <motion.section
      className="entryLevel"
      variants={pageVariant(1)}
      {...variantProps}
    >
      <JobsInfoMain extract={extract} mainText={mainText} title={title} />
      <JobPageItems pages={pages} pageNo={pageNo} pageData={entryLevel} />
      <JobListingPagination makeCurrentPage={makeCurrentPage} pageNo={pageNo} />
    </motion.section>
  );
};

export default EntryLevel;
