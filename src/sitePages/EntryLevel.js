import React from "react";
import JobsInfo from "../components/jobListingsComponents/JobsInfo";
import data from "../components/jobListingsComponents/entryLevelData";
import JobsInfoMain from "../components/jobListingsComponents/JobsInfoMain";
import JobListingPagination from "../components/jobListingsComponents/JobListingPagination";
import usePagination from "../components/usePagination";

const EntryLevel = () => {
  const { entryLevel } = data;
  const { pages, mainText, extract, title } = entryLevel;
  const { pageNo, makeCurrentPage } = usePagination();
  return (
    <section className="entryLevel">
      <JobsInfoMain extract={extract} mainText={mainText} title={title} />
      <>
        {pageNo === 0 && <JobsInfo {...entryLevel} page={pages[0].page} />}
        {pageNo === 1 && <JobsInfo {...entryLevel} page={pages[1].page} />}
        {pageNo === 2 && <JobsInfo {...entryLevel} page={pages[2].page} />}
        {pageNo === 3 && <JobsInfo {...entryLevel} page={pages[3].page} />}
        {pageNo === 4 && <JobsInfo {...entryLevel} page={pages[4].page} />}
      </>
      <JobListingPagination makeCurrentPage={makeCurrentPage} pageNo={pageNo} />
    </section>
  );
};

export default EntryLevel;
