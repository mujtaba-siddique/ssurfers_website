import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiShoppingCart, FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const updateCart = () => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
    
    // Calculate total items and price
    const itemsCount = storedCart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const priceTotal = storedCart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
    
    setTotalItems(itemsCount);
    setTotalPrice(priceTotal);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  useEffect(() => {
    updateCart();
  }, []);

  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();
  };

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) return;
    
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();
  };

  const handleCheckout = () => {
    alert("Proceeding to payment");
  };

  return (
    <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8 sm:text-4xl">Your Cart</h2>

        {cartItems.length === 0 ? (
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
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-1">
              {cartItems.map((item) => (
                <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="p-4 flex flex-col sm:flex-row gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center bg-gray-100 rounded-md p-2 w-full sm:w-48 h-48">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                          <p className="text-sm text-gray-500">{item.type}</p>
                        </div>
                        <button
                          onClick={() => handleRemoveItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                        >
                          <FiTrash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Unit Price</p>
                          <p className="text-lg font-semibold text-gray-800">₹{item.price.toLocaleString("en-IN")}</p>
                        </div>
                        
                        <div>
                          <p className="text-sm font-medium text-gray-500">Quantity</p>
                          <div className="flex items-center mt-1">
                            <button 
                              onClick={() => handleQuantityChange(item.id, (item.quantity || 1) - 1)}
                              className="p-1 border border-gray-300 rounded-l-md hover:bg-gray-100"
                              disabled={(item.quantity || 1) <= 1}
                            >
                              <FiMinus className="h-4 w-4 text-gray-600" />
                            </button>
                            <span className="px-3 py-1 border-t border-b border-gray-300 bg-gray-50 text-center w-12">
                              {item.quantity || 1}
                            </span>
                            <button 
                              onClick={() => handleQuantityChange(item.id, (item.quantity || 1) + 1)}
                              className="p-1 border border-gray-300 rounded-r-md hover:bg-gray-100"
                            >
                              <FiPlus className="h-4 w-4 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-500">Total</p>
                        <p className="text-xl font-bold text-gray-900">
                          ₹{(item.price * (item.quantity || 1)).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
                <span className="text-sm text-gray-600">
                  {totalItems} {totalItems === 1 ? 'item' : 'items'}
                </span>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium text-gray-900">₹{totalPrice.toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Shipping</span>
                  <span className="font-medium text-gray-900">Free</span>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-medium text-gray-900">Total</span>
                  <span className="text-lg font-bold text-gray-900">₹{totalPrice.toLocaleString("en-IN")}</span>
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