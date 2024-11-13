import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Product_1 from "../assets/product_surfboard_1.webp";
import Product_2 from "../assets/product_surfboard_2.webp";
import Product_3 from "../assets/product_surfboard_3.webp";
import Product_4 from "../assets/product_surfboard_4.webp";
import Product_5 from "../assets/product_surfboard_5.webp";
import Product_6 from "../assets/product_surfboard_7.webp";
import Product_7 from "../assets/product_surfboard_8.webp";
import Product_8 from "../assets/product_surfboard_2.webp";

const products = [
  {
    image: Product_1,
    price: 45000,
  },
  {
    image: Product_2,
    price: 38000,
  },
  {
    image: Product_3,
    price: 36000,
  },
  {
    image: Product_4,
    price: 30000,
  },
  {
    image: Product_5,
    price: 40000,
  },
  {
    image: Product_6,
    price: 41000,
  },
  {
    image: Product_7,
    price: 50000,
  },
  {
    image: Product_8,
    price: 47000,
  },
];

function ProductDetail() {
  const { productId } = useParams();
  const productIndex = parseInt(productId, 10) - 1;
  const product = products[productIndex];
  const navigate = useNavigate();

  const handleBuyClick = () => {
    const productDetails = {
      name: `Product ${productId}`,
      price: product.price,
      image: product.image,
    };

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(productDetails);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert(`Added Product ${productId} to your cart!`);
    navigate("/cart");
  };

  return (
    <div className="container mx-auto my-10">
      <div className="text-center">
        <img
          src={product.image}
          alt={`Product ${productId}`}
          className="w-96 mx-auto"
        />
        <h2 className="text-4xl mt-5">Product {productId}</h2>
        <p className="mt-4 text-lg">
          This is the detailed description for Product {productId}. Here you can
          add more information about the product, including features,
          specifications, etc.
        </p>
        <div className="mt-5 text-xl">
          <span>Price: ₹{product.price}</span>
        </div>

        <div className="mt-5">
          <button
            onClick={handleBuyClick}
            className="px-8 py-2 bg-black text-white text-lg rounded focus:outline-none transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
