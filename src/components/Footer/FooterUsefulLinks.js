import React from "react";
import UseFulLink from "./UseFulLink";
import data from "./linksData";

const FooterUsefulLinks = () => {
  const { firstBatch, secondBatch } = data;
  return (
    <section className="footer__useFulLinksContainer">
      <h5 className="footer__useFulLinks__text">useful links</h5>
      <div className="footer__useFulLinkContainer">
        <UseFulLink data={firstBatch} />
        <UseFulLink data={secondBatch} />
      </div>
    </section>
  );
};

export default FooterUsefulLinks;
