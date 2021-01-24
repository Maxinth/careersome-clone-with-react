import React, { useState } from "react";
import JobItem from "./JobItem";
import JobListingPagination from "./JobListingPagination";
import "./jobsInfo.css";
import data from "./jobsSectorData";

const JobsInfo = ({ mainText, extract, jobsList }) => {
  const [jobs, setJobs] = useState(jobsList);
  const [jobOption, setJobOption] = useState({
    jobSector: "",
    jobLocation: "",
  });

  const { jobSector, jobLocation } = jobOption;
  // btn click state
  const [searchInit, setSearchInit] = useState(false);
  const runSearch = () => setSearchInit(true);

  const handleSearch = () => {
    runSearch();
    console.log("handleSearch");
    const newJobs = [...jobs];
    const jobsBySectorOnly = newJobs.filter((job) => {
      console.log("search by sector only");
      return jobSector === job.id;
    });

    const jobsByLocationOnly = newJobs.filter((job) => {
      console.log("search by location only");
      return jobLocation === job.location;
    });
    console.log(jobsBySectorOnly);

    const jobsBySectorAndLocation = jobsBySectorOnly.filter((item) => {
      console.log("search by sector and location");
      //   console
      //     .log
      //     (`for item @ ${index} entered location = ${jobLocation}
      //      and   list item.location is ${item.location}= ${
      //       jobLocation === item.location
      //     }`)

      return jobLocation === item.location;
    });
    if (!jobLocation && jobSector) {
      setJobs(jobsBySectorOnly);
    } else if (!jobSector && jobLocation) {
      setJobs(jobsByLocationOnly);
    } else if (jobSector && jobLocation) {
      setJobs(jobsBySectorAndLocation);
    } else {
      setJobs(jobs);
    }

    console.log(jobs);
  };

  const handleRevert = () => {
    console.log("handleRevert");
    setJobs(jobsList);
    //   clear the inputs
    setJobOption({ jobSector: "", jobLocation: "" });
    setSearchInit(false);
  };

  return (
    <section className="jobsInfo">
      <h2 className="jobsInfo__title">
        Undergraduate and Graduate Internships in Nigeria
      </h2>
      <p className="jobsInfo__text">
        {mainText}. Browse for
        {extract} jobs in Nigeria. Careersome has a database of over a hundred
        internship Jobs. Are you searching for an internship in the following
        Cities in Nigeria: Lagos, Kano, Ibadan, Kaduna, Port Harcourt, Benin
        City, Maiduguri, Zaria, Aba, Jos, Ilorin, Oyo, Enugu, Abeokuta, Abuja,
        Sokoto, Onitsha, Warri, Calabar, Katsina, Akure, Bauchi, Ebute Ikorodu,
        Makurdi, Minna, Umuahia, Ondo, Damaturu, Ikot-Ekpene, Gombe, Jimeta,
        Gusau, Mubi, Owerri or Shagamu? Then you are at the right place with
        Careersome.
      </p>

      <span className="jobsInfo__help">
        Please use the search form below to filter jobs by location and / or Job
        Field
      </span>

      <form className="jobsInfo__form">
        <div className="jobsInfo__inputContainer">
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
      <JobListingPagination />
    </section>
  );
};

export default JobsInfo;
