import React from "react";
import "./footer.css";
import FooterContact from "./FooterContact";
import FooterMainText from "./FooterMainText";
import FooterUsefulLinks from "./FooterUsefulLinks";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../context";

const Footer = () => {
  const { showDrop } = useGlobalContext();
  const location = useLocation();

  // see comments
  const marginFix =
    location.pathname !== "/skills"
      ? ""
      : showDrop && location.pathname === "/skills"
      ? ""
      : "skillsAndDrop";

  return (
    <footer className={`footer ${marginFix}`}>
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

/*

                    ======== marginFix =========

  const marginFix =
    location.pathname !== "/skills"
      ? ""
      : showDrop && location.pathname === "/skills"
      ? ""
      : "skillsAndDrop";


 marginFix adds a className of skillsAndDrop to the footer ONLY when showDrop is true and the current pathname
 is '/skills , for other pathname, the footer is in its initial position.

 the skillsAndDrop gives the footer a margin-top of -8rem


 

*/
