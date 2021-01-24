import React from "react";
import "./listingPagination.css";
const JobListingPagination = ({ makeCurrentPage, pageNo }) => {
  const pageNoArray = [1, 2, 3, 4, 5];
  return (
    <section className="jobPagination">
      {pageNoArray.map((item, index) => {
        const activePage = pageNo === index ? "active" : "";
        return (
          <div
            className={`jobPagination__page ${activePage}`}
            key={item}
            onClick={() => makeCurrentPage(index)}
          >
            {item}
          </div>
        );
      })}
    </section>
  );
};

export default JobListingPagination;
