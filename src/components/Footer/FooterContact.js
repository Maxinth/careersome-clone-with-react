import React from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MailIcon from "@material-ui/icons/Mail";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TelegramIcon from "@material-ui/icons/Telegram";
import FacebookIcon from "@material-ui/icons/Facebook";
const FooterContact = () => {
  return (
    <div className="footer__contact">
      <h3 className="footer__contactTitle">Contact</h3>
      <p className="footer__Text">
        Careersome <span className="footer__clone">(CLONE)</span>
      </p>
      <p className="footer__Text">Tel: (+234) 902 428 2995</p>
      <div className="footer__social">
        <p className="footer__socialText">
          <span className="footer__clone">Cloned</span> with
          <FavoriteIcon className="footer__icon heart" />
          in Lagos, Nigeria
        </p>
        <div className="footer__socialIcons">
          <span className="footer__iconContainer">
            <MailIcon className="footer__icon mail" />
          </span>
          <span className="footer__iconContainer">
            <TwitterIcon className="footer__icon twitter" />
          </span>
          <span className="footer__iconContainer">
            <LinkedInIcon className="footer__icon linkedIn" />
          </span>
          <span className="footer__iconContainer">
            <TelegramIcon className="footer__icon telegram" />
          </span>
          <span className="footer__iconContainer">
            <FacebookIcon className="footer__icon fb" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
