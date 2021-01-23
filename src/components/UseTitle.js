import { useEffect } from "react";

const useDocumentTitle = (title) => {
  return useEffect(() => {
    document.title = `title`;
  }, [title]);
};

export default useDocumentTitle;
