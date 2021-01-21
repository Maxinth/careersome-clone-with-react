import React from "react";
import initialData from "./socialDropDownData";

import TelegramIcon from "@material-ui/icons/Telegram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";

export default [
  ...initialData,
  {
    id: "Telegram",
    socialMediaIcon: <TelegramIcon className="skillsSocialDropDown__icon tg" />,
  },
  {
    id: "YouTube",
    socialMediaIcon: <YouTubeIcon className="skillsSocialDropDown__icon yt" />,
  },
  {
    id: "Instagram",
    socialMediaIcon: (
      <InstagramIcon className="skillsSocialDropDown__icon ig" />
    ),
  },
  {
    id: "Github",
    socialMediaIcon: <GitHubIcon className="skillsSocialDropDown__icon hub" />,
  },
];
