import React from "react";
import JobItem from "./JobItem";
import "./jobsInfo.css";
const JobsInfo = ({mainText, extract, jobsList}) => {
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
          <select name="jobsCategory" className="jobsInfo__select">
            <option value="" className="jobsInfo__sector"></option>
            <option value="adminClerical" className="jobsInfo__sector">
              Administrative / Clerical
            </option>
            <option value="artsMedia" className="jobsInfo__sector">
              Arts, Media and Entertainment
            </option>
            <option value="customerService" className="jobsInfo__sector">
              Customer Service
            </option>
            <option value="engineering" className="jobsInfo__sector">
              Engineering
            </option>
          </select>
        </div>
        <div className="jobsInfo__inputContainer">
          <label htmlFor="location" className="jobsInfo__label">
            Location
          </label>
          <input type="text" className="jobsInfo__input" />
        </div>
        <button type="button" className="jobsInfo__btn">
          Search
        </button>
      </form>
      <section className="jobsInfo__listingsContainer">
        <h5 className="jobsInfo__title">
          Below are the latest internship jobs in Nigeria
        </h5>
        <div className="jobsInfo__listings">
          {jobsList.map((item, index) => (
              <JobItem key={index} {...item}/>
          ))}
        </div>
      </section>
    </section>
  );
};

export default JobsInfo;
