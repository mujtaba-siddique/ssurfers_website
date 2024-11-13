import React from "react";
import Blog from "../assets/blog.webp";

const LearnMoreAboutSurfing = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Surfing Knowledge</h1>
      <img src={Blog} alt="Surfing Blog" className="rounded-md mb-4" />
      <p>
        Detailed content about surfing goes here. You can add more images, facts,
        and any information related to surfing.
      </p>
    </div>
  );
};

export default LearnMoreAboutSurfing;
