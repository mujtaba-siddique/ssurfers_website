import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Slider_1 from "../assets/slider_01.jpg";
import Slider_2 from "../assets/slider_02.jpg";
import Slider_3 from "../assets/slider_03.jpg";
import Products from "./ProductsList";
import ReadMore from "./ReadMore";
import Comment from "./Comment";

const Slider = () => {
  const navigate = useNavigate();
  const slides = [
    {
      image: Slider_1,
      heading: "Summer Surf Sale!",
      highlight: "50% OFF",
      description: "Hurry up! Limited time offer on premium surfboards",
      buttonText: "Shop Now",
      target: "/surfboards",
    },
    {
      image: Slider_2,
      heading: "Exclusive Collection",
      highlight: "Half Price",
      description: "Premium watersports gear at unbelievable prices",
      buttonText: "Explore Deals",
      target: "/products",
    },
    {
      image: Slider_3,
      heading: "Final Clearance",
      highlight: "50% OFF",
      description: "Last chance to grab your favorite gear",
      buttonText: "Claim Offer",
      target: "/products",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const deltaX = touchStartX - touchEndX;
    if (Math.abs(deltaX) > 50) {
      setCurrentSlide(prev => (deltaX > 0 
        ? (prev + 1) % slides.length 
        : (prev - 1 + slides.length) % slides.length
      ));
    }
  };

  return (
    <>
      <div className="relative w-full h-[70vh] overflow-hidden group"
           onTouchStart={handleTouchStart}
           onTouchEnd={handleTouchEnd}>
        
        {/* Slides Container */}
        <div className="flex h-full transition-transform duration-500 ease-out"
             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full h-full flex-shrink-0">
              <img src={slide.image} 
                   alt="" 
                   className="w-full h-full object-cover object-center"
                   loading={index === 0 ? "eager" : "lazy"} />
              
              {/* Overlay Content */}
              <div className="absolute inset-0 bg-black/30 flex items-center">
                <div className="container mx-auto px-4 text-center lg:text-left">
                  
                  {/* 👇 Chhota kiya gaya box: max-w-md & p-6 */}
                  <div className="max-w-md space-y-6 backdrop-blur-sm bg-white/5 p-6 rounded-2xl shadow-xl animate-fade-in">
                    <div className="inline-flex flex-col items-center">
                      <span className="text-sm font-semibold text-blue-400 mb-2">
                        LIMITED TIME OFFER
                      </span>
                      <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        {slide.heading}
                        <span className="block text-5xl md:text-7xl text-yellow-400 mt-2 animate-pulse">
                          {slide.highlight}
                        </span>
                      </h1>
                    </div>
                    <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto">
                      {slide.description}
                    </p>
                    <button onClick={() => navigate(slide.target)}
                            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-lg hover:shadow-xl">
                      {slide.buttonText} →
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button onClick={() => setCurrentSlide(p => (p - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        
        <button onClick={() => setCurrentSlide(p => (p + 1) % slides.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors opacity-0 group-hover:opacity-100">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>

        {/* Progress Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
          {slides.map((_, i) => (
            <button key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${i === currentSlide ? 'bg-white scale-125' : 'bg-white/50 hover:bg-white/70'}`}
                    aria-label={`Slide ${i + 1}`}/>
          ))}
        </div>

        {/* Sales Badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-full animate-bounce">
          ⚡ Limited Stock!
        </div>
      </div>

      <Products />
      <ReadMore />
      <Comment />
    </>
  );
};

export default Slider;
