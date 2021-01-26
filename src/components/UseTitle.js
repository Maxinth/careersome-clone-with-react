import { useEffect } from "react";

const useDocumentTitle = (
  title = "Latest Fresh Graudate, Entry Level Jobs & Internships in Nigeria"
) => {
  return useEffect(() => {
    document.title = title;
  }, [title]);
};

export default useDocumentTitle;
