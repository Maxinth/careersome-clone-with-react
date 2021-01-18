import React from "react";
import "./footer.css";
import UseFulLink from "./UseFulLink";
import data from "./linksData";
import FooterContact from "./FooterContact";

const Footer = () => {
  const { firstBatch, secondBatch } = data;
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__main">
          <h3 className="footer__mainTitle">
            Career<span className="footer__some">some</span>
          </h3>
          <p className="footer__mainText">
            Careersome is helping Nigerian students and fresh graduates kick
            start their careers. Our platform helps people learn about careers,
            make career decisions and enter into the labour market.
          </p>
          <p className="footer__mainText">
            Careersome offers the best opportunity for students and graduates to
            find internships and entry level jobs in Nigeria.
          </p>
        </section>
        <section className="footer__useFulLinksContainer">
          <h5 className="footer__useFulLinks__text">useful links</h5>
          <div className="footer__useFulLinkContainer">
            <UseFulLink data={firstBatch} />
            <UseFulLink data={secondBatch} />
          </div>
        </section>
        <FooterContact />
      </div>
    </footer>
  );
};

export default Footer;
