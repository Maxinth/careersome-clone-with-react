import React from "react";
import "./footer.css";
import FooterContact from "./FooterContact";
import FooterMainText from "./FooterMainText";
import FooterUsefulLinks from "./FooterUsefulLinks";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <FooterMainText />
        <div className="footer__bottom">
          <FooterUsefulLinks />
          <FooterContact />
        </div>
      </div>
      <section className="footer__copyright">
        <p className="footer__copyrightText">
          2021 Careersome &copy; All rights reserved.
        </p>
        <p className="footer__copyrightText">Privacy & Cookies Policy</p>
      </section>
    </footer>
  );
};

export default Footer;
