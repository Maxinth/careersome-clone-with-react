import React from "react";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import FacebookIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PinterestIcon from "@material-ui/icons/Pinterest";
import RedditIcon from "@material-ui/icons/Reddit";

export default [
  {
    id: "Facebook",
    socialMediaIcon: <FacebookIcon className="skillsSocialDropDown__icon fb" />,
  },
  {
    id: "Twitter",
    socialMediaIcon: <TwitterIcon className="skillsSocialDropDown__icon tw" />,
  },
  {
    id: "Mail",
    socialMediaIcon: <MailIcon className="skillsSocialDropDown__icon mail" />,
  },
  {
    id: "Pinterest",
    socialMediaIcon: (
      <PinterestIcon className="skillsSocialDropDown__icon pin" />
    ),
  },
  {
    id: "Linkedin",
    socialMediaIcon: <LinkedInIcon className="skillsSocialDropDown__icon li" />,
  },
  {
    id: "Reddit",
    socialMediaIcon: (
      <RedditIcon className="skillsSocialDropDown__icon reddit" />
    ),
  },
  {
    id: "WhatsApp",
    socialMediaIcon: (
      <WhatsAppIcon className="skillsSocialDropDown__icon whats" />
    ),
  },
  {
    id: "Gmail",
    socialMediaIcon: (
      <MailOutlineIcon className="skillsSocialDropDown__icon gmail" />
    ),
  },
];
