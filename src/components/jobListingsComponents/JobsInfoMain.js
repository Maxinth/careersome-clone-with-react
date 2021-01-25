import React from "react";
import "./jobsMain.css";
const JobsInfoMain = ({ mainText, extract, title }) => {
  return (
    <section className="jobsInfo__main">
      <h2 className="jobsInfo__title">{title}</h2>
      <p className="jobsInfo__text">
        {mainText}. Browse for{" "}
        <span className="jobsInfo__extract">{extract}</span>
        jobs in Nigeria. Careersome has a database of over a hundred{" "}
        <span className="jobsInfo__extract">{extract}</span>
        Jobs. Are you searching for an internship in the following Cities in
        Nigeria: Lagos, Kano, Ibadan, Kaduna, Port Harcourt, Benin City,
        Maiduguri, Zaria, Aba, Jos, Ilorin, Oyo, Enugu, Abeokuta, Abuja, Sokoto,
        Onitsha, Warri, Calabar, Katsina, Akure, Bauchi, Ebute Ikorodu, Makurdi,
        Minna, Umuahia, Ondo, Damaturu, Ikot-Ekpene, Gombe, Jimeta, Gusau, Mubi,
        Owerri or Shagamu? Then you are at the right place with Careersome.
      </p>

      <span className="jobsInfo__help">
        Please use the search form below to filter jobs by location and / or Job
        Field
      </span>
    </section>
  );
};

export default JobsInfoMain;
