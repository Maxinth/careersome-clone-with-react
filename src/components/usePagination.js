import { useState } from "react";

const usePagination = () => {
  const [pageNo, setPageNo] = useState(0);

  // custom function to simulate page transition on click on custom-made pagination.
  const makeCurrentPage = (index) => {
    setPageNo(index);
  };
  return { pageNo, makeCurrentPage };
};

export default usePagination;
