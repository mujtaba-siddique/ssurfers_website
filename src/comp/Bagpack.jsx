import React from "react";
import Blog9 from "../assets/blog9.jpg";
import slider1 from "../assets/bag1.jpg";
import slider2 from "../assets/bag2.jpg";
import blog2 from "../assets/bag3.jpg";
import Bag from "../assets/bag5.jpg";
import Crop from "../assets/bag4.jpg";
import cover from "../assets/cover1.webp"


function Bagpack() {
  const img = [
    {
      id: 1,
      image: Bag,
      title: "Backpack 1",
      date: "17 August 2024",
      link: "#",
    },
    {
      id: 2,
      image: slider1,
      title: "Slider 1",
      date: "17 August 2024",
      link: "#",
    },
    {
      id: 3,
      image: slider2,
      title: "Slider 2",
      date: "17 August 2024",
      link: "#",
    },
    {
      id: 4,
      image: blog2,
      title: "Slider 3",
      date: "17 August 2024",
      link: "#",
    },
    {
      id: 5,
      image: Crop,
      title: "Slider 4",
      date: "17 August 2024",
      link: "#",
    },
    {
      id: 6,
      image: slider1,
      title: "Slider 5",
      date: "17 August 2024",
      link: "#",
    },
  ];

  return (
    <>
      <div>
        <img
          src={cover}
          alt="Blog Header"
          className="w-full sm:h-[300px] object-cover"
        />
      </div>

      <h1 className="text-4xl text-center font-bold font-roboto mt-6">Bages</h1>

      <p className="mt-5 font-roboto text-gray-500 sm:mx-64 mx-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ad minus
        eos modi fugit quibusdam sit quae, facilis voluptas, velit accusamus
        suscipit officia. Illum sunt provident quisquam libero. Natus, ipsam.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        itaque consectetur, vero ratione perferendis nihil harum aliquid facere
        autem, quidem, labore veniam! Rerum tempora quas repellendus velit saepe
        quasi nobis.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-16 mt-6 sm:mt-16 sm:mx-64 mx-32">
        {img.map((e) => (
          <div
            key={e.id}
            className="p-6 bg-white rounded-lg shadow-lg transition-all duration-500 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            <img
              src={e.image}
              alt={e.title}
              className="w-60 h-60 object-cover transition-transform duration-500 ease-in-out hover:scale-110 hover:opacity-90 hover:shadow-xl hover:rounded-2xl rounded-md"loading="lazy"
            />
            <h2 className="text-xl text-center mt-6">{e.title}</h2>
            <p className="text-center text-gray-500">{e.date}</p>
            <div className="flex justify-center mt-4">
              <a
                href={e.link}
                className="flex items-center text-blue-500 hover:text-blue-700"
              >
                <button class="bg-black text-white py-2 px-8 rounded-lg shadow-md transition-all duration-300 hover:bg-gray-800 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer">
                  Buy
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Bagpack;
