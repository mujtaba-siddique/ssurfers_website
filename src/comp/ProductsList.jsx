// import React from "react";
// import { Link } from "react-router-dom";
// import { FiTruck, FiClock, FiAlertTriangle } from "react-icons/fi";

// // Static image imports (make sure these paths are correct)
// import Product1 from "../assets/product_surfboard_1.webp";
// import Product2 from "../assets/product_surfboard_2.webp";
// import Product3 from "../assets/product_surfboard_3.webp";
// import Product4 from "../assets/product_surfboard_4.webp";
// import Product5 from "../assets/product_surfboard_5.webp";
// import Product6 from "../assets/product_surfboard_7.webp";
// import Product7 from "../assets/product_surfboard_8.webp";
// import Product8 from "../assets/product_surfboard_2.webp";

// function ProductsList() {
//   const products = [
//     {
//       id: 1,
//       image: Product1,
//       price: 45000,
//       name: "HydroGlide Pro",
//       type: "Performance Shortboard",
//       rating: 4.8,
//       featured: true,
//       freeDelivery: true,
//       limitedStock: false
//     },
//     {
//       id: 2,
//       image: Product2,
//       price: 38000,
//       name: "WaveCarver XR",
//       type: "All-Round Funboard",
//       rating: 4.5,
//       freeDelivery: false,
//       limitedStock: true,
//       deliveryFee: 500
//     },
//     {
//       id: 3,
//       image: Product3,
//       price: 36000,
//       name: "EcoRider",
//       type: "Eco-Friendly Board",
//       rating: 4.7,
//       freeDelivery: true,
//       limitedStock: false
//     },
//     {
//       id: 4,
//       image: Product4,
//       price: 30000,
//       name: "Beginner's Bliss",
//       type: "Foam Board",
//       rating: 4.2,
//       freeDelivery: false,
//       limitedStock: true,
//       deliveryFee: 300,
//       lastFewItems: 3
//     },
//     {
//       id: 5,
//       image: Product5,
//       price: 40000,
//       name: "ProTube Special",
//       type: "Tubular Performance",
//       rating: 4.9,
//       freeDelivery: true,
//       limitedStock: false
//     },
//     {
//       id: 6,
//       image: Product6,
//       price: 41000,
//       name: "Carbon Fiber X",
//       type: "Competition Board",
//       rating: 4.8,
//       freeDelivery: false,
//       limitedStock: false,
//       deliveryFee: 700
//     },
//     {
//       id: 7,
//       image: Product7,
//       price: 50000,
//       name: "The Dominator",
//       type: "Big Wave Gun",
//       rating: 5.0,
//       featured: true,
//       freeDelivery: true,
//       limitedStock: true,
//       lastFewItems: 2
//     },
//     {
//       id: 8,
//       image: Product8,
//       price: 47000,
//       name: "Classic Logger",
//       type: "Traditional Longboard",
//       rating: 4.6,
//       freeDelivery: false,
//       limitedStock: true,
//       deliveryFee: 600
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-20">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">
//             <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
//               Premium Surfboards
//             </span>
//           </h2>
//           <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
//             Handcrafted by master shapers using the finest materials
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               className={`group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 ${
//                 product.featured ? "md:col-span-2 lg:col-span-1" : ""
//               }`}
//             >
//               <div className="aspect-square overflow-hidden rounded-t-2xl relative">
//                 <img
//                   src={product.image}
//                   alt={product.name}
//                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
//                   loading="lazy"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                
//                 {/* Product Badges */}
//                 <div className="absolute top-4 left-4 flex flex-col space-y-2">
//                   {product.featured && (
//                     <div className="bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-sm font-bold">
//                       🔥 Featured
//                     </div>
//                   )}
//                   {product.freeDelivery && (
//                     <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <FiTruck className="mr-1" /> Free Delivery
//                     </div>
//                   )}
//                   {!product.freeDelivery && (
//                     <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
//                       <FiTruck className="mr-1" /> ₹{product.deliveryFee} Delivery
//                     </div>
//                   )}
//                   {product.limitedStock && (
//                     <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${
//                       product.lastFewItems ? 'bg-red-600 text-white' : 'bg-yellow-500 text-gray-900'
//                     }`}>
//                       {product.lastFewItems ? (
//                         <>
//                           <FiAlertTriangle className="mr-1" /> Only {product.lastFewItems} left!
//                         </>
//                       ) : (
//                         <>
//                           <FiClock className="mr-1" /> Limited Stock
//                         </>
//                       )}
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="p-6">
//                 <div className="flex justify-between items-start mb-3">
//                   <div>
//                     <h3 className="text-xl font-bold text-gray-900 mb-1">
//                       {product.name}
//                     </h3>
//                     <p className="text-sm text-gray-500">{product.type}</p>
//                   </div>
//                   <div className="flex items-center bg-blue-100 px-2 py-1 rounded">
//                     <span className="text-blue-600 text-sm font-bold">⭐ {product.rating}</span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center">
//                   <div>
//                     <p className="text-2xl font-bold text-gray-900">
//                       ₹{product.price.toLocaleString("en-IN")}
//                     </p>
//                     <p className="text-sm text-gray-500">
//                       or ₹{Math.round(product.price / 12).toLocaleString("en-IN")}/mo
//                     </p>
//                   </div>
//                   <div className="flex space-x-3">
//                     <Link
//                       to={`/product/${product.id}`}
//                       className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center"
//                     >
//                       <span>View</span>
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductsList;


