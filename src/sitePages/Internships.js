import React from "react";
import JobsInfo from "../components/jobListingsComponents/JobsInfo";
import data from "../components/jobListingsComponents/data";
const Internships = () => {
  const { internships } = data;
  return <JobsInfo {...internships} />;
};

export default Internships;
