import React, { useState, useEffect } from "react";
import { FaArrowRightLong, FaArrowDown } from "react-icons/fa6";
import { FaTimes, FaRegClock, FaChartLine } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Tilt } from "react-tilt";

// Image imports
import Blog9 from "../assets/blog9.jpg";
import slider from "../assets/slider_01.jpg";
import slider1 from "../assets/slider_02.jpg";
import slider2 from "../assets/slider_03.jpg";
import blog2 from "../assets/blog_01.webp";
import Bag from "../assets/bag.webp";
import Crop from "../assets/product_surfboard_1.webp";

function Blog() {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // Complete blog data with 7 entries
  const originalBlogs = [
    {
      id: 1,
      image: Bag,
      title: "Quantum Surfboard Design",
      date: "17 August 2024",
      stats: "Advanced",
      description: "Explore the fusion of quantum physics and surfboard engineering. Discover how nanomaterial innovations are revolutionizing wave interaction.",
      fullContent: `
        <h3 class="text-xl font-semibold mb-4 text-gray-900">The Quantum Revolution in Surfing</h3>
        <p class="mb-4 text-gray-600 leading-relaxed">Recent breakthroughs in quantum material science have enabled the development of surfboards that can adapt their molecular structure in real-time to match wave conditions. These boards utilize graphene-based nanomaterials that change their flexibility based on electrical currents.</p>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Key Features</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
          <li>Self-healing polymer coatings that repair minor dings automatically</li>
          <li>Embedded quantum sensors that predict wave patterns 3 seconds before they form</li>
          <li>Variable density cores that adjust based on rider weight distribution</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Performance Metrics</h3>
        <p class="text-gray-600 leading-relaxed">Early testing shows a 27% improvement in wave capture efficiency and 15% better maneuverability compared to traditional boards. Professional surfers report the sensation of "riding a living wave" rather than a static board.</p>
      `,
      link: "#"
    },
    {
      id: 2,
      image: Crop,
      title: "Sustainable Surfing Materials",
      date: "10 August 2024",
      stats: "Intermediate",
      description: "Discover how eco-friendly materials are transforming the surfing industry. Learn about the latest innovations in sustainable board manufacturing.",
      fullContent: `
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Eco-Friendly Surfing Innovations</h3>
        <p class="mb-4 text-gray-600 leading-relaxed">The surfing industry is undergoing a green revolution with new materials that reduce environmental impact. From plant-based resins to recycled foam cores, we explore the latest sustainable technologies.</p>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Environmental Impact</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
          <li>Traditional fiberglass boards contain harmful chemicals</li>
          <li>New bio-based materials reduce carbon footprint by 45%</li>
          <li>Recyclable boards are becoming industry standard</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Performance Comparison</h3>
        <p class="text-gray-600 leading-relaxed">Tests show sustainable boards maintain performance while being environmentally responsible. Professional surfers report no noticeable difference in wave-catching ability or maneuverability.</p>
      `,
      link: "#"
    },
    {
      id: 3,
      image: blog2,
      title: "Future of Surfboard Technology",
      date: "3 August 2024",
      stats: "Beginner",
      description: "Get a glimpse into what's next for surfboard technology. From smart boards to AI-powered design, we explore upcoming innovations.",
      fullContent: `
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Smart Surfboard Technology</h3>
        <p class="mb-4 text-gray-600 leading-relaxed">Modern surfboards are becoming smarter with embedded sensors that track performance metrics. We explore how this technology is helping surfers improve their skills.</p>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">AI Design Systems</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
          <li>AI algorithms optimize board shape for specific wave conditions</li>
          <li>Machine learning predicts optimal performance characteristics</li>
          <li>Custom board designs generated in minutes</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Connectivity Features</h3>
        <p class="text-gray-600 leading-relaxed">Bluetooth-enabled boards allow surfers to track sessions, share data, and connect with communities. Future models may include real-time wave condition feedback.</p>
      `,
      link: "#"
    },
    {
      id: 4,
      image: slider,
      title: "Wave Prediction Algorithms",
      date: "27 July 2024",
      stats: "Advanced",
      description: "How machine learning is being used to predict perfect waves with 92% accuracy.",
      fullContent: `
        <h3 class="text-xl font-semibold mb-4 text-gray-900">The Science of Wave Prediction</h3>
        <p class="mb-4 text-gray-600 leading-relaxed">New algorithms combine satellite data, ocean currents, and weather patterns to predict wave formation with unprecedented accuracy. Surfers can now know when and where the best waves will form up to 48 hours in advance.</p>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Technology Behind the Predictions</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
          <li>Neural networks trained on decades of wave data</li>
          <li>Real-time buoy sensor integration</li>
          <li>3D ocean current modeling</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Practical Applications</h3>
        <p class="text-gray-600 leading-relaxed">Surf schools and competitions are already using this technology to schedule sessions during optimal conditions. The system can even suggest the best board type for predicted wave characteristics.</p>
      `,
      link: "#"
    },
    {
      id: 5,
      image: slider1,
      title: "Virtual Reality Surf Training",
      date: "20 July 2024",
      stats: "Intermediate",
      description: "How VR is revolutionizing surf training for inland enthusiasts and professionals alike.",
      fullContent: `
        <h3 class="text-xl font-semibold mb-4 text-gray-900">The VR Surfing Revolution</h3>
        <p class="mb-4 text-gray-600 leading-relaxed">Virtual reality systems now provide realistic wave simulations that help surfers train without needing ocean access. These systems use motion platforms and haptic feedback to create authentic surfing experiences.</p>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Key Features</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
          <li>4K resolution wave simulations</li>
          <li>Motion platforms with 6 degrees of freedom</li>
          <li>Real-time coaching feedback</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Training Benefits</h3>
        <p class="text-gray-600 leading-relaxed">Studies show VR training can improve wave judgment by 40% and technique by 35%. Professional surfers use it to practice specific maneuvers in controlled environments before attempting them in the ocean.</p>
      `,
      link: "#"
    },
    {
      id: 6,
      image: slider2,
      title: "Hydrodynamic Fin Designs",
      date: "13 July 2024",
      stats: "Advanced",
      description: "The latest breakthroughs in fin technology that are changing board performance.",
      fullContent: `
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Fin Technology Evolution</h3>
        <p class="mb-4 text-gray-600 leading-relaxed">Modern computational fluid dynamics has enabled fin designs that were impossible just five years ago. These new fins provide better control, speed, and maneuverability in all wave conditions.</p>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Innovative Designs</h3>
        <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
          <li>Vortex-generating edges for better hold</li>
          <li>Flex zones that adapt to wave power</li>
          <li>Modular systems for quick changes</li>
        </ul>
        
        <h3 class="text-xl font-semibold mb-4 text-gray-900">Performance Impact</h3>
        <p class="text-gray-600 leading-relaxed">The new generation of fins can improve speed by up to 22% in testing conditions while providing more consistent performance across different wave types and sizes.</p>
      `,
      link: "#"
    },
    // {
    //   id: 7,
    //   image: Blog9,
    //   title: "Surfing Biomechanics",
    //   date: "6 July 2024",
    //   stats: "Intermediate",
    //   description: "How understanding body mechanics can help surfers improve performance and prevent injuries.",
    //   fullContent: `
    //     <h3 class="text-xl font-semibold mb-4 text-gray-900">The Physics of Surfing</h3>
    //     <p class="mb-4 text-gray-600 leading-relaxed">Advanced motion capture technology reveals the precise biomechanics of expert surfers. This data helps identify the most efficient movements and common injury patterns.</p>
        
    //     <h3 class="text-xl font-semibold mb-4 text-gray-900">Key Findings</h3>
    //     <ul class="list-disc pl-6 mb-4 space-y-3 text-gray-600">
    //       <li>Optimal stance angles for different maneuvers</li>
    //       <li>Weight distribution patterns of elite surfers</li>
    //       <li>Common technical flaws in amateur surfers</li>
    //     </ul>
        
    //     <h3 class="text-xl font-semibold mb-4 text-gray-900">Training Applications</h3>
    //     <p class="text-gray-600 leading-relaxed">Coaches now use this data to create personalized training programs that improve technique while reducing injury risk. Specialized exercises help surfers develop the specific muscle groups used most in their preferred style.</p>
    //   `,
    //   link: "#"
    // }
  ];

  // Load blogs with lastOpened from localStorage
  useEffect(() => {
    const savedLastOpened = localStorage.getItem('blogLastOpened');
    const lastOpenedMap = savedLastOpened ? JSON.parse(savedLastOpened) : {};

    const initializedBlogs = originalBlogs.map(blog => ({
      ...blog,
      lastOpened: lastOpenedMap[blog.id] ? new Date(lastOpenedMap[blog.id]) : null
    }));

    setBlogs(initializedBlogs);
  }, []);

  // Lock body scroll when modal opens
  useEffect(() => {
    if (showModal) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [showModal]);

  const openModal = (blog) => {
    const now = new Date();
    const updatedBlogs = blogs.map(b => 
      b.id === blog.id ? { ...b, lastOpened: now } : b
    );
    
    // Update localStorage
    const lastOpenedMap = {};
    updatedBlogs.forEach(b => {
      if (b.id === blog.id) {
        lastOpenedMap[b.id] = now.toISOString();
      } else if (b.lastOpened) {
        lastOpenedMap[b.id] = b.lastOpened.toISOString();
      }
    });
    localStorage.setItem('blogLastOpened', JSON.stringify(lastOpenedMap));

    setBlogs(updatedBlogs);
    setSelectedBlog(blog);
    setShowModal(true);
    setExpanded(false);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
    setExpanded(false);
  };

  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const calculateMinutesSince = (lastOpened) => {
    if (!lastOpened) return 'New';
    const now = new Date();
    const diff = now - lastOpened;
    const minutes = Math.floor(diff / (1000 * 60));
    return minutes === 0 ? 'Just now' : `${minutes} min ago`;
  };

  const defaultTiltOptions = {
    reverse: true,
    max: 8,
    perspective: 1000,
    scale: 1.02,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="min-h-screen bg-white pb-16">
      {/* Header Section */}
      <motion.div 
        className="relative h-[50vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={Blog9}
          alt="Blog Header"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent flex items-end pb-16 justify-center">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl text-center font-bold text-gray-900 mb-8 px-4"
          >
            Next Wave Cybermetrics
          </motion.h1>
        </div>
      </motion.div>

      {/* Blog Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Tilt options={defaultTiltOptions} key={blog.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: blog.id * 0.1 }}
                className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-blue-300"
                onClick={() => openModal(blog)}
              >
                <div className="overflow-hidden h-60 bg-gray-100 relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <span className="flex items-center px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium">
                      <FaRegClock className="mr-1" /> {calculateMinutesSince(blog.lastOpened)}
                    </span>
                    <span className="flex items-center px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-xs font-medium">
                      <FaChartLine className="mr-1" /> {blog.stats}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  <div className="flex items-center justify-between text-gray-600">
                    <span className="text-sm">{blog.date}</span>
                    <div className="flex items-center text-blue-600 hover:text-blue-500">
                      <span className="mr-2 text-sm font-medium">Read More</span>
                      <FaArrowRightLong className="transition-transform group-hover:translate-x-1 text-sm" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Tilt>
          ))}
        </div>
      </div>

      {/* Professional Modal */}
     {/* Professional Modal */}
<AnimatePresence>
  {showModal && selectedBlog && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl max-w-5xl w-full overflow-hidden relative shadow-2xl flex flex-col max-h-[90vh] h-[600px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={closeModal}
          className="absolute right-6 top-6 text-gray-500 hover:text-gray-700 z-50 p-2 rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-xl" />
        </button>
        
        <div className="flex flex-1 overflow-hidden">
          {/* Left Image Column */}
          <div className="flex-1 relative bg-gray-100 min-w-[50%]">
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Content Column */}
          <div className="flex-1 flex flex-col overflow-hidden min-w-[50%]">
            <div className="p-8 overflow-y-auto space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-900">
                  {selectedBlog.title}
                </h2>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <span className="flex items-center">
                    <FaRegClock className="mr-2" /> {selectedBlog.date}
                  </span>
                  <span className="flex items-center">
                    <FaChartLine className="mr-2" /> {selectedBlog.stats}
                  </span>
                </div>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                {selectedBlog.description}
              </p>

              {/* Expandable Content */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-100 pt-6"
                  >
                    <div 
                      className="prose max-w-none text-gray-600"
                      dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer Buttons */}
            <div className="p-8 pt-0 mt-auto">
              <div className="flex gap-4 justify-end">
                <button
                  onClick={toggleExpand}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-all flex items-center gap-2 group text-sm font-medium shadow-sm hover:shadow-md"
                >
                  <span>{expanded ? 'Show Less' : 'Read Full Article'}</span>
                  <motion.span
                    animate={{ rotate: expanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaArrowDown className="transition-transform group-hover:translate-y-1" />
                  </motion.span>
                </button>
                <button
                  onClick={closeModal}
                  className="text-gray-600 hover:text-gray-800 px-6 py-3 rounded-lg transition-all text-sm font-medium"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>
    </div>
  );
}

export default Blog;