import React from "react";
import { Link } from "react-router-dom";
import { FiTruck, FiClock, FiAlertTriangle } from "react-icons/fi";

// Static image imports (make sure these paths are correct)
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
      featured: true,
      freeDelivery: true,
      limitedStock: false
    },
    {
      id: 2,
      image: Product2,
      price: 38000,
      name: "WaveCarver XR",
      type: "All-Round Funboard",
      rating: 4.5,
      freeDelivery: false,
      limitedStock: true,
      deliveryFee: 500
    },
    {
      id: 3,
      image: Product3,
      price: 36000,
      name: "EcoRider",
      type: "Eco-Friendly Board",
      rating: 4.7,
      freeDelivery: true,
      limitedStock: false
    },
    {
      id: 4,
      image: Product4,
      price: 30000,
      name: "Beginner's Bliss",
      type: "Foam Board",
      rating: 4.2,
      freeDelivery: false,
      limitedStock: true,
      deliveryFee: 300,
      lastFewItems: 3
    },
    {
      id: 5,
      image: Product5,
      price: 40000,
      name: "ProTube Special",
      type: "Tubular Performance",
      rating: 4.9,
      freeDelivery: true,
      limitedStock: false
    },
    {
      id: 6,
      image: Product6,
      price: 41000,
      name: "Carbon Fiber X",
      type: "Competition Board",
      rating: 4.8,
      freeDelivery: false,
      limitedStock: false,
      deliveryFee: 700
    },
    {
      id: 7,
      image: Product7,
      price: 50000,
      name: "The Dominator",
      type: "Big Wave Gun",
      rating: 5.0,
      featured: true,
      freeDelivery: true,
      limitedStock: true,
      lastFewItems: 2
    },
    {
      id: 8,
      image: Product8,
      price: 47000,
      name: "Classic Logger",
      type: "Traditional Longboard",
      rating: 4.6,
      freeDelivery: false,
      limitedStock: true,
      deliveryFee: 600
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Premium Surfboards
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium">
            Master-crafted performance boards shaped for every wave condition
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className={`group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-out overflow-hidden ${
                product.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Product Image with Overlay */}
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent" />
                
                {/* Badges Container */}
                <div className="absolute top-3 left-3 right-3 flex flex-wrap gap-2">
                  {product.featured && (
                    <div className="bg-amber-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold tracking-wide shadow-sm flex items-center">
                      <span className="mr-1">🔥</span> FEATURED
                    </div>
                  )}
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm flex items-center">
                    <span className="mr-1">⭐</span> {product.rating}/5
                  </div>
                  {product.limitedStock && (
                    <div className={`px-3 py-1 rounded-full text-xs font-medium flex items-center shadow-sm ${
                      product.lastFewItems ? 'bg-red-600 text-white' : 'bg-amber-100 text-amber-900'
                    }`}>
                      {product.lastFewItems ? (
                        <>
                          <FiAlertTriangle className="mr-1.5 h-3 w-3" /> ONLY {product.lastFewItems}
                        </>
                      ) : (
                        <>
                          <FiClock className="mr-1.5 h-3 w-3" /> LOW STOCK
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-5 space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-medium mt-1">{product.type}</p>
                </div>

                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-2xl font-extrabold text-gray-900">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    <div className="flex items-center">
                      <FiTruck className={`w-4 h-4 mr-1.5 ${
                        product.freeDelivery ? 'text-green-600' : 'text-gray-500'
                      }`}/>
                      <span className={`text-xs ${
                        product.freeDelivery ? 'text-green-700 font-medium' : 'text-gray-600'
                      }`}>
                        {product.freeDelivery ? 'Free shipping' : `+₹${product.deliveryFee} shipping`}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-lg font-medium transition-all duration-200 hover:-translate-y-0.5 flex items-center shadow hover:shadow-md"
                  >
                    View
                  </Link>
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