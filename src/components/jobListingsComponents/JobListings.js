import React from "react";
import JobItem from "./JobItem";

const JobListings = ({ jobs, handleRevert }) => {
  return (
    <section className="jobsInfo__listingsContainer">
      <h5 className="jobsInfo__title">
        Below are the latest internship jobs in Nigeria
      </h5>
      <div className="jobsInfo__listings">
        {jobs.length !== 0 ? (
          jobs.map((item, index) => <JobItem key={index} {...item} />)
        ) : (
          <div className="jobsInfo__notFound">
            <h3 className="jobsInfo__noItem">
              No jobs match those parameters!
            </h3>
            <button
              type="button"
              className="jobsInfo__btn"
              onClick={handleRevert}
            >
              Back
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobListings;
