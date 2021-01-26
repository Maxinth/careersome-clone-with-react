import React from "react";
import PostJobsFree from "../components/postJobFreeComponents/PostJobsFree";
import useDocumentTitle from "../components/UseTitle";
const PostJobs = () => {
  useDocumentTitle("Post Nigerian Internships and Entry Level Jobs");
  return <PostJobsFree />;
};

export default PostJobs;
