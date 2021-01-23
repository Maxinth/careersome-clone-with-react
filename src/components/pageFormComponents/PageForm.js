import React from "react";
import { Link } from "react-router-dom";
import "./pageForm.css";
import data from "./data";
const PageForm = () => {
  const { signUp, signIn } = data;
  const { text, signList, linkTexts } = signIn;
  return (
    <section className="pageForm">
      <div className="pageForm__container">
        <h3 className="pageForm__title">{text}</h3>
        <form className="pageForm__form">
          {signList.map((item) => {
            return (
              <div className="pageForm__itemContainer" key={item.id}>
                <label htmlFor={item.id} className="pageForm__label">
                  {item.itemName}
                  {item.id === "signInPassword" && (
                    <span className="pageForm__forgotPassword">
                      (
                      <Link to="/" className="pageForm__link">
                        Forgot password ?
                      </Link>
                      )
                    </span>
                  )}
                </label>
                <input
                  type={item.inputType}
                  id={item.id}
                  className="pageForm__input"
                />
              </div>
            );
          })}

          <div className="pageForm__btnContainer">
            <button className="pageForm__btn" type="button">
              {text}
            </button>
          </div>

          {linkTexts.map((val, index) => (
            <p className="pageForm__text" key={index}>
              <Link to="/" className="pageForm__link">
                {val}
              </Link>
            </p>
          ))}
        </form>
      </div>
    </section>
  );
};

export default PageForm;
