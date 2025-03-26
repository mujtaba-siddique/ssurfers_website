import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Blog from "../assets/blog.webp";
import { FaWater, FaRegCompass, FaChartLine, FaLifeRing, FaTimes } from "react-icons/fa";

const LearnMoreAboutSurfing = () => {
  const [showResourcesModal, setShowResourcesModal] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [resourceType, setResourceType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    date: "",
    skillLevel: "beginner"
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Please enter a valid email";
    if (!formData.date) newErrors.date = "Please select a date";
    if (new Date(formData.date) < new Date()) newErrors.date = "Date must be in the future";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        console.log("Form submitted:", formData);
        setIsSubmitting(false);
        setShowBookingModal(false);
        alert(`Booking confirmed! We'll contact you at ${formData.email}`);
        setFormData({
          name: "",
          email: "",
          date: "",
          skillLevel: "beginner"
        });
      }, 1500);
    }
  };

  const ResourceModalContent = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-blue-600">{resourceType}</h3>
      {resourceType === "Beginner's Guide" ? (
        <>
          <p className="text-gray-700">Start your surfing journey with these essential resources:</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>Basic paddling techniques and board positioning</li>
            <li>Proper stance and balance fundamentals</li>
            <li>Wave selection for beginners</li>
            <li>Essential safety equipment checklist</li>
            <li>Understanding surf etiquette</li>
          </ul>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-700 mb-2">Recommended First Steps:</h4>
            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              <li>Take a lesson with a certified instructor</li>
              <li>Practice popping up on land first</li>
              <li>Start in small, gentle waves</li>
            </ol>
          </div>
        </>
      ) : (
        <>
          <p className="text-gray-700">Essential safety information every surfer should know:</p>
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>How to identify and escape rip currents</li>
            <li>Right of way rules and surf etiquette</li>
            <li>Emergency procedures and first aid</li>
            <li>Weather and tide awareness</li>
            <li>Equipment safety checks</li>
          </ul>
          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-semibold text-red-700 mb-2">Critical Safety Tips:</h4>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Never surf alone</li>
              <li>Know your limits</li>
              <li>Respect local rules and regulations</li>
            </ul>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Resources Modal */}
      {showResourcesModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowResourcesModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-2xl w-full relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowResourcesModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              aria-label="Close modal"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <ResourceModalContent />
          </div>
        </div>
      )}

      {/* Booking Modal */}
      {showBookingModal && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setShowBookingModal(false)}
        >
          <div 
            className="bg-white rounded-2xl p-8 max-w-md w-full relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowBookingModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition"
              aria-label="Close modal"
            >
              <FaTimes className="w-6 h-6" />
            </button>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Book Your Session</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="date" className="block text-gray-700 mb-2 font-medium">Preferred Date</label>
                <input
                  id="date"
                  type="date"
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white ${
                    errors.date ? "border-red-500" : "border-gray-300"
                  }`}
                  value={formData.date}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setFormData({...formData, date: e.target.value})}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>
              
              <div>
                <label htmlFor="skillLevel" className="block text-gray-700 mb-2 font-medium">Skill Level</label>
                <select
                  id="skillLevel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition bg-white"
                  value={formData.skillLevel}
                  onChange={(e) => setFormData({...formData, skillLevel: e.target.value})}
                >
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-6 rounded-lg font-bold transition ${
                  isSubmitting ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                } text-white`}
              >
                {isSubmitting ? "Processing..." : "Confirm Booking"}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative h-96">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
        <img 
          src={Blog} 
          alt="Surfer catching wave" 
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-serif">
            Surf Science Masterclass
            <span className="block w-32 h-1.5 bg-amber-400 mx-auto mt-6 rounded-full" />
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Unlock the secrets of wave mastery with professional techniques
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Primary Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Core Principles Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <FaWater className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Ocean Dynamics Essentials
                </h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Master the fundamental forces that create perfect surfing conditions through our comprehensive modules:
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-blue-50 rounded-xl hover:bg-blue-100 transition">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaChartLine className="text-blue-600" />
                      Wave Formation
                    </h3>
                    <p className="text-gray-600">
                      Understand swell patterns, wind effects, and sea floor topography
                    </p>
                  </div>
                  <div className="p-6 bg-amber-50 rounded-xl hover:bg-amber-100 transition">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <FaRegCompass className="text-amber-600" />
                      Tide Calculations
                    </h3>
                    <p className="text-gray-600">
                      Master tidal coefficients and lunar phase impacts
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Techniques Section */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-amber-100 rounded-xl">
                  <FaLifeRing className="w-8 h-8 text-amber-600" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Advanced Maneuvers
                </h2>
              </div>

              <div className="grid gap-6">
                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <h3 className="text-xl font-semibold mb-2">Bottom Turns</h3>
                  <p className="text-gray-600">
                    Perfect your foundation maneuver for speed generation
                  </p>
                </div>
                <div className="p-6 border-l-4 border-amber-500 bg-amber-50 rounded-lg hover:bg-amber-100 transition">
                  <h3 className="text-xl font-semibold mb-2">Cutbacks</h3>
                  <p className="text-gray-600">
                    Master directional changes and wave energy management
                  </p>
                </div>
                <div className="p-6 border-l-4 border-blue-500 bg-blue-50 rounded-lg hover:bg-blue-100 transition">
                  <h3 className="text-xl font-semibold mb-2">Aerials</h3>
                  <p className="text-gray-600">
                    Progressive techniques for advanced wave riding
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div className="bg-blue-600 text-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6">Surf Resources</h3>
              <div className="space-y-4">
                <button 
                  onClick={() => {
                    setResourceType("Beginner's Guide");
                    setShowResourcesModal(true);
                  }}
                  className="w-full flex items-center justify-between p-4 bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                >
                  <span>Beginner's Guide</span>
                  <FaRegCompass className="w-5 h-5" />
                </button>
                <button 
                  onClick={() => {
                    setResourceType("Safety Protocols");
                    setShowResourcesModal(true);
                  }}
                  className="w-full flex items-center justify-between p-4 bg-blue-700 rounded-lg hover:bg-blue-800 transition"
                >
                  <span>Safety Protocols</span>
                  <FaWater className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Expert Tips */}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold mb-6">Pro Tips</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold">01</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Wave Selection</h4>
                    <p className="text-gray-600 text-sm">
                      Identify the "green room" for optimal takeoff
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center">
                    <span className="text-amber-600 font-bold">02</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Equipment Care</h4>
                    <p className="text-gray-600 text-sm">
                      Saltwater maintenance routines
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-center hover:shadow-2xl transition-shadow">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ride?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our certified instructors for personalized coaching and take your surfing to the next level
          </p>
          <button 
            onClick={() => setShowBookingModal(true)}
            className="bg-amber-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-300 transition"
          >
            Book Your Session Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMoreAboutSurfing;