import React from "react";
import Products from "./ProductsList";
import { GiWaveSurfer } from "react-icons/gi";
import { MdOutlineWaterDrop, MdOutlineConstruction } from "react-icons/md";
import { RiRulerLine } from "react-icons/ri";
import { TbBeach } from "react-icons/tb";

function Surfboards() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <GiWaveSurfer className="h-16 w-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Surfboards for Every Wave
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Handcrafted performance boards built with cutting-edge technology
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Board Types */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <TbBeach className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Board Types</h2>
            </div>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Shortboards (5'6" - 6'8") - High performance wave riding
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Funboards (6'8" - 7'6") - Ideal for progressing surfers
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                Longboards (8'0" - 9'6") - Classic nose riding experience
              </li>
            </ul>
          </div>

          {/* Construction */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <div className="flex items-center mb-6">
              <MdOutlineConstruction className="h-8 w-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Construction</h2>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Core Material</h3>
                <p className="text-sm">EPS Foam with Carbon Fiber Reinforcement</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Finish</h3>
                <p className="text-sm">UV-resistant Epoxy Resin Coating</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Weight</h3>
                <p className="text-sm">5-8kg (Varies by size)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Flex Pattern</h3>
                <p className="text-sm">Progressive Flex Tail Technology</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sizing Guide */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <RiRulerLine className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Sizing Guide</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-4 py-3 text-left">Rider Weight</th>
                  <th className="px-4 py-3 text-left">Skill Level</th>
                  <th className="px-4 py-3 text-left">Recommended Size</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3">50-70 kg</td>
                  <td className="px-4 py-3">Intermediate</td>
                  <td className="px-4 py-3 font-semibold">6'0" - 6'6"</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="px-4 py-3">70-90 kg</td>
                  <td className="px-4 py-3">Advanced</td>
                  <td className="px-4 py-3 font-semibold">6'8" - 7'2"</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">90+ kg</td>
                  <td className="px-4 py-3">Professional</td>
                  <td className="px-4 py-3 font-semibold">7'4" - 8'0"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Care Instructions */}
        <div className="mt-12 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
          <div className="flex items-center mb-6">
            <MdOutlineWaterDrop className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Care Instructions</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-semibold mb-2">Rinse After Use</h3>
              <p className="text-sm">Fresh water rinse to remove salt/sand</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-semibold mb-2">Storage</h3>
              <p className="text-sm">Keep in cool, dry place away from direct sunlight</p>
            </div>
            <div className="p-4 border-l-4 border-blue-600 bg-blue-50">
              <h3 className="font-semibold mb-2">Repairs</h3>
              <p className="text-sm">Professional ding repair recommended</p>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">
              Our Premium Collection
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore hand-shaped boards crafted by master shapers using 
              sustainable materials and cutting-edge technology
            </p>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default Surfboards;