import React from "react";
import { useNavigate } from "react-router-dom";
import Blog9 from "../assets/blog9.jpg";
import slider1 from "../assets/bag1.jpg";
import slider2 from "../assets/bag2.jpg";
import blog2 from "../assets/bag3.jpg";
import Bag from "../assets/bag5.jpg";
import Crop from "../assets/bag4.jpg";
import cover from "../assets/cover1.webp";

function Bagpack() {
  const navigate = useNavigate();

  const img = [
    {
      id: 1,
      image: Bag,
      title: "Backpack 1",
      date: "17 August 2024",
      link: "#",
      price: 1000,
    },
    {
      id: 2,
      image: slider1,
      title: "Slider 1",
      date: "17 August 2024",
      link: "#",
      price: 1200,
    },
    {
      id: 3,
      image: slider2,
      title: "Slider 2",
      date: "17 August 2024",
      link: "#",
      price: 1400,
    },
    {
      id: 4,
      image: blog2,
      title: "Slider 3",
      date: "17 August 2024",
      link: "#",
      price: 1500,
    },
    {
      id: 5,
      image: Crop,
      title: "Slider 4",
      date: "17 August 2024",
      link: "#",
      price: 1600,
    },
    {
      id: 6,
      image: slider1,
      title: "Slider 5",
      date: "17 August 2024",
      link: "#",
      price: 1700,
    },
  ];

  const handleAddToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart");
  };

  return (
    // 👇 Wrapper div with white background
    <div className="bg-white pb-16">
      <div>
        <img
          src={cover}
          alt="Blog Header"
          className="w-full sm:h-[300px] object-cover"
        />
      </div>

      <h1 className="text-4xl text-center font-bold font-roboto mt-6">Bags</h1>

      <p className="mt-5 font-roboto text-gray-500 sm:mx-64 mx-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad minus
        eos modi fugit quibusdam sit quae, facilis voluptas, velit accusamus
        suscipit officia. Illum sunt provident quisquam libero. Natus, ipsam.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12 mt-6 sm:mt-16 sm:mx-16 mx-8">
        {img.map((e) => (
          <div
            key={e.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <img
              src={e.image}
              alt={e.title}
              className="w-full h-72 object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90 hover:shadow-xl"
              loading="lazy"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-center">{e.title}</h2>
              <p className="text-center text-gray-500">{e.date}</p>
              <div className="flex justify-between items-center mt-4">
                <span className="text-xl font-semibold text-gray-800">
                  ₹{e.price}
                </span>
                <button
                  onClick={() => handleAddToCart(e)}
                  className="bg-black text-white py-2 px-6 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bagpack;
