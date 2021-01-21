import React from "react";
import "./skillsDropdown.css";
import { useGlobalContext } from "../../context";
// import data from "./socialDropDownData";
import AddBoxIcon from "@material-ui/icons/AddBox";

const SkillsSocialDropDown = ({ show, hoverOut, data, Modal }) => {
  const { toggleModalView, hideDropBox } = useGlobalContext();
  const showModal = () => {
    toggleModalView();
    hideDropBox();
  };

  const viewState = show ? "inView" : "hidden";
  return (
    <section
      className={`skillsSocialDropDown ${!Modal ? viewState : ""}`}
      onMouseLeave={hoverOut}
    >
      <section className="skillsSocialDropDown__main">
        {data.map((item) => (
          <div className="skillsSocialDropDown__container" key={item.id}>
            {item.socialMediaIcon}
            <span className="skillsSocialDropDownText">{item.id}</span>
          </div>
        ))}
      </section>
      {!Modal && (
        <button
          type="button"
          className="skillsSocialDropDown__btn"
          onClick={showModal}
        >
          <AddBoxIcon className="skillsSocialDropDown__icon add" />
          <span className="skillsSocialDropDownText"> More...</span>
        </button>
      )}
    </section>
  );
};

export default SkillsSocialDropDown;

/*
I have passed a Modal prop in to make the component reuseable
when the Modal prop is passed in viewState gets cleared and so 
the hidden and inView classes 

don;t get  evaluated.


*/
