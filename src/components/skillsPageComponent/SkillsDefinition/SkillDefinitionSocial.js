import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";

const SkillDefinitionSocial = () => {
  return (
    <section className="skillDefinition__socialContainer">
      <h3 className="skillDefinition__socialTitle">Share This page</h3>
      <div className="skillDefinition__Container">
        <span className="skillDefinition__iconContainer">
          <AddBoxIcon className="skillDefinition__icon add" />
        </span>
        <span className="skillDefinition__iconContainer">
          <FacebookIcon className="skillDefinition__icon fb" />
        </span>
        <span className="skillDefinition__iconContainer">
          <TwitterIcon className="skillDefinition__icon tw" />
        </span>
        <span className="skillDefinition__iconContainer">
          <WhatsAppIcon className="skillDefinition__icon wht" />
        </span>
        <span className="skillDefinition__iconContainer">
          <LinkedInIcon className="skillDefinition__icon li" />
        </span>
        <span className="skillDefinition__iconContainer">
          <TelegramIcon className="skillDefinition__icon tg" />
        </span>
        <span className="skillDefinition__iconContainer">
          <MailIcon className="skillDefinition__icon mail" />
        </span>
      </div>
    </section>
  );
};

export default SkillDefinitionSocial;
