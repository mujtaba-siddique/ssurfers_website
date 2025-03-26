import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [groupedItems, setGroupedItems] = useState([]);

  const updateCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    
    const grouped = storedCart.reduce((acc, item) => {
      const existing = acc.find(i => i.name === item.name);
      const price = parseFloat(item.price);
      if (existing) {
        existing.quantity += 1;
        existing.totalPrice += price;
      } else {
        acc.push({ ...item, quantity: 1, totalPrice: price, price });
      }
      return acc;
    }, []);
    
    setGroupedItems(grouped);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  useEffect(() => {
    updateCart();
  }, []);

  const handleRemoveItem = (productName) => {
    const index = cartItems.findIndex(item => item.name === productName);
    if (index !== -1) {
      const updatedCart = cartItems.filter((_, i) => i !== index);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      updateCart();
    }
  };

  const handleCheckout = () => {
    alert("Proceeding to payment");
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0);

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 sm:text-4xl">Your Cart</h2>

        {groupedItems.length === 0 ? (
          <div className="text-center mt-10">
            <p className="text-lg text-gray-600">Your cart is empty.</p>
            <Link 
              to="/" 
              className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {groupedItems.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-4">
                    <div className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-48 object-contain"
                      />
                    </div>
                    <div className="mt-4">
                      <h3 className="text-lg font-medium text-gray-900 line-clamp-2">{item.name}</h3>
                      <div className="mt-2 flex justify-between items-center">
                        <div>
                          <p className="text-sm text-gray-500">Price: ₹{item.price.toFixed(2)}</p>
                          <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                        </div>
                        <p className="text-lg font-semibold text-gray-800">₹{item.totalPrice.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(item.name)}
                      className="mt-4 w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      Remove Item
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                <span className="text-sm text-gray-600">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">₹{totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-gray-900">Free</span>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">₹{totalPrice.toFixed(2)}</span>
                </div>
              </div>
              <button
                onClick={handleCheckout}
                className="mt-6 w-full py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-300"
              >
                Proceed to Secure Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;