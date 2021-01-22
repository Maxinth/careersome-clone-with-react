import React, { useState } from "react";
import "./skillDefinition.css";
import SkillDefinitionSocial from "./SkillDefinitionSocial";
import { motion } from "framer-motion";
import { useVariants } from "../../useVariants";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import BeenhereIcon from "@material-ui/icons/Beenhere";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const SkillDefinition = ({
  title,
  firstText,
  secondText,
  howToTexts,
  infoText,
  referenceList = [],
}) => {
  const [view, setView] = useState(false);
  const toggleView = () => setView(!view);
  const { variantProps, pageVariant } = useVariants();

  const titleEdit = title === "this section all about?" ? "FAQ:" : "";

  return (
    <motion.section className="definition" {...variantProps}>
      <section className="skillDefinition">
        <div className="skillDefinition__cardMain">
          <section className="skillDefinition__cardMainContainer">
            <h1 className="skillDefinition__title">
              {!view ? `${titleEdit} What is ${title}` : `How to  ${infoText}`}
            </h1>

            {!view && (
              <motion.div
                className="skillDefinition__body"
                variants={pageVariant()}
              >
                {firstText && (
                  <p className="skillDefinition__text">
                    <ThumbUpIcon className="skillDefinition__icon thumbs" />
                    {firstText}
                  </p>
                )}
                {secondText && (
                  <p className="skillDefinition__text">
                    <ThumbUpIcon className="skillDefinition__icon thumbs" />
                    {secondText}
                  </p>
                )}
              </motion.div>
            )}
          </section>

          {/* moved HowTo block into  the div.skillDefinition __cardMain to ease its creation when view changes */}
          {view && (
            <motion.section
              className="skillDefinition__howToBlock"
              variants={pageVariant()}
            >
              {howToTexts.map((item, index) => (
                <motion.p
                  className="skillDefinition__howToTexts"
                  key={index}
                  variants={pageVariant(2, (index + 1) * 0.6)}
                >
                  <BeenhereIcon className="skillDefinition__icon beenHere" />
                  <span className="skillDefinition__howToTEXT">{item}</span>
                </motion.p>
              ))}
            </motion.section>
          )}
        </div>
        <button
          type="button"
          className="skillDefinition__howTo"
          onClick={toggleView}
        >
          <span>{!view ? `How to  ${infoText}` : "Back to main view"}</span>
        </button>
      </section>

      {/* REFERENCES SECTION  */}
      <section className="skillDefinition__references">
        {/* show references when available */}
        {referenceList.length !== 0 && (
          <>
            <h5 className="skillDefinition__referencesTitle">
              References and Further Reading
            </h5>

            <div className="skillDefinition__referenceList">
              {referenceList.map((item, index) => (
                <p className="skillDefinition__referenceListItem" key={index}>
                  <LocalLibraryIcon className="skillDefinition__icon ref" />
                  <span className="skillDefinition__referenceItem">{item}</span>
                </p>
              ))}
            </div>
          </>
        )}
        {/* SOCIAL MEDIA ICONS */}
        <SkillDefinitionSocial />
      </section>
    </motion.section>
  );
};

export default SkillDefinition;

/*

Line 20: 
 const { variantProps, pageVariant, cardHover: btnHover } = useVariants();

 The part cardHover:btnHover destructures the cardHover property from calling useVariants and assigns it an alias btnHover .

*/
