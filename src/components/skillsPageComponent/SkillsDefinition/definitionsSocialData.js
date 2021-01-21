import React from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";

export default [
  {
    iconClass: "add",
    icon: <AddBoxIcon className="skillDefinition__icon add" />,
  },
  {
    iconClass: "fb",
    icon: <FacebookIcon className="skillDefinition__icon fb" />,
  },
  {
    iconClass: "tw",
    icon: <TwitterIcon className="skillDefinition__icon tw" />,
  },
  {
    iconClass: "wht",
    icon: <WhatsAppIcon className="skillDefinition__icon wht" />,
  },
  {
    iconClass: "li",
    icon: <LinkedInIcon className="skillDefinition__icon li" />,
  },
  {
    iconClass: "tg",
    icon: <TelegramIcon className="skillDefinition__icon tg" />,
  },
  {
    iconClass: "mail",
    icon: <MailIcon className="skillDefinition__icon mail" />,
  },
];
