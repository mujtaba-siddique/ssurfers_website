import React from "react";
import { Link } from "react-router-dom";

// Static image imports (सुनिश्चित करें कि ये पथ सही हैं)
import Product1 from "../assets/product_surfboard_1.webp";
import Product2 from "../assets/product_surfboard_2.webp";
import Product3 from "../assets/product_surfboard_3.webp";
import Product4 from "../assets/product_surfboard_4.webp";
import Product5 from "../assets/product_surfboard_5.webp";
import Product6 from "../assets/product_surfboard_7.webp";
import Product7 from "../assets/product_surfboard_8.webp";
import Product8 from "../assets/product_surfboard_2.webp";

function ProductsList() {
  const products = [
    {
      id: 1,
      image: Product1,
      price: 45000,
      name: "HydroGlide Pro",
      type: "Performance Shortboard",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      image: Product2,
      price: 38000,
      name: "WaveCarver XR",
      type: "All-Round Funboard",
      rating: 4.5
    },
    {
      id: 3,
      image: Product3,
      price: 36000,
      name: "EcoRider",
      type: "Eco-Friendly Board",
      rating: 4.7
    },
    {
      id: 4,
      image: Product4,
      price: 30000,
      name: "Beginner's Bliss",
      type: "Foam Board",
      rating: 4.2
    },
    {
      id: 5,
      image: Product5,
      price: 40000,
      name: "ProTube Special",
      type: "Tubular Performance",
      rating: 4.9
    },
    {
      id: 6,
      image: Product6,
      price: 41000,
      name: "Carbon Fiber X",
      type: "Competition Board",
      rating: 4.8
    },
    {
      id: 7,
      image: Product7,
      price: 50000,
      name: "The Dominator",
      type: "Big Wave Gun",
      rating: 5.0,
      featured: true
    },
    {
      id: 8,
      image: Product8,
      price: 47000,
      name: "Classic Logger",
      type: "Traditional Longboard",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Premium Surfboards
            </span>
          </h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Handcrafted by master shapers using the finest materials
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
                product.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="aspect-square overflow-hidden rounded-t-2xl relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                {product.featured && (
                  <div className="absolute top-4 left-4 bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
                    🔥 Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.type}</p>
                  </div>
                  <div className="flex items-center bg-blue-100 px-2 py-1 rounded">
                    <span className="text-blue-600 text-sm font-bold">⭐ {product.rating}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    <p className="text-sm text-gray-500">
                      or ₹{Math.round(product.price / 12).toLocaleString("en-IN")}/mo
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <Link
                      to={`/product/${product.id}`}
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center"
                    >
                      <span>View</span>
                    </Link>
                    {/* <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                      Add to Cart
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
}

export default ProductsList;