import React from "react";
import Blog1 from "../assets/blog_01.webp";

const LearnMoreAboutBlog = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog Information</h1>
      <img src={Blog1} alt="Blog" className="rounded-md mb-4" />
      <p>
        This page includes more detailed information about our blogs and topics of interest. 
        Add as much content as you like here.
      </p>
    </div>
  );
};

export default LearnMoreAboutBlog;
