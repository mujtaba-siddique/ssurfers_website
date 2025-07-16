
import React, { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { 
  FiPlus, 
  FiMinus, 
  FiTrash2, 
  FiArrowLeft, 
  FiShoppingBag, 
  FiTruck, 
  FiInfo, 
  FiX, 
  FiHeart,
  FiClock,
  FiShield,
  FiCreditCard,
  FiGift,
  FiTag,
  FiCheckCircle,
  FiAlertCircle,
  FiPhone,
  FiMail,
  FiCalendar,
  FiDollarSign,
  FiPercent,
  FiLock
} from "react-icons/fi";

const Cart = () => {
  // State management
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [gstTax, setGstTax] = useState(0);
  const [environmentCharge] = useState(100);
  const [platformCharge] = useState(30);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [showReturnModal, setShowReturnModal] = useState(false);
  const [returnReason, setReturnReason] = useState("");
  const [returnComments, setReturnComments] = useState("");
  const [returnItem, setReturnItem] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [appliedCoupon, setAppliedCoupon] = useState(null);
  const [discount, setDiscount] = useState(0);
  const [showCouponError, setShowCouponError] = useState(false);
  const [savedForLater, setSavedForLater] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationType, setNotificationType] = useState("success");
  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [expressDeliveryFee] = useState(199);
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("full");
  const [selectedEMIPlan, setSelectedEMIPlan] = useState(null);
  const [selectedCard, setSelectedCard] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardExpiry, setCardExpiry] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  const [saveCard, setSaveCard] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  // Available coupons
  const availableCoupons = [
    { code: "WELCOME10", discount: 0.1, minAmount: 1000, maxDiscount: 500 },
    { code: "SUMMER20", discount: 0.2, minAmount: 2000, maxDiscount: 1000 },
    { code: "FREESHIP", discount: 0, minAmount: 1500, freeShipping: true },
    { code: "EXTRAEMI", discount: 0.05, minAmount: 5000, maxDiscount: 2000, extraEMIDiscount: true }
  ];

  // EMI plans
  const emiPlans = [
    { months: 3, interestRate: 0, minAmount: 3000, bankProcessingFee: 199 },
    { months: 6, interestRate: 0, minAmount: 5000, bankProcessingFee: 299 },
    { months: 9, interestRate: 12, minAmount: 8000, bankProcessingFee: 399 },
    { months: 12, interestRate: 14, minAmount: 10000, bankProcessingFee: 499 }
  ];

  // Saved cards
  const savedCards = [
    { id: 1, type: 'visa', number: '•••• •••• •••• 4242', name: 'John Doe', expiry: '12/25' },
    { id: 2, type: 'mastercard', number: '•••• •••• •••• 5555', name: 'John Doe', expiry: '10/26' }
  ];

  // Notification helper
  const showNotificationAlert = useCallback((message, type = "success") => {
    setNotificationMessage(message);
    setNotificationType(type);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  }, []);

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  // Calculate EMI
  const calculateEMI = (principal, interestRate, months) => {
    if (interestRate === 0) return principal / months;
    const monthlyRate = interestRate / 100 / 12;
    return principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1);
  };

  // Validate card number with Luhn algorithm
  const validateCardNumber = (number) => {
    let sum = 0;
    const num = number.replace(/\s+/g, '');
    for (let i = 0; i < num.length; i++) {
      let digit = parseInt(num[i]);
      if ((num.length - i) % 2 === 0) {
        digit *= 2;
        if (digit > 9) digit -= 9;
      }
      sum += digit;
    }
    return sum % 10 === 0;
  };

  // Update cart
  const updateCart = useCallback(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const storedSavedItems = JSON.parse(localStorage.getItem("savedForLater")) || [];
    
    const updatedCart = storedCart.map(item => ({
      ...item,
      isFreeDelivery: item.isFreeDelivery ?? Math.random() < 0.3,
      deliveryFee: item.deliveryFee ?? Math.floor(Math.random() * 100) + 50,
      inStock: item.inStock ?? Math.random() < 0.9,
      stockQuantity: item.stockQuantity ?? Math.floor(Math.random() * 20) + 1,
      emiAvailable: item.emiAvailable ?? item.price >= 3000,
      category: item.category ?? "Electronics",
      image: item.image || `https://source.unsplash.com/200x200/?${item.category || 'electronics'}`
    }));
    
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("savedForLater", JSON.stringify(storedSavedItems));
    
    setCartItems(updatedCart);
    setSavedForLater(storedSavedItems);
    
    const itemsCount = updatedCart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotalAmount = updatedCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const calculatedGst = subtotalAmount * 0.08;
    
    let deliveryTotal = deliveryOption === "express" ? expressDeliveryFee : 
      updatedCart.reduce((sum, item) => sum + (item.isFreeDelivery ? 0 : item.deliveryFee * item.quantity), 0);
    
    let discountAmount = 0;
    if (appliedCoupon) {
      if (appliedCoupon.freeShipping) {
        deliveryTotal = 0;
      } else {
        discountAmount = Math.min(
          subtotalAmount * appliedCoupon.discount,
          appliedCoupon.maxDiscount
        );
      }
    }
    
    setTotalItems(itemsCount);
    setSubtotal(subtotalAmount);
    setGstTax(calculatedGst);
    setDeliveryCharge(deliveryTotal);
    setDiscount(discountAmount);
    setTotalPrice(subtotalAmount + calculatedGst + environmentCharge + platformCharge + deliveryTotal - discountAmount);
    setIsLoading(false);
  }, [appliedCoupon, deliveryOption, expressDeliveryFee, environmentCharge, platformCharge]);

  useEffect(() => {
    const timer = setTimeout(updateCart, 300);
    return () => clearTimeout(timer);
  }, [updateCart]);

  // Handle quantity change
  const handleQuantityChange = (productId, action) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === productId) {
        if (action === 'increment') {
          if (item.inStock && item.quantity < item.stockQuantity) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            showNotificationAlert(`Only ${item.stockQuantity} available`, "error");
            return item;
          }
        } else {
          return { ...item, quantity: Math.max(item.quantity - 1, 1) };
        }
      }
      return item;
    });
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();
  };

  // Remove item
  const handleRemoveItem = (productId) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    updateCart();
    showNotificationAlert("Item removed", "success");
  };

  // Save for later
  const handleSaveForLater = (productId) => {
    const itemToSave = cartItems.find(item => item.id === productId);
    if (itemToSave) {
      const updatedCart = cartItems.filter(item => item.id !== productId);
      const updatedSavedItems = [...savedForLater, itemToSave];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("savedForLater", JSON.stringify(updatedSavedItems));
      updateCart();
      showNotificationAlert("Saved for later", "success");
    }
  };

  // Move to cart
  const handleMoveToCart = (productId) => {
    const itemToMove = savedForLater.find(item => item.id === productId);
    if (itemToMove) {
      const existingItem = cartItems.find(item => item.id === productId);
      let updatedCart;
      
      if (existingItem) {
        updatedCart = cartItems.map(item => 
          item.id === productId ? { ...item, quantity: item.quantity + itemToMove.quantity } : item
        );
      } else {
        updatedCart = [...cartItems, itemToMove];
      }
      
      const updatedSavedItems = savedForLater.filter(item => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      localStorage.setItem("savedForLater", JSON.stringify(updatedSavedItems));
      updateCart();
      showNotificationAlert("Moved to cart", "success");
    }
  };

  // Remove saved item
  const handleRemoveSavedItem = (productId) => {
    const updatedSavedItems = savedForLater.filter(item => item.id !== productId);
    localStorage.setItem("savedForLater", JSON.stringify(updatedSavedItems));
    setSavedForLater(updatedSavedItems);
    showNotificationAlert("Removed from saved", "success");
  };

  // Apply coupon
  const handleApplyCoupon = () => {
    if (!couponCode.trim()) {
      setShowCouponError(true);
      return;
    }
    
    const coupon = availableCoupons.find(
      c => c.code.toLowerCase() === couponCode.toLowerCase()
    );
    
    if (coupon && subtotal >= coupon.minAmount) {
      setAppliedCoupon(coupon);
      setShowCouponError(false);
      showNotificationAlert(`Coupon applied: ${coupon.code}`, "success");
      updateCart();
    } else if (coupon && subtotal < coupon.minAmount) {
      setShowCouponError(true);
      showNotificationAlert(`Minimum purchase: ₹${coupon.minAmount}`, "error");
    } else {
      setShowCouponError(true);
      showNotificationAlert("Invalid coupon", "error");
    }
  };

  // Remove coupon
  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setCouponCode("");
    updateCart();
    showNotificationAlert("Coupon removed", "success");
  };

  // Checkout
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      showNotificationAlert("Cart is empty", "error");
      return;
    }
    setShowPaymentModal(true);
  };

  // Format card number
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    return parts.length ? parts.join(' ') : value;
  };

  // Format expiry date
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 3) return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    return value;
  };

  // Process payment
  const handleProcessPayment = () => {
    if (!selectedCard) {
      if (!cardNumber || !validateCardNumber(cardNumber)) {
        showNotificationAlert("Invalid card number", "error");
        return;
      }
      if (!cardName) {
        showNotificationAlert("Enter cardholder name", "error");
        return;
      }
      if (!cardExpiry || !cardExpiry.includes('/')) {
        showNotificationAlert("Invalid expiry date", "error");
        return;
      }
      if (!cardCVV || cardCVV.length !== 3) {
        showNotificationAlert("Invalid CVV", "error");
        return;
      }
    }
    
    setProcessingPayment(true);
    setTimeout(() => {
      setProcessingPayment(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        localStorage.setItem("cart", JSON.stringify([]));
        updateCart();
        setShowPaymentModal(false);
        setPaymentSuccess(false);
        showNotificationAlert("Payment successful", "success");
      }, 2000);
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600 mb-4"></div>
          <p className="text-lg text-gray-600">Loading cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      {showNotification && (
        <div className={`fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg ${
          notificationType === "success" ? "bg-green-50 border-l-4 border-green-500" : "bg-red-50 border-l-4 border-red-500"
        }`}>
          <div className="flex items-center">
            {notificationType === "success" ? (
              <FiCheckCircle className="w-5 h-5 text-green-500 mr-3" />
            ) : (
              <FiAlertCircle className="w-5 h-5 text-red-500 mr-3" />
            )}
            <p className="text-sm font-medium">
              {notificationMessage}
            </p>
            <button onClick={() => setShowNotification(false)} className="ml-4">
              <FiX className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <Link to="/" className="flex items-center text-gray-600 hover:text-indigo-600">
            <FiArrowLeft className="mr-2" />
            <span className="font-medium">Continue Shopping</span>
          </Link>
          <div className="text-sm text-gray-500">
            <span className="hidden sm:inline">Need help? </span>
            <a href="tel:+918001234567" className="text-indigo-600 hover:text-indigo-800 font-medium">
              <FiPhone className="inline-block mr-1" /> 1800-123-4567
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900">Your Shopping Cart</h2>
          <span className="text-gray-500 font-medium bg-gray-100 px-3 py-1 rounded-full">
            {totalItems} {totalItems === 1 ? 'item' : 'items'}
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center mt-20">
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <FiShoppingBag className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-medium text-gray-700 mb-2">Your cart is empty</h3>
            <p className="text-gray-500 mb-6">You haven't added anything to your cart yet</p>
            <Link to="/" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
              Browse Products
            </Link>
            
            {savedForLater.length > 0 && (
              <div className="mt-16">
                <h3 className="text-xl font-semibold text-gray-800 mb-6">Saved for Later ({savedForLater.length})</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {savedForLater.map((item) => (
                    <div key={`saved-${item.id}`} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                      <div className="flex gap-4">
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                          <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 line-clamp-1">{item.name}</h4>
                          <p className="text-sm text-gray-600 mb-2">{formatCurrency(item.price)}</p>
                          <div className="flex space-x-2">
                            <button onClick={() => handleMoveToCart(item.id)} className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100">
                              Move to Cart
                            </button>
                            <button onClick={() => handleRemoveSavedItem(item.id)} className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded hover:bg-gray-100">
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Delivery Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      deliveryOption === "standard" ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                    }`} onClick={() => setDeliveryOption("standard")}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 mr-3 ${
                          deliveryOption === "standard" ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                        }`}>
                          {deliveryOption === "standard" && <div className="w-2 h-2 bg-white rounded-full m-auto"></div>}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Standard Delivery</h4>
                          <p className="text-sm text-gray-500 mt-1">3-5 business days</p>
                          <p className="text-sm font-medium text-gray-900 mt-2">
                            {deliveryCharge === 0 ? "FREE" : formatCurrency(deliveryCharge)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className={`border rounded-xl p-4 cursor-pointer transition-all ${
                      deliveryOption === "express" ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                    }`} onClick={() => setDeliveryOption("express")}>
                      <div className="flex items-start">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 mr-3 ${
                          deliveryOption === "express" ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                        }`}>
                          {deliveryOption === "express" && <div className="w-2 h-2 bg-white rounded-full m-auto"></div>}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Express Delivery</h4>
                          <p className="text-sm text-gray-500 mt-1">1-2 business days</p>
                          <p className="text-sm font-medium text-gray-900 mt-2">
                            {formatCurrency(expressDeliveryFee)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center text-sm text-gray-600">
                    <FiClock className="mr-2 text-indigo-500" />
                    <span>Estimated delivery: <strong>{estimatedDelivery}</strong></span>
                  </div>
                </div>

                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                    <div className="flex flex-col sm:flex-row gap-6">
                      <div className="w-full sm:w-40 h-40 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center relative">
                        <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain transform hover:scale-105 transition-transform duration-300" />
                        {item.isFreeDelivery && (
                          <div className="absolute bottom-2 left-2 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center">
                            <FiTruck className="inline mr-1" /> Free Delivery
                          </div>
                        )}
                        {item.emiAvailable && (
                          <div className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                            EMI Available
                          </div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="text-lg font-bold text-indigo-600">
                                {formatCurrency(item.price)}
                              </span>
                              {item.originalPrice && (
                                <span className="text-sm text-gray-400 line-through">
                                  {formatCurrency(item.originalPrice)}
                                </span>
                              )}
                              {item.originalPrice && (
                                <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                  {Math.round((1 - item.price / item.originalPrice) * 100)}% OFF
                                </span>
                              )}
                            </div>
                            {item.emiAvailable && (
                              <div className="mt-2 text-xs text-indigo-600 flex items-center">
                                <FiCreditCard className="mr-1" />
                                <span>EMI from {formatCurrency(Math.ceil(item.price / 12))}/month</span>
                              </div>
                            )}
                            <div className="mt-2">
                              {item.inStock ? (
                                item.stockQuantity <= 5 ? (
                                  <p className="text-xs text-amber-600 flex items-center">
                                    <FiAlertCircle className="mr-1" />
                                    Only {item.stockQuantity} left
                                  </p>
                                ) : (
                                  <p className="text-xs text-green-600 flex items-center">
                                    <FiCheckCircle className="mr-1" />
                                    In Stock
                                  </p>
                                )
                              ) : (
                                <p className="text-xs text-red-600 flex items-center">
                                  <FiAlertCircle className="mr-1" />
                                  Out of Stock
                                </p>
                              )}
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <button onClick={() => handleSaveForLater(item.id)} className="text-gray-400 hover:text-indigo-600 p-1">
                              <FiHeart className="w-5 h-5" />
                            </button>
                            <button onClick={() => handleRemoveItem(item.id)} className="text-gray-400 hover:text-red-600 p-1">
                              <FiTrash2 className="w-5 h-5" />
                            </button>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                          <div className="flex items-center w-full sm:w-auto">
                            <span className="text-gray-600 mr-4">Quantity:</span>
                            <div className="flex items-center border rounded-xl bg-gray-50 overflow-hidden">
                              <button
                                onClick={() => handleQuantityChange(item.id, 'decrement')}
                                className={`px-3 py-2 ${item.quantity === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                                disabled={item.quantity === 1}
                              >
                                <FiMinus className="w-4 h-4" />
                              </button>
                              <span className="px-4 py-2 w-12 text-center bg-white border-x">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleQuantityChange(item.id, 'increment')}
                                className={`px-3 py-2 ${!item.inStock || item.quantity >= item.stockQuantity ? 'text-gray-300 cursor-not-allowed' : 'text-gray-700 hover:bg-gray-100'}`}
                                disabled={!item.inStock || item.quantity >= item.stockQuantity}
                              >
                                <FiPlus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="text-right w-full sm:w-auto">
                            <div className="space-y-1">
                              <p className="text-sm text-gray-500">Item Total</p>
                              <p className="text-xl font-bold text-gray-900">
                                {formatCurrency(item.price * item.quantity)}
                              </p>
                              {!item.isFreeDelivery && deliveryOption === "standard" && (
                                <p className="text-sm text-gray-500">
                                  + {formatCurrency(item.deliveryFee * item.quantity)} delivery
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 pt-4 border-t border-gray-100 flex flex-wrap gap-2">
                          <button
                            onClick={() => setShowReturnModal(true)}
                            className="text-xs px-3 py-1.5 bg-gray-50 text-gray-700 rounded-full hover:bg-gray-100 flex items-center"
                          >
                            <FiArrowLeft className="mr-1" /> Return Item
                          </button>
                          <span className="text-xs px-3 py-1.5 bg-indigo-50 text-indigo-700 rounded-full flex items-center">
                            <FiTruck className="mr-1" /> 
                            {deliveryOption === "express" 
                              ? "Express Delivery" 
                              : item.isFreeDelivery 
                                ? "Free Delivery" 
                                : `Standard Delivery: ${formatCurrency(item.deliveryFee)}`}
                          </span>
                          {item.emiAvailable && (
                            <span className="text-xs px-3 py-1.5 bg-orange-50 text-orange-700 rounded-full flex items-center">
                              <FiCreditCard className="mr-1" /> EMI Available
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {savedForLater.length > 0 && (
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Saved for Later ({savedForLater.length})</h3>
                    <div className="space-y-4">
                      {savedForLater.map((item) => (
                        <div key={`saved-${item.id}`} className="flex gap-4 py-4 border-b border-gray-100 last:border-b-0">
                          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                            <img src={item.image} alt={item.name} className="max-w-full max-h-full object-contain" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium text-gray-900">{item.name}</h4>
                                <p className="text-sm text-gray-500">{item.category}</p>
                                <p className="text-sm font-medium text-indigo-600 mt-1">{formatCurrency(item.price)}</p>
                              </div>
                              <div className="flex space-x-2">
                                <button onClick={() => handleMoveToCart(item.id)} className="text-xs px-3 py-1 bg-indigo-50 text-indigo-600 rounded hover:bg-indigo-100">
                                  Move to Cart
                                </button>
                                <button onClick={() => handleRemoveSavedItem(item.id)} className="text-xs px-3 py-1 bg-gray-50 text-gray-600 rounded hover:bg-gray-100">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex items-start">
                    <div className="bg-indigo-100 p-2 rounded-lg mr-4">
                      <FiInfo className="text-indigo-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">Return Policy</h3>
                      <p className="text-gray-600 mb-4">
                        Hassle-free returns within 30 days. Items must be in original condition with tags attached.
                      </p>
                      <button onClick={() => setShowReturnModal(true)} className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center group">
                        Start Return Process
                        <FiArrowLeft className="ml-2 transform group-hover:-translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Need Help?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <FiPhone className="text-indigo-600 w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Call Us</h4>
                          <p className="text-sm text-gray-500 mt-1">24/7 Customer Support</p>
                          <a href="tel:+918001234567" className="text-indigo-600 font-medium block mt-2">
                            1800-123-4567
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded-xl p-4 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                      <div className="flex items-start">
                        <div className="bg-indigo-100 p-2 rounded-full mr-3">
                          <FiMail className="text-indigo-600 w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900">Email Us</h4>
                          <p className="text-sm text-gray-500 mt-1">Response within 24 hours</p>
                          <a href="mailto:support@example.com" className="text-indigo-600 font-medium block mt-2">
                            support@example.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:sticky lg:top-8 space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 pb-4 border-b">Order Summary</h3>
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                      <span className="font-medium">{formatCurrency(subtotal)}</span>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">Product Charges</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-500">
                          {deliveryOption === "express" ? "Express Delivery" : "Delivery Charges"}
                        </span>
                        <span>{formatCurrency(deliveryCharge)}</span>
                      </div>
                    </div>
                    <div className="border-t pt-3 space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">GST (8%)</span>
                        <span className="font-medium">{formatCurrency(gstTax)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Environment Charge</span>
                        <span className="font-medium">{formatCurrency(environmentCharge)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Platform Fee</span>
                        <span className="font-medium">{formatCurrency(platformCharge)}</span>
                      </div>
                    </div>
                    {discount > 0 && (
                      <div className="flex justify-between text-green-600">
                        <span className="font-medium flex items-center">
                          <FiTag className="mr-2" /> Discount
                        </span>
                        <span className="font-medium">-{formatCurrency(discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between pt-4 border-t text-lg font-semibold bg-gray-50 -mx-6 px-6 py-3">
                      <span className="text-gray-900">Total Amount</span>
                      <span className="text-indigo-600">
                        {formatCurrency(totalPrice)}
                      </span>
                    </div>
                  </div>

                  {subtotal >= 3000 && (
                    <div className="mb-6 bg-orange-50 p-4 rounded-lg border border-orange-100">
                      <div className="flex items-center mb-3">
                        <FiCreditCard className="text-orange-500 mr-2" />
                        <h4 className="font-medium text-gray-900">EMI Available</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        Pay in installments from {formatCurrency(Math.ceil(totalPrice / 12))}/month
                      </p>
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        {emiPlans.filter(plan => totalPrice >= plan.minAmount).slice(0, 4).map((plan, index) => (
                          <div key={index} className="bg-white p-2 rounded border border-orange-100 text-center">
                            <p className="font-medium text-gray-900">{plan.months} Months</p>
                            <p className="text-orange-600">
                              {formatCurrency(Math.ceil(calculateEMI(totalPrice, plan.interestRate, plan.months)))}
                              <span className="text-gray-500">/mo</span>
                            </p>
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-gray-500 mt-3">
                        *Terms apply. Select EMI at checkout.
                      </p>
                    </div>
                  )}

                  <div className="mb-6">
                    {appliedCoupon ? (
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex justify-between items-center">
                        <div className="flex items-center">
                          <FiTag className="text-green-600 mr-2" />
                          <div>
                            <p className="text-sm font-medium text-green-800">{appliedCoupon.code}</p>
                            <p className="text-xs text-green-600">
                              {appliedCoupon.freeShipping 
                                ? "Free shipping applied" 
                                : `${appliedCoupon.discount * 100}% discount`}
                            </p>
                          </div>
                        </div>
                        <button onClick={handleRemoveCoupon} className="text-gray-500 hover:text-gray-700">
                          <FiX className="w-5 h-5" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Apply Coupon Code</p>
                        <div className="flex space-x-2">
                          <input
                            type="text"
                            value={couponCode}
                            onChange={(e) => setCouponCode(e.target.value)}
                            placeholder="Enter coupon code"
                            className={`flex-1 px-3 py-2 bg-white border rounded-lg focus:outline-none focus:ring-2 ${
                              showCouponError ? "border-red-300 focus:ring-red-200" : "border-gray-300 focus:ring-indigo-200"
                            }`}
                          />
                          <button
                            onClick={handleApplyCoupon}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                          >
                            Apply
                          </button>
                        </div>
                        {showCouponError && (
                          <p className="text-xs text-red-600 mt-1">Invalid coupon code</p>
                        )}
                      </div>
                    )}
                  </div>

                  <button 
                    onClick={handleCheckout}
                    className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-xl font-medium transition-all duration-300 mb-4 shadow-lg hover:shadow-xl flex items-center justify-center"
                  >
                    <FiCreditCard className="mr-2" />
                    Secure Checkout ({formatCurrency(totalPrice)})
                  </button>

                  <div className="text-center text-sm text-gray-500">
                    <div className="flex flex-col items-center space-y-2">
                      <button onClick={() => setShowPaymentModal(true)} className="flex items-center text-green-600 hover:text-green-700">
                        <FiShield className="mr-2" />
                        <span>Secure Payment</span>
                      </button>
                      <div className="flex justify-center space-x-4 text-xs mt-2">
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          30-Day Returns
                        </span>
                        <span className="flex items-center">
                          <svg className="w-3 h-3 mr-1 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          SSL Secure
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Payment Methods</h3>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visa/visa-original.svg" alt="Visa" className="h-6" />
                    </div>
                    <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mastercard/mastercard-original.svg" alt="Mastercard" className="h-6" />
                    </div>
                    <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/americanexpress/americanexpress-original.svg" alt="American Express" className="h-6" />
                    </div>
                    <div className="border border-gray-200 rounded-lg p-2 flex items-center justify-center">
                      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/paypal/paypal-original.svg" alt="PayPal" className="h-6" />
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-gray-500">
                    We accept all major credit cards, PayPal, and UPI payments.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                  <div className="flex items-center">
                    <FiGift className="text-indigo-600 w-5 h-5 mr-3" />
                    <div>
                      <h4 className="font-medium text-indigo-900">Gift Wrapping Available</h4>
                      <p className="text-xs text-indigo-700 mt-1">Add premium gift wrapping to your order.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {showReturnModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-gray-900">Return Product</h3>
                <button onClick={() => setShowReturnModal(false)} className="text-gray-400 hover:text-gray-600">
                  <FiX className="w-6 h-6" />
                </button>
              </div>
              
              {returnItem && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                  <img src={returnItem.image} alt={returnItem.name} className="w-12 h-12 object-contain" />
                  <div>
                    <h4 className="font-medium text-gray-900">{returnItem.name}</h4>
                    <p className="text-sm text-gray-500">{formatCurrency(returnItem.price)}</p>
                  </div>
                </div>
              )}

              <form onSubmit={(e) => {
                e.preventDefault();
                if (!returnReason) {
                  showNotificationAlert("Select a reason for return", "error");
                  return;
                }
                showNotificationAlert("Return request submitted", "success");
                setShowReturnModal(false);
              }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Reason for Return <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={returnReason}
                      onChange={(e) => setReturnReason(e.target.value)}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    >
                      <option value="">Select a reason</option>
                      <option value="wrong-item">Wrong Item Received</option>
                      <option value="damaged">Product Damaged</option>
                      <option value="not-as-described">Not as Described</option>
                      <option value="changed-mind">Changed My Mind</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Comments
                    </label>
                    <textarea
                      value={returnComments}
                      onChange={(e) => setReturnComments(e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                      placeholder="Provide additional details..."
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                    >
                      Submit Return Request
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-6 pt-4 border-t">
                <h4 className="text-sm font-medium text-gray-700 mb-2">Return Policy</h4>
                <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                  <li>Items must be returned within 30 days</li>
                  <li>Products must be in original condition</li>
                  <li>Refunds processed within 5-7 business days</li>
                  <li>Original shipping charges are non-refundable</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Secure Checkout</h3>
                <button 
                  onClick={() => {
                    if (!processingPayment) {
                      setShowPaymentModal(false);
                      setPaymentMethod("full");
                      setSelectedEMIPlan(null);
                      setSelectedCard(null);
                      setCardNumber("");
                      setCardName("");
                      setCardExpiry("");
                      setCardCVV("");
                      setSaveCard(false);
                    }
                  }}
                  className="text-gray-400 hover:text-gray-600 disabled:opacity-50"
                  disabled={processingPayment}
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              {paymentSuccess ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Payment Successful!</h4>
                  <p className="text-gray-600 mb-6">Your order has been placed successfully.</p>
                  <p className="text-sm text-gray-500">
                    Order ID: ORD-{Math.floor(Math.random() * 1000000)}
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    Confirmation email has been sent
                  </p>
                  <button
                    onClick={() => {
                      setShowPaymentModal(false);
                      setPaymentSuccess(false);
                    }}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                <>
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-medium text-gray-900">Order Summary</h4>
                      <span className="text-lg font-bold text-indigo-600">{formatCurrency(totalPrice)}</span>
                    </div>
                    
                    <div className="bg-gray-50 p-3 rounded-lg">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Subtotal ({totalItems} items)</span>
                        <span>{formatCurrency(subtotal)}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Taxes & Charges</span>
                        <span>{formatCurrency(gstTax + environmentCharge + platformCharge)}</span>
                      </div>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-600">Delivery</span>
                        <span>{formatCurrency(deliveryCharge)}</span>
                      </div>
                      {discount > 0 && (
                        <div className="flex justify-between text-sm text-green-600">
                          <span>Discount</span>
                          <span>-{formatCurrency(discount)}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-gray-900 mb-4">Payment Method</h4>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div 
                        className={`border rounded-xl p-4 cursor-pointer transition-all ${
                          paymentMethod === "full" ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => {
                          setPaymentMethod("full");
                          setSelectedEMIPlan(null);
                        }}
                      >
                        <div className="flex items-start">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 mr-3 ${
                            paymentMethod === "full" ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                          }`}>
                            {paymentMethod === "full" && <div className="w-2 h-2 bg-white rounded-full m-auto"></div>}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">Full Payment</h4>
                            <p className="text-sm text-gray-500 mt-1">Pay the entire amount</p>
                            <p className="text-sm font-medium text-gray-900 mt-2">
                              {formatCurrency(totalPrice)}
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div 
                        className={`border rounded-xl p-4 cursor-pointer transition-all ${
                          paymentMethod === "emi" ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                        onClick={() => {
                          if (subtotal >= 3000) {
                            setPaymentMethod("emi");
                            setSelectedEMIPlan(emiPlans.filter(plan => totalPrice >= plan.minAmount)[0]);
                          } else {
                            showNotificationAlert("EMI available for orders above ₹3,000", "error");
                          }
                        }}
                      >
                        <div className="flex items-start">
                          <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 mr-3 ${
                            paymentMethod === "emi" ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                          }`}>
                            {paymentMethod === "emi" && <div className="w-2 h-2 bg-white rounded-full m-auto"></div>}
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-900">EMI</h4>
                            <p className="text-sm text-gray-500 mt-1">Pay in monthly installments</p>
                            {subtotal >= 3000 ? (
                              <p className="text-sm font-medium text-gray-900 mt-2">
                                From {formatCurrency(Math.ceil(totalPrice / 12))}/month
                              </p>
                            ) : (
                              <p className="text-xs text-red-600 mt-2">
                                Available for orders above ₹3,000
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {paymentMethod === "emi" && (
                      <div className="mb-6 bg-white p-4 rounded-lg border border-gray-200">
                        <h5 className="font-medium text-gray-900 mb-3">Select EMI Plan</h5>
                        
                        <div className="grid grid-cols-2 gap-3">
                          {emiPlans.filter(plan => totalPrice >= plan.minAmount).map((plan, index) => {
                            const monthlyAmount = Math.ceil(calculateEMI(totalPrice, plan.interestRate, plan.months));
                            const totalAmount = monthlyAmount * plan.months;
                            const interestAmount = totalAmount - totalPrice;
                            
                            return (
                              <div 
                                key={index}
                                className={`border rounded-lg p-3 cursor-pointer transition-all ${
                                  selectedEMIPlan?.months === plan.months ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => setSelectedEMIPlan(plan)}
                              >
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-medium text-gray-900">{plan.months} Months</span>
                                  {plan.interestRate === 0 && (
                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                      No Interest
                                    </span>
                                  )}
                                </div>
                                
                                <div className="text-lg font-bold text-indigo-600">
                                  {formatCurrency(monthlyAmount)}<span className="text-sm text-gray-500">/mo</span>
                                </div>
                                
                                <div className="mt-2 text-xs text-gray-500">
                                  <div className="flex justify-between mb-1">
                                    <span>Interest Rate:</span>
                                    <span>{plan.interestRate}% p.a.</span>
                                  </div>
                                  <div className="flex justify-between mb-1">
                                    <span>Processing Fee:</span>
                                    <span>{formatCurrency(plan.bankProcessingFee)}</span>
                                  </div>
                                  {interestAmount > 0 && (
                                    <div className="flex justify-between mb-1">
                                      <span>Total Interest:</span>
                                      <span>{formatCurrency(interestAmount)}</span>
                                    </div>
                                  )}
                                  <div className="flex justify-between font-medium">
                                    <span>Total Amount:</span>
                                    <span>{formatCurrency(totalAmount + plan.bankProcessingFee)}</span>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                        
                        <p className="text-xs text-gray-500 mt-3">
                          *Bank processing fees apply. Bank terms and conditions apply.
                        </p>
                      </div>
                    )}
                    
                    <div className="mb-6">
                      <h5 className="font-medium text-gray-900 mb-3">Payment Details</h5>
                      
                      {savedCards.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm text-gray-600 mb-2">Saved Cards</p>
                          
                          <div className="space-y-3">
                            {savedCards.map(card => (
                              <div 
                                key={card.id}
                                className={`border rounded-lg p-3 cursor-pointer transition-all ${
                                  selectedCard === card.id ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                                }`}
                                onClick={() => setSelectedCard(card.id)}
                              >
                                <div className="flex items-center">
                                  <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mr-3 ${
                                    selectedCard === card.id ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                                  }`}>
                                    {selectedCard === card.id && <div className="w-2 h-2 bg-white rounded-full m-auto"></div>}
                                  </div>
                                  
                                  <div className="flex items-center">
                                    <div className="mr-3">
                                      {card.type === 'visa' ? (
                                        <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-bold">VISA</div>
                                      ) : (
                                        <div className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-bold">MC</div>
                                      )}
                                    </div>
                                    <div>
                                      <p className="font-medium text-gray-900">{card.number}</p>
                                      <p className="text-xs text-gray-500">Expires {card.expiry}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
                            
                            <div 
                              className={`border rounded-lg p-3 cursor-pointer transition-all ${
                                selectedCard === null ? "border-indigo-500 bg-indigo-50" : "border-gray-200 hover:border-gray-300"
                              }`}
                              onClick={() => setSelectedCard(null)}
                            >
                              <div className="flex items-center">
                                <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mr-3 ${
                                  selectedCard === null ? "border-indigo-500 bg-indigo-500" : "border-gray-300"
                                }`}>
                                  {selectedCard === null && <div className="w-2 h-2 bg-white rounded-full m-auto"></div>}
                                </div>
                                <span className="text-indigo-600 font-medium">Use a new card</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {selectedCard === null && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number
                            </label>
                            <div className="relative">
                              <input
                                type="text"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(formatCardNumber(e.target.value).substring(0, 19))}
                                placeholder="1234 5678 9012 3456"
                                className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
                              />
                              <FiCreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            </div>
                          </div>
                          
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Cardholder Name
                            </label>
                            <input
                              type="text"
                              value={cardName}
                              onChange={(e) => setCardName(e.target.value)}
                              placeholder="John Doe"
                              className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                Expiry Date
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={cardExpiry}
                                  onChange={(e) => setCardExpiry(formatExpiryDate(e.target.value).substring(0, 5))}
                                  placeholder="MM/YY"
                                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
                                />
                                <FiCalendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              </div>
                            </div>
                            
                            <div>
                              <label className="block text-sm font-medium text-gray-700 mb-1">
                                CVV
                              </label>
                              <div className="relative">
                                <input
                                  type="text"
                                  value={cardCVV}
                                  onChange={(e) => setCardCVV(e.target.value.replace(/\D/g, '').substring(0, 3))}
                                  placeholder="123"
                                  className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 pl-10"
                                />
                                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              id="save-card"
                              checked={saveCard}
                              onChange={(e) => setSaveCard(e.target.checked)}
                              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label htmlFor="save-card" className="ml-2 block text-sm text-gray-700">
                              Save this card for future payments
                            </label>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-green-600">
                      <FiLock className="mr-2" />
                      <span className="text-sm">Secure Payment</span>
                    </div>
                    
                    <button
                      onClick={handleProcessPayment}
                      disabled={processingPayment}
                      className={`px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium transition-colors flex items-center ${
                        processingPayment ? 'opacity-70 cursor-not-allowed' : 'hover:bg-indigo-700'
                      }`}
                    >
                      {processingPayment ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                          Processing...
                        </>
                      ) : (
                        <>
                          Pay {formatCurrency(paymentMethod === 'emi' && selectedEMIPlan ? 
                            Math.ceil(calculateEMI(totalPrice, selectedEMIPlan.interestRate, selectedEMIPlan.months)) : 
                            totalPrice
                          )}
                          {paymentMethod === 'emi' && selectedEMIPlan && ' now'}
                        </>
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;