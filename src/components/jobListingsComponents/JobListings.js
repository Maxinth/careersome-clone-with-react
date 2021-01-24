// import React, { useState } from "react";
// import JobItem from "./JobItem";

// const JobListings = ({
//   pageJobs,
//   //   handleRevert,
//   runSearch,
//   jobOption,
//   setJobOption,
//   setSearchInit,
// }) => {
//   const [jobs, setJobs] = useState(pageJobs);
//   const { jobSector, jobLocation } = jobOption;

//   const handleSearch = () => {
//     runSearch();
//     console.log("handleSearch");
//     const newJobs = [...jobs];
//     const jobsBySectorOnly = newJobs.filter((job) => {
//       console.log("search by sector only");
//       return jobSector === job.id;
//     });

//     const jobsByLocationOnly = newJobs.filter((job) => {
//       console.log("search by location only");
//       return jobLocation === job.location;
//     });
//     console.log(jobsBySectorOnly);

//     const jobsBySectorAndLocation = jobsBySectorOnly.filter((item) => {
//       console.log("search by sector and location");
//   console
//     .log
//     (`for item @ ${index} entered location = ${jobLocation}
//      and   list item.location is ${item.location}= ${
//       jobLocation === item.location
//     }`)

//       return jobLocation === item.location;
//     });
//     if (!jobLocation && jobSector) {
//       setJobs(jobsBySectorOnly);
//     } else if (!jobSector && jobLocation) {
//       setJobs(jobsByLocationOnly);
//     } else if (jobSector && jobLocation) {
//       setJobs(jobsBySectorAndLocation);
//     } else {
//       setJobs(jobs);
//     }

//     console.log(jobs);
//   };

//   const handleRevert = () => {
//     console.log("handleRevert");
//     setJobs(pageJobs);
//     // clear the inputs
//     setJobOption({ jobSector: "", jobLocation: "" });
//     setSearchInit(false);
//   };
//   return (
//     <section className="jobsInfo__listingsContainer">
//       <h5 className="jobsInfo__title">
//         Below are the latest internship jobs in Nigeria
//       </h5>
//       <div className="jobsInfo__listings">
//         {jobs.length !== 0 ? (
//           jobs.map((item, index) => <JobItem key={index} {...item} />)
//         ) : (
//           <div className="jobsInfo__notFound">
//             <h3 className="jobsInfo__noItem">
//               No jobs match those parameters!
//             </h3>
//             <button
//               type="button"
//               className="jobsInfo__btn"
//               onClick={handleRevert}
//             >
//               Back
//             </button>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default JobListings;
