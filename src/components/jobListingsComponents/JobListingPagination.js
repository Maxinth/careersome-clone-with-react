import React from "react";
import "./listingPagination.css";
const JobListingPagination = ({makeCurrentPage}) => {
  const pageNo = [1, 2, 3, 4, 5];
  return (
    <section className="jobPagination">
      {pageNo.map((item, index) => (
        <div className="jobPagination__page" key={item} onClick={() => makeCurrentPage(index)}>{item}</div>
      ))}
    </section>
  );
};

export default JobListingPagination;
