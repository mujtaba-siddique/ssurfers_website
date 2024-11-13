import React from "react";
import Blog1 from "../assets/blog_01.webp";

const LearnMoreAboutBlog = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Blog Information</h1>
      <img src={Blog1} alt="Blog" className="rounded-md mb-4" />
      <p>
        This page includes more detailed information about our blogs and topics of interest. 
        Add as much content as you like here Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium quas maxime, ipsam ipsa et tempora expedita dolores dolor cum quo ratione dolorem omnis ad, facere laudantium maiores eum fugit optio! Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id quasi, ad architecto ab, voluptatem laborum, exercitationem provident commodi optio accusantium nemo reiciendis. Et porro ducimus suscipit cum, nostrum cupiditate dicta!.
      </p>
    </div>
  );
};

export default LearnMoreAboutBlog;
