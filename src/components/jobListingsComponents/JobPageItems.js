import React from "react";
import JobsInfo from "./JobsInfo";

const JobPageItems = ({ pages, pageNo, pageData }) => {
  return (
    <>
      {pageNo === 0 && <JobsInfo {...pageData} page={pages[0].page} />}
      {pageNo === 1 && <JobsInfo {...pageData} page={pages[1].page} />}
      {pageNo === 2 && <JobsInfo {...pageData} page={pages[2].page} />}
      {pageNo === 3 && <JobsInfo {...pageData} page={pages[3].page} />}
      {pageNo === 4 && <JobsInfo {...pageData} page={pages[4].page} />}
    </>
  );
};

export default JobPageItems;
