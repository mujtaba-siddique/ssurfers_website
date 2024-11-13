import React from "react";
import { Link } from "react-router-dom";
import Blog from "../assets/blog.webp";
import Blog1 from "../assets/blog_01.webp";

const ReadMore = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 sm:mt-36">
      <div className="sm:rounded-md order-1 sm:order-1">
        <img src={Blog} alt="Blog" loading="lazy" />
      </div>
      <div className="md:ml-20 md:mt-24 text-center order-2 sm:order-2">
        <h2 className="text-xl font-semibold">Learn more about surfing</h2>
        <p className="max-w-screen-sm font-roboto text-gray-600 mt-6 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A facilis sint
          quas illum nemo aut ea reiciendis inventore, itaque natus cupiditate
          soluta iusto nam quam nisi error maxime repellendus. Quos.
        </p>
        <Link to="/learn-more-surfing">
          <button className="border-2 border-black hover:border-gray-600 px-20 py-2 rounded-sm text-gray-500 hover:text-gray-800 mt-6 items-center ">
            Know More!
          </button>
        </Link>
      </div>

      <div className="md:ml-20 md:mt-36 text-center order-4 sm:order-3">
        <h2 className="text-xl font-semibold">Learn more about Blog</h2>
        <p className="max-w-screen-sm font-roboto text-gray-600 mt-6 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. A facilis sint
          quas illum nemo aut ea reiciendis inventore, itaque natus cupiditate
          soluta iusto nam quam nisi error maxime repellendus. Quos.
        </p>
        <Link to="/learn-more-blog">
          <button className="border-2 border-black hover:border-gray-600 px-20 py-2 rounded-sm text-gray-500 hover:text-gray-800 mt-6 items-center sm:mb-20 mb-10">
            Click Me
          </button>
        </Link>
      </div>
      <div className="sm:mb-20 mb-7 order-3 sm:order-4 sm:mt-12 ">
        <img src={Blog1} alt="Blog" loading="lazy" className="sm:rounded-md" />
      </div>
    </div>
  );
};

export default ReadMore;
