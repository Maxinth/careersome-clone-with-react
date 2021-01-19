import { useEffect } from "react";

const useDocumentTitle = (title) => {
  return useEffect(() => {
    document.title = `${title} CareerSome`;
  }, [title]);
};

export default useDocumentTitle;
