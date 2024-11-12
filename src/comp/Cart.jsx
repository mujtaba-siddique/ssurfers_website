import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert("Proceeding to payment");
  };

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-4xl text-center mb-5">Your Cart</h2>

      {cartItems.length === 0 ? (
        <div className="text-center mt-5">
          <p>Your cart is empty.</p>
          <Link to="/" className="text-blue-500 hover:underline mt-5">
            Go back to products
          </Link>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {cartItems.map((item, index) => (
              <div key={index} className="border p-4 rounded-lg shadow-md">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:font-bold hover:scale-110 duration-300 cursor-pointer"
                />
                <h3 className="mt-2 text-xl">{item.name}</h3>
                <p className="text-lg mt-2">₹{item.price}</p>
                <button
                  onClick={() => handleRemoveItem(index)}
                  className="mt-2 text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 text-right">
            <button
              onClick={handleCheckout}
              className="px-8 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
