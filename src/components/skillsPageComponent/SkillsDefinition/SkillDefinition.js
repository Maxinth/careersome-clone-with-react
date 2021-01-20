import React, { useState } from "react";
import "./skillDefinition.css";
import SkillDefinitionSocial from "./SkillDefinitionSocial";
import { motion, AnimatePresence } from "framer-motion";
import { useVariants } from "../../useVariants";

const SkillDefinition = () => {
  const [view, setView] = useState(false);
  const toggleView = () => setView(!view);
  const { variantProps, pageVariant } = useVariants();
  return (
    <motion.section className="definition" {...variantProps}>
      <section className="skillDefinition">
        <div className="skillDefinition__cardMain">
          <section className="skillDefinition__cardMainContainer">
            <h1 className="skillDefinition__title">
              {!view ? "What is Adaptability" : "How to be more Adaptable"}
            </h1>

            {!view && (
              <motion.div
                className="skillDefinition__body"
                variants={pageVariant()}
              >
                <p className="skillDefinition__text">
                  Adaptability means being able to adjust easily to new
                  circumstances and environments. An adaptable person is one who
                  keeps an open and positive mind, who is ready for new
                  challenges, who stays calm and composed in the face of
                  difficulties, who continues steadily despite problems or
                  difficulties, who recovers quickly from setbacks, etc.
                </p>
                <p className="skillDefinition__text">
                  it’s important that you learn how to become more adaptable, as
                  developing the quality will help you respond well to change,
                  uncertainty and crisis. Below are some tips on how to be more
                  adaptable.
                </p>
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
              <p className="skillDefinition__howToTexts">
                have an optimistic, farsighted attitude so as to be able to
                think ahead and stay positive while pushing through discomfort
                or rough patches
              </p>
              <p className="skillDefinition__howToTexts">
                develop the ability to control your impulsive feelings and
                behaviors
              </p>
              <p className="skillDefinition__howToTexts">
                avoid forming an opinion without enough thought or knowledge
              </p>
              <p className="skillDefinition__howToTexts">
                be receptive to new ideas and concepts approach tasks, problems,
                and situations with openness to alternatives have a honest and
                balanced view of your own personality
              </p>
              <p className="skillDefinition__howToTexts">
                show concern for the needs, wishes and feelings of others
              </p>
              <p className="skillDefinition__howToTexts">
                have confidence in yourself and your own abilities
              </p>
            </motion.section>
          )}
        </div>
        <button
          type="button"
          className="skillDefinition__howTo"
          onClick={toggleView}
        >
          {!view ? "How to be more Adaptable" : "Back to main view"}
        </button>
      </section>

      {/* REFERENCES SECTION  */}
      <section className="skillDefinition__references">
        <h5 className="skillDefinition__referencesTitle">
          References and Further Reading
        </h5>
        <div className="skillDefinition__referenceList">
          <p className="skillDefinition__referenceItem">
            University of Kent: Adaptability
          </p>
          <p className="skillDefinition__referenceItem">
            TrainingZone: Adaptability - a key skill we must develop in
            ourselves and in others
          </p>
        </div>

        {/* SOCIAL MEDIA ICONS */}
        <SkillDefinitionSocial />
      </section>
    </motion.section>
  );
};

export default SkillDefinition;
