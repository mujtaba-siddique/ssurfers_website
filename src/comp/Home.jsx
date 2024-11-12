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
      heading: "Special Offer: 50% Off",
      description: "Hurry up! The offer is valid for a limited time only.",
      buttonText: "Shop Now",
      target: "/surfboards",
    },
    {
      image: Slider_2,
      heading: "Exclusive 50% Discount",
      description: "Get amazing deals on your favorite items. Don't miss out!",
      buttonText: "Browse Products",
      target: "/products",
    },
    {
      image: Slider_3,
      heading: "Seasonal Sale - 50% Off",
      description:
        "Grab the best products at half price. Shop now before it's too late!",
      buttonText: "Shop Sale",
      target: "/products",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
        setIsTransitioning(false);
      }, 600);
    }, 8000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <>
      <div className="relative w-full h-[600px] sm:h-[700px] overflow-hidden z-10">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center flex items-center justify-center
                            transition-all duration-500 ease-in-out
                            ${
                              index === currentSlide
                                ? "opacity-100 translate-x-0 z-10"
                                : isTransitioning &&
                                  index === (currentSlide + 1) % slides.length
                                ? "opacity-100 translate-x-full z-0"
                                : "opacity-0 -translate-x-full z-0"
                            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="text-center text-white bg-black bg-opacity-50 px-6 py-4 rounded-md max-w-md mx-auto">
              <h1 className="text-3xl font-bold mb-4">{slide.heading}</h1>
              <p className="text-lg mb-4">{slide.description}</p>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
                onClick={() => navigate(slide.target)}
              >
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      <Products />
      <ReadMore />
      <Comment />
    </>
  );
};

export default Slider;
