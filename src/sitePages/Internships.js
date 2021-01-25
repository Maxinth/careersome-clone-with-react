import React, { useState } from "react";
import JobsInfo from "../components/jobListingsComponents/JobsInfo";
import data from "../components/jobListingsComponents/internShipData";
import JobsInfoMain from "../components/jobListingsComponents/JobsInfoMain";
import JobListingPagination from "../components/jobListingsComponents/JobListingPagination";
import usePagination from "../components/usePagination";

const Internships = () => {
  const { internships } = data;
  const { pages, mainText, extract, title } = internships;
  const { pageNo, makeCurrentPage } = usePagination();
  // state to track page
  // const [pageNo, setPageNo] = useState(0);

  // custom function to simulate page transition on click on custom-made pagination.
  // const makeCurrentPage = (index) => {
  //   setPageNo(index);
  // };

  return (
    <section className="internships">
      <JobsInfoMain extract={extract} mainText={mainText} title={title} />
      <>
        {pageNo === 0 && <JobsInfo {...internships} page={pages[0].page} />}
        {pageNo === 1 && <JobsInfo {...internships} page={pages[1].page} />}
        {pageNo === 2 && <JobsInfo {...internships} page={pages[2].page} />}
        {pageNo === 3 && <JobsInfo {...internships} page={pages[3].page} />}
        {pageNo === 4 && <JobsInfo {...internships} page={pages[4].page} />}
      </>
      <JobListingPagination makeCurrentPage={makeCurrentPage} pageNo={pageNo} />
    </section>
  );
};

export default Internships;
