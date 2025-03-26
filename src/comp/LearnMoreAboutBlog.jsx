import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Blog1 from "../assets/blog_01.webp";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

const LearnMoreAboutBlog = () => {
  const location = useLocation();

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Extract state from navigation if available
  const { workshopType, instructor, content } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="relative group mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-600 opacity-90 rounded-3xl"></div>
          <img 
            src={Blog1} 
            alt="Surfing community discussion" 
            className="w-full h-96 object-cover rounded-3xl shadow-2xl transform transition-transform duration-500 group-hover:scale-101"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-serif mb-6">
              {workshopType || "Ocean Wisdom Chronicles"}
              <span className="block w-24 h-1.5 bg-amber-400 mx-auto mt-6 rounded-full"></span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl">
              {content || "Dive deep into surf culture, wave science, and coastal conservation"}
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Primary Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Article */}
            <article className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-6 text-blue-600">
                <FaCalendarAlt className="w-5 h-5" />
                <span className="font-medium">August 15, 2023</span>
                <FaUser className="w-5 h-5 ml-4" />
                <span>{instructor || "By Surf Master Raj"}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {workshopType ? `${workshopType} Details` : "The Science of Perfect Waves"}
              </h2>
              
              <div className="prose max-w-none text-gray-700 space-y-6">
                <p className="text-lg leading-relaxed">
                  {workshopType === "Wave Mastery 101" ? (
                    "Discover comprehensive techniques for mastering waves with our certified instructors:"
                  ) : (
                    "Explore the latest insights and research in surf science and culture:"
                  )}
                </p>

                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <FaArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span>
                      {workshopType === "Wave Mastery 101" 
                        ? "Wave formation mechanics" 
                        : "Monthly surf spot highlights"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span>
                      {workshopType === "Wave Mastery 101" 
                        ? "Board control techniques" 
                        : "Equipment innovation updates"}
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <FaArrowRight className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                    <span>
                      {workshopType === "Wave Mastery 101" 
                        ? "Competition strategies" 
                        : "Environmental conservation efforts"}
                    </span>
                  </li>
                </ul>

                <div className="border-l-4 border-blue-500 pl-4 my-8">
                  <p className="text-xl italic text-gray-600">
                    "Understanding waves is understanding nature's rhythm - 
                    it transforms good surfers into great ones."
                  </p>
                </div>
              </div>
            </article>

            {/* Author Profile */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                  <FaUser className="w-12 h-12 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rajesh Suri</h3>
                  <p className="text-gray-600">
                    ISA Certified Surf Instructor | Marine Biologist | 
                    Founder of Coastal Awareness Initiative
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Card */}
            <div className="bg-blue-600 p-8 rounded-2xl shadow-lg text-white">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="mb-6">
                Get weekly surf reports and exclusive content
              </p>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full p-3 rounded-lg mb-4 text-gray-900"
              />
              <button className="w-full bg-amber-400 text-blue-900 font-semibold py-3 rounded-lg hover:bg-amber-300 transition">
                Subscribe Now
              </button>
            </div>

            {/* Featured Posts */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-6">Trending Guides</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="group flex items-center gap-4 cursor-pointer">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaCalendarAlt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-blue-600 transition">
                        {workshopType === "Wave Mastery 101" 
                          ? "Advanced Wave Riding" 
                          : "Surf Culture History"}
                      </h4>
                      <p className="text-sm text-gray-500">15 August 2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreAboutBlog;