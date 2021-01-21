import React from "react";
import "./skillsDropdown.css";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RedditIcon from "@material-ui/icons/Reddit";
import AddBoxIcon from "@material-ui/icons/AddBox";

const SkillsSocialDropDown = ({ show, hoverOut }) => {
  const viewState = show ? "inView" : "hidden";
  return (
    <section
      className={`skillsSocialDropDown ${viewState}`}
      onMouseLeave={hoverOut}
    >
      <section className="skillsSocialDropDown__main">
        <div className="skillsSocialDropDown__container">
          <FacebookIcon className="skillsSocialDropDown__icon fb" />{" "}
          <span className="skillsSocialDropDownText">Facebook</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <TwitterIcon className="skillsSocialDropDown__icon tw" />
          <span className="skillsSocialDropDownText">Twitter</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <MailIcon className="skillsSocialDropDown__icon mail" />
          <span className="skillsSocialDropDownText">Email</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <PinterestIcon className="skillsSocialDropDown__icon pin" />
          <span className="skillsSocialDropDownText">Pinterest</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <LinkedInIcon className="skillsSocialDropDown__icon li" />
          <span className="skillsSocialDropDownText">Linkedin</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <RedditIcon className="skillsSocialDropDown__icon reddit" />
          <span className="skillsSocialDropDownText">Reddit</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <WhatsAppIcon className="skillsSocialDropDown__icon whats" />
          <span className="skillsSocialDropDownText">WhatsApp</span>
        </div>
        <div className="skillsSocialDropDown__container">
          <MailOutlineIcon className="skillsSocialDropDown__icon gmail" />
          <span className="skillsSocialDropDownText">gmail</span>
        </div>
      </section>
      <button type="button" className="skillsSocialDropDown__btn">
        <AddBoxIcon className="skillsSocialDropDown__icon add" />
        <span className="skillsSocialDropDownText"> More...</span>
      </button>
    </section>
  );
};

export default SkillsSocialDropDown;
