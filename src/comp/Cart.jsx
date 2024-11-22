import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    // Aggregate cart items (combine duplicates)
    const aggregatedCart = aggregateCartItems(storedCart);
    setCartItems(aggregatedCart);
  }, []);

  // Function to aggregate duplicate items and keep track of quantities
  const aggregateCartItems = (cart) => {
    const aggregated = cart.reduce((acc, item) => {
      const existingItemIndex = acc.findIndex((i) => i.name === item.name);
      if (existingItemIndex > -1) {
        acc[existingItemIndex].quantity += 1;  // Increase quantity if already exists
      } else {
        acc.push({ ...item, quantity: 1 });
      }
      return acc;
    }, []);
    return aggregated;
  };

  // Handle removal of a single product by decreasing its quantity
  const handleRemoveOne = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1; // Decrease quantity by 1
    } else {
      updatedCart.splice(index, 1); // Remove the item if quantity is 1
    }
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // Handle removal of all instances of a product
  const handleRemoveAll = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1); // Remove all instances of the item
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleCheckout = () => {
    alert("Proceeding to payment");
  };

  // Calculate total price of the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
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
                <h3 className="mt-2 text-xl flex items-center">
                  {item.name}
                  <span className="ml-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                    {item.quantity}x
                  </span>
                </h3>
                <p className="text-lg mt-2">₹{item.price} each</p>
                <p className="text-lg mt-1">Total: ₹{item.price * item.quantity}</p>

                {/* Buttons for removing items */}
                <div className="mt-2 flex space-x-4">
                  <button
                    onClick={() => handleRemoveOne(index)}
                    className="text-yellow-500 hover:text-yellow-700"
                  >
                    Remove One
                  </button>
                  <button
                    onClick={() => handleRemoveAll(index)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove All
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="mt-8 text-right">
            <div className="text-xl font-semibold">
              <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
              <p>Total Price: ₹{calculateTotalPrice()}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="px-8 py-2 bg-green-500 text-white rounded hover:bg-green-700 mt-4"
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
