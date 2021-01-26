import React from "react";
import { Link } from "react-router-dom";

const UseFulLink = ({ data }) => {
  return (
    <ul className="footer__useFulLink">
      {data.map((item, index) => (
        <li className="footer__useFulListItem" key={index}>
          <Link className="footer__useFulItemLink" to={item.goTo}>
            {item.linkText}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default UseFulLink;
