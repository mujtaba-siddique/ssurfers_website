import React from "react";
import { useNavigate } from "react-router-dom";
import Blog from "../assets/blog.webp";
import Blog1 from "../assets/blog_01.webp";

const ReadMore = () => {
  const navigate = useNavigate();

  // Workshop बटन के लिए हेंडलर
  const handleWorkshopClick = () => {
    navigate("/learn-more-blog", {
      state: {
        workshopType: "Wave Mastery 101",
        instructor: "Certified Surf Instructors",
        content: "Unlock the secrets of perfect wave selection and board control with our certified instructors."
      }
    });
  };

  // Explore Content बटन के लिए हेंडलर
  const handleSurfingClick = () => {
    navigate("/learn-more-surfing", {
      state: {
        title: "Advanced Surf Techniques",
        content: "Deep dive into professional surfing methodologies",
        instructor: "ISA Certified Coaches"
      }
    });
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Surfing Section */}
          <div className="group relative flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={Blog} 
                alt="Surfer riding a big wave at sunset" 
                loading="lazy"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="text-center space-y-6 px-4 sm:px-8">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Wave Mastery 101
                <span className="block w-16 h-1 bg-amber-500 mx-auto mt-4 rounded-full"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Unlock the secrets of perfect wave selection and board control with our certified instructors. 
                Learn essential techniques like bottom turns, cutbacks, and aerial maneuvers.
              </p>
              <button 
                onClick={handleWorkshopClick}
                className="inline-block px-8 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-amber-500 hover:to-amber-600"
              >
                Join Workshop →
              </button>
            </div>
          </div>

          {/* Blog Section */}
          <div className="group relative flex flex-col gap-8 lg:mt-20">
            <div className="relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img 
                src={Blog1} 
                alt="Group of surfers discussing wave patterns" 
                loading="lazy"
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            
            <div className="text-center space-y-6 px-4 sm:px-8">
              <h2 className="text-3xl font-bold text-gray-900 font-serif">
                Ocean Chronicles
                <span className="block w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dive into our weekly surf reports, equipment reviews, and pro surfer interviews. 
                Explore hidden surf spots through our interactive map guides.
              </p>
              <button 
                onClick={handleSurfingClick}
                className="inline-block px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-500 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:from-blue-500 hover:to-blue-600"
              >
                Explore Content →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadMore;