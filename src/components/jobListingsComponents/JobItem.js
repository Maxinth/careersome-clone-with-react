import React from "react";
import WorkIcon from "@material-ui/icons/Work";
import ViewComfyIcon from "@material-ui/icons/ViewComfy";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import "./jobItem.css";
const JobItem = ({jobTitle, company, sector, location}) => {
  return (
    <section className="jobItem">
          <h5 className="jobItem__title">{jobTitle}</h5>
      <section className="jobItem__main">
        <div className="jobItem__container">
          <WorkIcon className="jobItem__icon work" />
                  <span className="jobItem__text">{company}</span>
        </div>
        <div className="jobItem__container">
          <ViewComfyIcon className="jobItem__icon sector" />
                  <span className="jobItem__text">{sector}</span>
        </div>
        <div className="jobItem__container">
          <LocationOnIcon className="jobItem__icon location" />
                  <span className="jobItem__text">{location}</span>
        </div>
      </section>
    </section>
  );
};

export default JobItem;
