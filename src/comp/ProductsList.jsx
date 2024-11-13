import React from "react";
import { Link } from "react-router-dom";
import Product_1 from "../assets/product_surfboard_1.webp";
import Product_2 from "../assets/product_surfboard_2.webp";
import Product_3 from "../assets/product_surfboard_3.webp";
import Product_4 from "../assets/product_surfboard_4.webp";
import Product_5 from "../assets/product_surfboard_5.webp";
import Product_6 from "../assets/product_surfboard_7.webp";
import Product_7 from "../assets/product_surfboard_8.webp";
import Product_8 from "../assets/product_surfboard_2.webp";

function Products() {
  const products = [
    { image: Product_1, price: 45000 },
    { image: Product_2, price: 38000 },
    { image: Product_3, price: 36000 },
    { image: Product_4, price: 30000 },
    { image: Product_5, price: 40000 },
    { image: Product_6, price: 41000 },
    { image: Product_7, price: 50000 },
    { image: Product_8, price: 47000 },
  ];

  return (
    <div>
      <h2 className="text-center text-gray-800 text-4xl mt-14 font-roboto">
        Surfboards Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:px-36 mt-28 sm:mt-10">
        {products.map((product, index) => (
          <div key={index} className="text-center p-4 rounded">
            <img
              src={product.image}
              alt={`Product ${index + 1}`}
              className="w-full h-auto object-cover transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer sm:mt-20"
              loading="lazy"
            />
            <div className="mt-10 text-xl">
              <Link to={`/product/${index + 1}`}>Product {index + 1}</Link>
            </div>
            <div className="mt-5 text-xl">
              <span>Price: ₹{product.price}</span>
            </div>
            <div className="mt-5">
              <Link
                to={`/product/${index + 1}`}
                className="px-8 py-2 bg-black text-white text-lg rounded hover:bg-gray-800 focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
              >
                Buy
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
