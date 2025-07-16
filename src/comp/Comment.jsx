import React from "react";
import Customer1 from "../assets/customer1.webp";
import Customer2 from "../assets/customer2.webp";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { FiStar } from "react-icons/fi";

function Comment() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Surfers Say
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-6">
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
            <FiStar className="h-8 w-8 text-blue-600" />
            <div className="w-12 h-1 bg-blue-600 rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our community of passionate wave riders about their experiences
            with our premium surfboards and customer service
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Review Card 1 */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 left-8 -translate-y-1/2">
              <div className="p-3 bg-blue-600 rounded-full shadow-lg">
                <FaQuoteLeft className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={Customer1}
                alt="Julio Diaz"
                className="w-16 h-16 rounded-full border-4 border-blue-100 object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">Julio Diaz</h3>
                <p className="text-gray-600">Pro Surfer | California</p>
                <div className="flex mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              "The performance of these boards is unmatched! I've ridden waves all over
              the world, but the precision and responsiveness of these boards make
              them my absolute favorite. Customer service was top-notch too!"
            </p>
            <div className="mt-6 flex justify-end">
              <FaQuoteRight className="h-6 w-6 text-gray-300" />
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="relative bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div className="absolute top-0 left-8 -translate-y-1/2">
              <div className="p-3 bg-blue-600 rounded-full shadow-lg">
                <FaQuoteLeft className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="flex items-center mb-6">
              <img
                src={Customer2}
                alt="Lisa Wright"
                className="w-16 h-16 rounded-full border-4 border-blue-100 object-cover"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold text-gray-900">Lisa Wright</h3>
                <p className="text-gray-600">Surf Instructor | Hawaii</p>
                <div className="flex mt-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              "As a surf instructor, I recommend these boards to all my students. The
              perfect balance of stability and maneuverability helps learners progress
              faster. Plus, the eco-friendly materials align with our ocean
              conservation values!"
            </p>
            <div className="mt-6 flex justify-end">
              <FaQuoteRight className="h-6 w-6 text-gray-300" />
            </div>
          </div>
        </div>

        {/* Additional Reviews */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-bold">U{item}</span>
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold">User {item}</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FiStar key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                "Absolutely love my new board! The quality exceeded my expectations
                and the shipping was faster than promised. Will definitely purchase
                again!"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Comment;