import React, { useState } from "react";
import "./skillDefinition.css";
import SkillDefinitionSocial from "./SkillDefinitionSocial";
import { motion } from "framer-motion";
import { useVariants } from "../../useVariants";

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
  return (
    <motion.section className="definition" {...variantProps}>
      <section className="skillDefinition">
        <div className="skillDefinition__cardMain">
          <section className="skillDefinition__cardMainContainer">
            <h1 className="skillDefinition__title">
              {!view ? `What is ${title}` : `How to  ${infoText}`}
            </h1>

            {!view && (
              <motion.div
                className="skillDefinition__body"
                variants={pageVariant()}
              >
                {firstText && (
                  <p className="skillDefinition__text">{firstText}</p>
                )}
                {secondText && (
                  <p className="skillDefinition__text">{secondText}</p>
                )}
              </motion.div>
            )}
          </section>

          {view && (
            <motion.section
              className="skillDefinition__howToBlock"
              variants={pageVariant()}
              exit={{
                x: "-100vw",
                transition: { type: "tween", duration: 2 },
              }}
            >
              {howToTexts.map((item, index) => (
                <p className="skillDefinition__howToTexts" key={index}>
                  {item}
                </p>
              ))}
            </motion.section>
          )}
        </div>
        <button
          type="button"
          className="skillDefinition__howTo"
          onClick={toggleView}
        >
          {!view ? `How to  ${infoText}` : "Back to main view"}
        </button>
      </section>

      {/* REFERENCES SECTION  */}
      <section className="skillDefinition__references">
        <h5 className="skillDefinition__referencesTitle">
          References and Further Reading
        </h5>
        <div className="skillDefinition__referenceList">
          {referenceList.map((item, index) => (
            <p className="skillDefinition__referenceItem" key={index}>
              {item}
            </p>
          ))}
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <SkillDefinitionSocial />
      </section>
    </motion.section>
  );
};

export default SkillDefinition;
