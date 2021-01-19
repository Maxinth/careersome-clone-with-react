import React from "react";
import GeneratePageCards from "./GeneratePageCards";
import data from "./data";
const { pageOneCards, pageTwoCards, pageThreeCards } = data;
const CareerCardPage = ({ page }) => {
  return (
    <>
      {/* PAGE ONE - render when page === pageOneCards */}
      {page === 1 && <GeneratePageCards pageNo={pageOneCards} />}
      {/* END OF PAGE ONE */}

      {/* PAGE TWO - render when page === pageTwoCards */}
      {page === 2 && <GeneratePageCards pageNo={pageTwoCards} />}
      {/* END OF PAGE TWO */}

      {/* PAGE THREE - render when page === pageThreeCards*/}
      {page === 3 && <GeneratePageCards pageNo={pageThreeCards} />}
      {/* END OF PAGE THREE */}
    </>
  );
};

export default CareerCardPage;
