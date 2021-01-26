import React from "react";

const pageNoArray = [1, 2, 3];
const CareerPagination = ({ makeCurrentPage, stylePageInView }) => {
  return (
    <>
      {pageNoArray.map((item, index) => {
        return (
          <div
            className={`career__page ${stylePageInView(index + 1)}`}
            onClick={() => makeCurrentPage(index + 1)}
          >
            {item}
          </div>
        );
      })}
    </>
  );
};

export default CareerPagination;
