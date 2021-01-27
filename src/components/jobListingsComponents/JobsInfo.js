import React, { useState } from "react";
import "./jobsInfo.css";
import data from "./jobsSectorData";
import { motion } from "framer-motion";
import { useVariants } from "../useVariants";
import JobListings from "./JobListings";

const JobsInfo = ({ page, listHeaderTitle }) => {
  const { jobsList } = page;
  const { variantProps, pageVariant } = useVariants();

  // default array which is manipulated and mapped over
  const [jobs, setJobs] = useState(jobsList);

  // state to track inputs
  const [jobOption, setJobOption] = useState({
    jobSector: "",
    jobLocation: "",
  });

  const { jobSector, jobLocation } = jobOption;

  // btn click state
  const [searchInit, setSearchInit] = useState(false);
  const runSearch = () => setSearchInit(true);

  // function to handle search
  const handleSearch = (e) => {
    e.preventDefault();
    runSearch(); // so the target for this click event vanishes and  the button to revert changes manifests

    // spread out jobs into a new array - don't directly mutate jobs!
    const newJobs = [...jobs];
    const jobsBySectorOnly = newJobs.filter((job) => {
      // console.log("search by sector only");
      return jobSector === job.id;
    });

    const jobsByLocationOnly = newJobs.filter((job) => {
      // console.log("search by location only");
      return jobLocation === job.location;
    });

    const jobsBySectorAndLocation = jobsBySectorOnly.filter((item) => {
      // console.log("search by sector and location");
      return jobLocation === item.location;
    });

    // setting jobs based on inputs entered
    if (!jobLocation && jobSector) {
      setJobs(jobsBySectorOnly);
    } else if (!jobSector && jobLocation) {
      setJobs(jobsByLocationOnly);
    } else if (jobSector && jobLocation) {
      setJobs(jobsBySectorAndLocation);
    } else {
      setJobs(jobs);
    }

    // console.log(jobs);
  };

  // function to revert to initial view after a search
  const handleRevert = () => {
    setJobs(jobsList);
    //   clear the inputs
    setJobOption({ jobSector: "", jobLocation: "" });
    setSearchInit(false);
  };

  return (
    <motion.section
      className="jobsInfo"
      variants={pageVariant(2)}
      {...variantProps}
    >
      <form className="jobsInfo__form" onSubmit={handleSearch}>
        <div className="jobsInfo__inputContainer">
          {/* select box - input options */}
          <label htmlFor="jobsField" className="jobsInfo__label">
            Job Field
          </label>
          <select
            name="jobsCategory"
            className="jobsInfo__select"
            value={jobOption.jobSector}
            onChange={(e) =>
              setJobOption({ ...jobOption, jobSector: e.target.value })
            }
          >
            {data.map((item) => (
              <option
                value={item.val}
                className="jobsInfo__sector"
                key={item.val}
              >
                {item.title}
              </option>
            ))}
          </select>
        </div>

        {/* inputs section */}
        <div className="jobsInfo__inputContainer">
          <label htmlFor="location" className="jobsInfo__label">
            Location
          </label>
          <input
            type="text"
            className="jobsInfo__input"
            value={jobOption.jobLocation}
            onChange={(e) =>
              setJobOption({ ...jobOption, jobLocation: e.target.value })
            }
          />
        </div>
        {/* shown only when searchInit is false = initial View*/}
        {!searchInit && (
          <button
            type="button"
            className="jobsInfo__btn"
            onClick={handleSearch}
            disabled={!jobLocation && !jobSector}
          >
            Search
          </button>
        )}

        {/* shown only when searchInit is true - button view when initial button is toggled*/}
        {searchInit && (
          <button
            type="button"
            className="jobsInfo__btn"
            onClick={handleRevert}
          >
            All Jobs.
          </button>
        )}
      </form>

      {/* JOB LISTINGS */}

      <JobListings
        jobs={jobs}
        handleRevert={handleRevert}
        listHeaderTitle={listHeaderTitle}
      />
    </motion.section>
  );
};

export default JobsInfo;
