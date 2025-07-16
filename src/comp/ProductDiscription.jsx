
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { 
//   FiShoppingCart, 
//   FiArrowLeft, 
//   FiCheckCircle, 
//   FiPlus, 
//   FiMinus, 
//   FiTruck, 
//   FiAlertTriangle, 
//   FiClock,
//   FiStar,
//   FiHeart,
//   FiShare2,
//   FiShield
// } from "react-icons/fi";

// // Product Images
// import Product1 from "../assets/product_surfboard_1.webp";
// import Product2 from "../assets/product_surfboard_2.webp";
// import Product3 from "../assets/product_surfboard_3.webp";
// import Product4 from "../assets/product_surfboard_4.webp";
// import Product5 from "../assets/product_surfboard_5.webp";
// import Product6 from "../assets/product_surfboard_7.webp";
// import Product7 from "../assets/product_surfboard_8.webp";
// import Product8 from "../assets/product_surfboard_2.webp";

// const products = [
//   {
//     id: 1,
//     image: Product1,
//     price: 45999,
//     originalPrice: 54999,
//     name: "HydroGlide Pro",
//     type: "Performance Shortboard",
//     description: "Premium carbon fiber reinforced shortboard designed for critical waves and radical maneuvers. Perfect for advanced surfers looking for maximum responsiveness.",
//     features: [
//       "Carbon fiber/Epoxy composite",
//       "Triple concave bottom contour",
//       "FCS II fin system compatible",
//       "DHD traction pad included",
//       "Weight: 6.1kg | Volume: 28L",
//       "Dimensions: 6'0 x 18 3/4 x 2 1/8"
//     ],
//     specs: {
//       length: "6'0",
//       width: "18 3/4",
//       thickness: "2 1/8",
//       volume: "28L",
//       fin: "FCS II",
//       weight: "6.1kg"
//     },
//     rating: 4.8,
//     reviews: 142,
//     freeDelivery: true,
//     limitedStock: false,
//     deliveryFee: 0,
//     colors: ["#3B82F6", "#10B981", "#F59E0B"],
//     sizes: ["5'8", "5'10", "6'0", "6'2"]
//   },
//   {
//     id: 2,
//     image: Product2,
//     price: 37999,
//     originalPrice: 44999,
//     name: "WaveCarver XR",
//     type: "All-Round Funboard",
//     description: "Versatile funboard that performs exceptionally well in small to medium waves. Ideal for surfers progressing from beginner to intermediate levels.",
//     features: [
//       "Epoxy resin construction",
//       "Wide stable outline",
//       "Single to double concave bottom",
//       "Includes 3-fin setup",
//       "Weight: 7.8kg | Volume: 42L",
//       "Dimensions: 7'2 x 21 1/4 x 2 3/4"
//     ],
//     specs: {
//       length: "7'2",
//       width: "21 1/4",
//       thickness: "2 3/4",
//       volume: "42L",
//       fin: "Future Fins",
//       weight: "7.8kg"
//     },
//     rating: 4.6,
//     reviews: 89,
//     freeDelivery: false,
//     limitedStock: true,
//     deliveryFee: 500,
//     colors: ["#6366F1", "#EC4899", "#F97316"],
//     sizes: ["6'8", "7'0", "7'2", "7'4"],
//     lastFewItems: 3
//   },
//   {
//     id: 3,
//     image: Product3,
//     price: 32999,
//     originalPrice: 39999,
//     name: "EcoRider Bamboo",
//     type: "Eco-Friendly Longboard",
//     description: "Sustainable bamboo construction longboard with classic noserider design. Environmentally conscious choice for soul surfers.",
//     features: [
//       "Bamboo/Epoxy composite",
//       "Traditional single fin setup",
//       "Soft rounded rails",
//       "Eco-friendly materials",
//       "Weight: 8.2kg | Volume: 55L",
//       "Dimensions: 9'2 x 23 x 3"
//     ],
//     specs: {
//       length: "9'2",
//       width: "23",
//       thickness: "3",
//       volume: "55L",
//       fin: "9.5\" Single Fin",
//       weight: "8.2kg"
//     },
//     rating: 4.7,
//     reviews: 67,
//     freeDelivery: true,
//     limitedStock: false,
//     deliveryFee: 0,
//     colors: ["#84CC16", "#F59E0B", "#78716C"],
//     sizes: ["8'10", "9'0", "9'2", "9'4"]
//   },
//   {
//     id: 4,
//     image: Product4,
//     price: 28999,
//     originalPrice: 34999,
//     name: "Beginner's Bliss",
//     type: "Foam Top Softboard",
//     description: "Ultra-stable soft-top surfboard perfect for learning basics. Soft foam construction ensures safety and durability.",
//     features: [
//       "Soft EVA foam deck",
//       "HDPE slick bottom",
//       "2+1 fin configuration",
//       "Leash included",
//       "Weight: 6.5kg | Volume: 65L",
//       "Dimensions: 8'0 x 22 x 3"
//     ],
//     specs: {
//       length: "8'0",
//       width: "22",
//       thickness: "3",
//       volume: "65L",
//       fin: "2+1 Thruster",
//       weight: "6.5kg"
//     },
//     rating: 4.5,
//     reviews: 204,
//     freeDelivery: false,
//     limitedStock: true,
//     deliveryFee: 300,
//     colors: ["#06B6D4", "#EF4444", "#8B5CF6"],
//     sizes: ["7'6", "7'10", "8'0", "8'6"],
//     lastFewItems: 5
//   },
//   {
//     id: 5,
//     image: Product5,
//     price: 49999,
//     originalPrice: 59999,
//     name: "AeroWave Carbon",
//     type: "High-Performance Shortboard",
//     description: "Ultra-light carbon fiber shortboard designed for competitive surfing. Used by pro surfers in WSL events.",
//     features: [
//       "Aerospace-grade carbon fiber",
//       "Quad concave bottom design",
//       "Carbon rail reinforcements",
//       "Pro traction pad included",
//       "Weight: 5.8kg | Volume: 26L",
//       "Dimensions: 5'11 x 18 1/2 x 2 1/4"
//     ],
//     specs: {
//       length: "5'11",
//       width: "18 1/2",
//       thickness: "2 1/4",
//       volume: "26L",
//       fin: "FCS II Performance",
//       weight: "5.8kg"
//     },
//     rating: 4.9,
//     reviews: 56,
//     freeDelivery: true,
//     limitedStock: false,
//     deliveryFee: 0,
//     colors: ["#000000", "#64748B", "#B91C1C"],
//     sizes: ["5'8", "5'10", "5'11", "6'0"]
//   },
//   {
//     id: 6,
//     image: Product6,
//     price: 41999,
//     originalPrice: 49999,
//     name: "Retro Fish",
//     type: "Retro Fish Surfboard",
//     description: "Modern take on the classic 70s fish design. Excellent for small wave performance and retro styling.",
//     features: [
//       "Swallow tail design",
//       "Dual concave bottom",
//       "Quad fin setup",
//       "Retro color scheme",
//       "Weight: 6.3kg | Volume: 34L",
//       "Dimensions: 6'3 x 20 3/4 x 2 1/2"
//     ],
//     specs: {
//       length: "6'3",
//       width: "20 3/4",
//       thickness: "2 1/2",
//       volume: "34L",
//       fin: "Quad Setup",
//       weight: "6.3kg"
//     },
//     rating: 4.7,
//     reviews: 78,
//     freeDelivery: false,
//     limitedStock: true,
//     deliveryFee: 700,
//     colors: ["#F59E0B", "#10B981", "#3B82F6"],
//     sizes: ["5'10", "6'0", "6'2", "6'4"]
//   },
//   {
//     id: 7,
//     image: Product7,
//     price: 52999,
//     originalPrice: 64999,
//     name: "Big Wave Gun",
//     type: "Tow-in Surfboard",
//     description: "Specialized gun board for big wave charging. Designed for waves over 20 feet.",
//     features: [
//       "Narrow pintail design",
//       "Heavy glassing construction",
//       "5-fin box setup",
//       "Reinforced carbon stringer",
//       "Weight: 7.1kg | Volume: 31L",
//       "Dimensions: 7'6 x 18 x 2 3/4"
//     ],
//     specs: {
//       length: "7'6",
//       width: "18",
//       thickness: "2 3/4",
//       volume: "31L",
//       fin: "5-Fin Compatible",
//       weight: "7.1kg"
//     },
//     rating: 4.8,
//     reviews: 34,
//     freeDelivery: true,
//     limitedStock: true,
//     deliveryFee: 0,
//     colors: ["#1E293B", "#B91C1C", "#334155"],
//     sizes: ["7'0", "7'4", "7'6", "7'8"],
//     lastFewItems: 2
//   },
//   {
//     id: 8,
//     image: Product8,
//     price: 36999,
//     originalPrice: 44999,
//     name: "Mini Malibu",
//     type: "Mid-Length Cruiser",
//     description: "Perfect blend of longboard stability and shortboard maneuverability. Great for small days and cruisey surfing.",
//     features: [
//       "Rounded nose design",
//       "2+1 fin configuration",
//       "Soft rails for smooth transitions",
//       "Includes nose guard",
//       "Weight: 7.5kg | Volume: 48L",
//       "Dimensions: 7'8 x 21 1/2 x 2 3/4"
//     ],
//     specs: {
//       length: "7'8",
//       width: "21 1/2",
//       thickness: "2 3/4",
//       volume: "48L",
//       fin: "2+1 Thruster",
//       weight: "7.5kg"
//     },
//     rating: 4.6,
//     reviews: 123,
//     freeDelivery: false,
//     limitedStock: true,
//     deliveryFee: 600,
//     colors: ["#F43F5E", "#8B5CF6", "#0EA5E9"],
//     sizes: ["7'0", "7'4", "7'6", "7'8"]
//   }
// ];

// function ProductDetail() {
//   const { productId } = useParams();
//   const product = products.find(p => p.id === parseInt(productId));
//   const navigate = useNavigate();
  
//   // State management
//   const [quantity, setQuantity] = useState(1);
//   const [showConfirmation, setShowConfirmation] = useState(false);
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [selectedColor, setSelectedColor] = useState(null);
//   const [selectedSize, setSelectedSize] = useState(null);
//   const [isWishlisted, setIsWishlisted] = useState(false);
//   const [isAnimating, setIsAnimating] = useState(false);

//   // Initialize component
//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
    
//     if (product) {
//       setSelectedColor(product.colors?.[0]);
//       setSelectedSize(product.sizes?.[0]);
//     }
//   }, [productId]);

//   // Handle quantity changes with animation
//   const handleQuantityChange = (newQuantity) => {
//     if (newQuantity < 1 || newQuantity > 10) return;
    
//     setIsAnimating(true);
//     setQuantity(newQuantity);
    
//     setTimeout(() => {
//       setIsAnimating(false);
//     }, 300);
//   };

//   // Add item to cart
//   const handleAddToCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItemIndex = cartItems.findIndex(item => 
//       item.id === product.id && 
//       item.selectedColor === selectedColor &&
//       item.selectedSize === selectedSize
//     );
    
//     if (existingItemIndex >= 0) {
//       cartItems[existingItemIndex].quantity += quantity;
//     } else {
//       const productWithQuantity = { 
//         ...product, 
//         quantity,
//         selectedColor,
//         selectedSize,
//         isFreeDelivery: product.freeDelivery,
//         deliveryFee: product.freeDelivery ? 0 : product.deliveryFee || 0
//       };
//       cartItems.push(productWithQuantity);
//     }
    
//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     window.dispatchEvent(new Event("cartUpdated"));
    
//     setShowConfirmation(true);
//     setTimeout(() => setShowConfirmation(false), 3000);
//   };

//   // Proceed to checkout
//   const handleBuyNow = () => {
//     handleAddToCart();
//     navigate("/cart");
//   };

//   // Toggle wishlist status
//   const toggleWishlist = () => {
//     setIsWishlisted(!isWishlisted);
//     // Add to wishlist logic here
//   };

//   // Product not found handling
//   if (!product) {
//     return (
//       <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
//         <div className="text-center max-w-md">
//           <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
//           <p className="text-gray-600 mb-8">The requested product does not exist in our collection.</p>
//           <button 
//             onClick={() => navigate(-1)}
//             className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
//           >
//             <FiArrowLeft className="mr-2" />
//             Back to Shop
//           </button>
//         </div>
//       </div>
//     );
//   }

//   // Calculate pricing information
//   const totalPrice = product.price * quantity;
//   const discountPrice = product.originalPrice || Math.round(product.price * 1.2);
//   const emiAmount = Math.round(totalPrice / 12);
//   const savings = discountPrice - product.price;
//   const progressWidth = Math.min((quantity/10)*100, 100);

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
//       {/* Confirmation Toast */}
//       {showConfirmation && (
//         <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
//           <div className="bg-green-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-2">
//             <FiCheckCircle className="text-xl" />
//             <span>{quantity} × {product.name} added to cart!</span>
//           </div>
//         </div>
//       )}
      
//       <div className="max-w-7xl mx-auto">
//         {/* Navigation Header */}
//         <div className="mb-8">
//           <button
//             onClick={() => navigate(-1)}
//             className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
//           >
//             <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
//             <span className="font-medium">Back to Collection</span>
//           </button>
//         </div>

//         {/* Main Product Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
//           {/* Image Gallery */}
//           <div className="space-y-6">
//             <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative">
//               {/* Badges */}
//               <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
//                 {product.freeDelivery && (
//                   <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md">
//                     <FiTruck className="mr-1" /> Free Delivery
//                   </div>
//                 )}
//                 {!product.freeDelivery && (
//                   <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md">
//                     <FiTruck className="mr-1" /> ₹{product.deliveryFee} Delivery
//                   </div>
//                 )}
//                 {product.limitedStock && (
//                   <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md ${
//                     product.lastFewItems ? 'bg-red-600 text-white' : 'bg-amber-400 text-gray-900'
//                   }`}>
//                     {product.lastFewItems ? (
//                       <>
//                         <FiAlertTriangle className="mr-1" /> Only {product.lastFewItems} left!
//                       </>
//                     ) : (
//                       <>
//                         <FiClock className="mr-1" /> Limited Stock
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>
              
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-96 object-contain transform hover:scale-105 transition-transform duration-500"
//               />
//             </div>
//             <div className="grid grid-cols-4 gap-4">
//               {[1,2,3,4].map((img, index) => (
//                 <div 
//                   key={img}
//                   className={`bg-gray-100 rounded-xl p-2 cursor-pointer transition-all ${
//                     selectedImage === index ? 'ring-2 ring-blue-500' : 'hover:ring-1 ring-gray-300'
//                   }`}
//                   onClick={() => setSelectedImage(index)}
//                 >
//                   <img
//                     src={product.image}
//                     alt={`Thumbnail ${img}`}
//                     className={`w-full h-20 object-contain ${
//                       selectedImage === index ? 'opacity-100' : 'opacity-75 hover:opacity-100'
//                     }`}
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Product Details */}
//           <div className="space-y-8">
//             {/* Product Header */}
//             <div>
//               <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
//               <p className="text-lg text-gray-600 mt-2">{product.type}</p>
//               <div className="flex items-center mt-4 space-x-4">
//                 <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
//                   <FiStar className="text-yellow-400 mr-1" />
//                   <span className="text-blue-600 font-medium">{product.rating}</span>
//                   <span className="text-gray-600 ml-1">({product.reviews} reviews)</span>
//                 </div>
//                 <span className="text-gray-400">•</span>
//                 <span className="text-green-600 font-medium flex items-center">
//                   <FiCheckCircle className="mr-1" /> In Stock
//                 </span>
//               </div>
//             </div>

//             {/* Description */}
//             <div className="prose max-w-none text-gray-700">
//               <p>{product.description}</p>
//             </div>

//             {/* Color Selection */}
//             {product.colors && (
//               <div className="space-y-3">
//                 <h3 className="text-lg font-medium text-gray-900">Color</h3>
//                 <div className="flex space-x-3">
//                   {product.colors.map((color, index) => (
//                     <button
//                       key={index}
//                       className={`w-10 h-10 rounded-full border-2 transition-all ${
//                         selectedColor === color ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
//                       }`}
//                       style={{ backgroundColor: color }}
//                       onClick={() => setSelectedColor(color)}
//                       aria-label={`Select color ${index + 1}`}
//                     >
//                       {selectedColor === color && (
//                         <div className="w-full h-full rounded-full flex items-center justify-center bg-white bg-opacity-20">
//                           <FiCheckCircle className="text-white" />
//                         </div>
//                       )}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Size Selection */}
//             {product.sizes && (
//               <div className="space-y-3">
//                 <h3 className="text-lg font-medium text-gray-900">Size</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {product.sizes.map((size, index) => (
//                     <button
//                       key={index}
//                       className={`px-4 py-2 border rounded-lg transition-all ${
//                         selectedSize === size 
//                           ? 'bg-blue-600 text-white border-blue-600' 
//                           : 'bg-white text-gray-800 border-gray-300 hover:border-blue-300'
//                       }`}
//                       onClick={() => setSelectedSize(size)}
//                     >
//                       {size}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Pricing Section */}
//             <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
//               <div className="flex items-end space-x-4">
//                 <span className="text-4xl font-bold text-gray-900">
//                   ₹{totalPrice.toLocaleString("en-IN")}
//                 </span>
//                 {quantity > 1 && (
//                   <span className="text-sm text-gray-600">
//                     (₹{product.price.toLocaleString("en-IN")} each)
//                   </span>
//                 )}
//               </div>
//               <div className="flex items-center mt-2">
//                 {product.originalPrice && (
//                   <>
//                     <span className="text-gray-500 line-through mr-2">₹{discountPrice.toLocaleString("en-IN")}</span>
//                     <span className="text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded-md text-sm">
//                       Save ₹{savings.toLocaleString("en-IN")}
//                     </span>
//                   </>
//                 )}
//               </div>
//               <p className="mt-3 text-gray-600">
//                 EMI available: ₹{emiAmount.toLocaleString("en-IN")}/month (12 months)
//               </p>
//             </div>

//             {/* Enhanced Quantity Selector */}
//             <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
//               <div className="flex items-center justify-between mb-3">
//                 <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
//                 <div className="flex items-center">
//                   <span className={`text-sm font-medium ${
//                     quantity >= 8 ? 'text-amber-600' : 'text-gray-500'
//                   }`}>
//                     {10 - quantity} remaining
//                   </span>
//                   {quantity >= 8 && (
//                     <FiAlertTriangle className="ml-1 text-amber-600" />
//                   )}
//                 </div>
//               </div>
              
//               <div className="flex items-center">
//                 <button 
//                   onClick={() => handleQuantityChange(quantity - 1)}
//                   className={`p-3 border border-gray-300 rounded-l-xl transition-all duration-200 ${
//                     quantity <= 1 
//                       ? 'text-gray-300 cursor-not-allowed' 
//                       : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
//                   }`}
//                   disabled={quantity <= 1}
//                   aria-label="Decrease quantity"
//                 >
//                   <FiMinus className="w-5 h-5" />
//                 </button>
                
//                 <div 
//                   className={`px-4 py-2 border-t border-b border-gray-300 bg-gray-50 text-center w-20 font-medium text-lg relative ${
//                     isAnimating ? 'scale-110' : 'scale-100'
//                   } transition-transform duration-300`}
//                   aria-live="polite"
//                 >
//                   {quantity}
//                   <div className="absolute inset-x-0 -bottom-1 flex justify-center">
//                     <div 
//                       className="h-1 bg-blue-200 rounded-full transition-all duration-300"
//                       style={{ width: `${progressWidth}%` }}
//                     />
//                   </div>
//                 </div>
                
//                 <button 
//                   onClick={() => handleQuantityChange(quantity + 1)}
//                   className={`p-3 border border-gray-300 rounded-r-xl transition-all duration-200 ${
//                     quantity >= 10 
//                       ? 'text-gray-300 cursor-not-allowed' 
//                       : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
//                   }`}
//                   disabled={quantity >= 10}
//                   aria-label="Increase quantity"
//                 >
//                   <FiPlus className="w-5 h-5" />
//                 </button>
//               </div>
              
//               <div className="mt-4 flex items-center justify-between text-sm">
//                 <span className="text-gray-500">
//                   {quantity === 10 ? (
//                     <span className="text-red-600 font-medium">
//                       <FiAlertTriangle className="inline mr-1" />
//                       Maximum quantity reached
//                     </span>
//                   ) : quantity >= 8 ? (
//                     <span className="text-amber-600">
//                       <FiAlertTriangle className="inline mr-1" />
//                       Approaching purchase limit
//                     </span>
//                   ) : (
//                     'Max 10 per customer'
//                   )}
//                 </span>
//                 <span className="text-gray-400 text-xs">
//                   (Total: ₹{(product.price * quantity).toLocaleString('en-IN')})
//                 </span>
//               </div>
//             </div>

//             {/* Features List */}
//             <div className="space-y-4">
//               <h3 className="text-2xl font-semibold text-gray-900">Key Features</h3>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                 {product.features.map((feature, index) => (
//                   <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
//                     <div className="bg-blue-100 p-1 rounded-full mr-3">
//                       <FiCheckCircle className="text-blue-600 text-lg" />
//                     </div>
//                     <span className="text-gray-700">{feature}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Action Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 mt-8">
//               <button
//                 onClick={handleAddToCart}
//                 className="flex-1 flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all group shadow-lg hover:shadow-xl"
//               >
//                 <FiShoppingCart className="mr-3 text-xl transform group-hover:scale-110 transition-transform" />
//                 <span className="font-medium">Add to Cart ({quantity})</span>
//               </button>
//               <button
//                 onClick={handleBuyNow}
//                 className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-xl transition-all shadow-lg hover:from-blue-700 hover:to-cyan-600"
//               >
//                 <span className="font-medium">Buy Now</span>
//               </button>
//             </div>

//             {/* Secondary Actions */}
//             <div className="flex justify-center space-x-6 mt-4">
//               <button 
//                 onClick={toggleWishlist}
//                 className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
//                   isWishlisted ? 'text-red-500' : 'text-gray-600 hover:text-red-500'
//                 }`}
//               >
//                 <FiHeart className={isWishlisted ? 'fill-current' : ''} />
//                 <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
//               </button>
//               <button className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors">
//                 <FiShare2 />
//                 <span>Share</span>
//               </button>
//             </div>

//             {/* Delivery Info */}
//             <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 mt-6">
//               <div className="flex items-start">
//                 <div className="bg-blue-100 p-2 rounded-lg mr-4">
//                   <FiTruck className="text-blue-600 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-900 mb-1">Delivery Information</h4>
//                   <p className="text-gray-600 text-sm">
//                     {product.freeDelivery ? (
//                       "Free delivery on this item. Expected delivery in 3-5 business days."
//                     ) : (
//                       `Delivery charge: ₹${product.deliveryFee}. Expected delivery in 5-7 business days.`
//                     )}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Guarantee Section */}
//             <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 mt-4">
//               <div className="flex items-start">
//                 <div className="bg-green-100 p-2 rounded-lg mr-4">
//                   <FiShield className="text-green-600 text-xl" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium text-gray-900 mb-1">30-Day Satisfaction Guarantee</h4>
//                   <p className="text-gray-600 text-sm">
//                     If you're not completely satisfied, return it within 30 days for a full refund.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Specifications */}
//             <div className="bg-white rounded-xl shadow-sm p-6 mt-6 border border-gray-100">
//               <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {Object.entries(product.specs).map(([key, value]) => (
//                   <div key={key} className="flex justify-between py-3 border-b border-gray-100">
//                     <span className="text-gray-600 capitalize">{key}</span>
//                     <span className="text-gray-900 font-medium">{value}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Related Products */}
//         <div className="mt-16 border-t border-gray-200 pt-16">
//           <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">You May Also Like</h3>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {products
//               .filter(p => p.id !== product.id)
//               .slice(0, 4)
//               .map(related => (
//                 <div 
//                   key={related.id}
//                   className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group overflow-hidden border border-gray-100"
//                   onClick={() => navigate(`/product/${related.id}`)}
//                 >
//                   <div className="relative h-60 overflow-hidden">
//                     <img
//                       src={related.image}
//                       alt={related.name}
//                       className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
//                     />
//                     {/* Badges for related products */}
//                     <div className="absolute top-2 left-2 flex flex-col space-y-1">
//                       {related.freeDelivery && (
//                         <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
//                           Free Delivery
//                         </span>
//                       )}
//                       {related.limitedStock && (
//                         <span className={`text-xs px-2 py-1 rounded-full ${
//                           related.lastFewItems ? 'bg-red-600 text-white' : 'bg-amber-400 text-gray-900'
//                         }`}>
//                           {related.lastFewItems ? `Only ${related.lastFewItems} left` : 'Limited'}
//                         </span>
//                       )}
//                     </div>
//                   </div>
//                   <div className="p-4 border-t border-gray-100">
//                     <h4 className="font-semibold text-gray-900 line-clamp-1">{related.name}</h4>
//                     <p className="text-sm text-gray-600 mt-1 line-clamp-1">{related.type}</p>
//                     <div className="flex items-center justify-between mt-4">
//                       <div>
//                         <span className="text-lg font-bold text-gray-900">₹{related.price.toLocaleString("en-IN")}</span>
//                         {related.originalPrice && (
//                           <span className="text-sm text-gray-400 line-through ml-2">
//                             ₹{related.originalPrice.toLocaleString("en-IN")}
//                           </span>
//                         )}
//                       </div>
//                       <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
//                         ⭐ {related.rating}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ProductDetail;



import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { 
  FiShoppingCart, 
  FiArrowLeft, 
  FiCheckCircle, 
  FiPlus, 
  FiMinus, 
  FiTruck, 
  FiAlertTriangle, 
  FiClock,
  FiStar,
  FiHeart,
  FiShare2,
  FiShield,
  FiFacebook,
  FiTwitter,
  FiLink,
  FiMessageSquare
} from "react-icons/fi";

// Product Images (same as before)
import Product1 from "../assets/product_surfboard_1.webp";
import Product2 from "../assets/product_surfboard_2.webp";
import Product3 from "../assets/product_surfboard_3.webp";
import Product4 from "../assets/product_surfboard_4.webp";
import Product5 from "../assets/product_surfboard_5.webp";
import Product6 from "../assets/product_surfboard_7.webp";
import Product7 from "../assets/product_surfboard_8.webp";
import Product8 from "../assets/product_surfboard_2.webp";

const products = [
  {
    id: 1,
    image: Product1,
    price: 45999,
    originalPrice: 54999,
    name: "HydroGlide Pro",
    type: "Performance Shortboard",
    description: "Premium carbon fiber reinforced shortboard designed for critical waves and radical maneuvers. Perfect for advanced surfers looking for maximum responsiveness.",
    features: [
      "Carbon fiber/Epoxy composite",
      "Triple concave bottom contour",
      "FCS II fin system compatible",
      "DHD traction pad included",
      "Weight: 6.1kg | Volume: 28L",
      "Dimensions: 6'0 x 18 3/4 x 2 1/8"
    ],
    specs: {
      length: "6'0",
      width: "18 3/4",
      thickness: "2 1/8",
      volume: "28L",
      fin: "FCS II",
      weight: "6.1kg"
    },
    rating: 4.8,
    reviews: 142,
    freeDelivery: true,
    limitedStock: false,
    deliveryFee: 0,
    colors: ["#3B82F6", "#10B981", "#F59E0B"],
    sizes: ["5'8", "5'10", "6'0", "6'2"]
  },
  {
    id: 2,
    image: Product2,
    price: 37999,
    originalPrice: 44999,
    name: "WaveCarver XR",
    type: "All-Round Funboard",
    description: "Versatile funboard that performs exceptionally well in small to medium waves. Ideal for surfers progressing from beginner to intermediate levels.",
    features: [
      "Epoxy resin construction",
      "Wide stable outline",
      "Single to double concave bottom",
      "Includes 3-fin setup",
      "Weight: 7.8kg | Volume: 42L",
      "Dimensions: 7'2 x 21 1/4 x 2 3/4"
    ],
    specs: {
      length: "7'2",
      width: "21 1/4",
      thickness: "2 3/4",
      volume: "42L",
      fin: "Future Fins",
      weight: "7.8kg"
    },
    rating: 4.6,
    reviews: 89,
    freeDelivery: false,
    limitedStock: true,
    deliveryFee: 500,
    colors: ["#6366F1", "#EC4899", "#F97316"],
    sizes: ["6'8", "7'0", "7'2", "7'4"],
    lastFewItems: 3
  },
  {
    id: 3,
    image: Product3,
    price: 32999,
    originalPrice: 39999,
    name: "EcoRider Bamboo",
    type: "Eco-Friendly Longboard",
    description: "Sustainable bamboo construction longboard with classic noserider design. Environmentally conscious choice for soul surfers.",
    features: [
      "Bamboo/Epoxy composite",
      "Traditional single fin setup",
      "Soft rounded rails",
      "Eco-friendly materials",
      "Weight: 8.2kg | Volume: 55L",
      "Dimensions: 9'2 x 23 x 3"
    ],
    specs: {
      length: "9'2",
      width: "23",
      thickness: "3",
      volume: "55L",
      fin: "9.5\" Single Fin",
      weight: "8.2kg"
    },
    rating: 4.7,
    reviews: 67,
    freeDelivery: true,
    limitedStock: false,
    deliveryFee: 0,
    colors: ["#84CC16", "#F59E0B", "#78716C"],
    sizes: ["8'10", "9'0", "9'2", "9'4"]
  },
  {
    id: 4,
    image: Product4,
    price: 28999,
    originalPrice: 34999,
    name: "Beginner's Bliss",
    type: "Foam Top Softboard",
    description: "Ultra-stable soft-top surfboard perfect for learning basics. Soft foam construction ensures safety and durability.",
    features: [
      "Soft EVA foam deck",
      "HDPE slick bottom",
      "2+1 fin configuration",
      "Leash included",
      "Weight: 6.5kg | Volume: 65L",
      "Dimensions: 8'0 x 22 x 3"
    ],
    specs: {
      length: "8'0",
      width: "22",
      thickness: "3",
      volume: "65L",
      fin: "2+1 Thruster",
      weight: "6.5kg"
    },
    rating: 4.5,
    reviews: 204,
    freeDelivery: false,
    limitedStock: true,
    deliveryFee: 300,
    colors: ["#06B6D4", "#EF4444", "#8B5CF6"],
    sizes: ["7'6", "7'10", "8'0", "8'6"],
    lastFewItems: 5
  },
  {
    id: 5,
    image: Product5,
    price: 49999,
    originalPrice: 59999,
    name: "AeroWave Carbon",
    type: "High-Performance Shortboard",
    description: "Ultra-light carbon fiber shortboard designed for competitive surfing. Used by pro surfers in WSL events.",
    features: [
      "Aerospace-grade carbon fiber",
      "Quad concave bottom design",
      "Carbon rail reinforcements",
      "Pro traction pad included",
      "Weight: 5.8kg | Volume: 26L",
      "Dimensions: 5'11 x 18 1/2 x 2 1/4"
    ],
    specs: {
      length: "5'11",
      width: "18 1/2",
      thickness: "2 1/4",
      volume: "26L",
      fin: "FCS II Performance",
      weight: "5.8kg"
    },
    rating: 4.9,
    reviews: 56,
    freeDelivery: true,
    limitedStock: false,
    deliveryFee: 0,
    colors: ["#000000", "#64748B", "#B91C1C"],
    sizes: ["5'8", "5'10", "5'11", "6'0"]
  },
  {
    id: 6,
    image: Product6,
    price: 41999,
    originalPrice: 49999,
    name: "Retro Fish",
    type: "Retro Fish Surfboard",
    description: "Modern take on the classic 70s fish design. Excellent for small wave performance and retro styling.",
    features: [
      "Swallow tail design",
      "Dual concave bottom",
      "Quad fin setup",
      "Retro color scheme",
      "Weight: 6.3kg | Volume: 34L",
      "Dimensions: 6'3 x 20 3/4 x 2 1/2"
    ],
    specs: {
      length: "6'3",
      width: "20 3/4",
      thickness: "2 1/2",
      volume: "34L",
      fin: "Quad Setup",
      weight: "6.3kg"
    },
    rating: 4.7,
    reviews: 78,
    freeDelivery: false,
    limitedStock: true,
    deliveryFee: 700,
    colors: ["#F59E0B", "#10B981", "#3B82F6"],
    sizes: ["5'10", "6'0", "6'2", "6'4"]
  },
  {
    id: 7,
    image: Product7,
    price: 52999,
    originalPrice: 64999,
    name: "Big Wave Gun",
    type: "Tow-in Surfboard",
    description: "Specialized gun board for big wave charging. Designed for waves over 20 feet.",
    features: [
      "Narrow pintail design",
      "Heavy glassing construction",
      "5-fin box setup",
      "Reinforced carbon stringer",
      "Weight: 7.1kg | Volume: 31L",
      "Dimensions: 7'6 x 18 x 2 3/4"
    ],
    specs: {
      length: "7'6",
      width: "18",
      thickness: "2 3/4",
      volume: "31L",
      fin: "5-Fin Compatible",
      weight: "7.1kg"
    },
    rating: 4.8,
    reviews: 34,
    freeDelivery: true,
    limitedStock: true,
    deliveryFee: 0,
    colors: ["#1E293B", "#B91C1C", "#334155"],
    sizes: ["7'0", "7'4", "7'6", "7'8"],
    lastFewItems: 2
  },
  {
    id: 8,
    image: Product8,
    price: 36999,
    originalPrice: 44999,
    name: "Mini Malibu",
    type: "Mid-Length Cruiser",
    description: "Perfect blend of longboard stability and shortboard maneuverability. Great for small days and cruisey surfing.",
    features: [
      "Rounded nose design",
      "2+1 fin configuration",
      "Soft rails for smooth transitions",
      "Includes nose guard",
      "Weight: 7.5kg | Volume: 48L",
      "Dimensions: 7'8 x 21 1/2 x 2 3/4"
    ],
    specs: {
      length: "7'8",
      width: "21 1/2",
      thickness: "2 3/4",
      volume: "48L",
      fin: "2+1 Thruster",
      weight: "7.5kg"
    },
    rating: 4.6,
    reviews: 123,
    freeDelivery: false,
    limitedStock: true,
    deliveryFee: 600,
    colors: ["#F43F5E", "#8B5CF6", "#0EA5E9"],
    sizes: ["7'0", "7'4", "7'6", "7'8"]
  }
];


function ProductDetail() {
  // Router hooks
  const { productId } = useParams();
  const navigate = useNavigate();
  
  // Find the current product
  const product = products.find(p => p.id === parseInt(productId));
  
  // State management
  const [quantity, setQuantity] = useState(1);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showShareOptions, setShowShareOptions] = useState(false);
  const [showLinkCopied, setShowLinkCopied] = useState(false);

  // Initialize component
  useEffect(() => {
    // Scroll to top on load
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
    
    // Initialize selected variants
    if (product) {
      setSelectedColor(product.colors?.[0]);
      setSelectedSize(product.sizes?.[0]);
      checkWishlistStatus();
    }
  }, [productId]);

  // Check if product is in wishlist
  const checkWishlistStatus = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const exists = wishlist.some(item => item.id === product.id);
    setIsWishlisted(exists);
  };

  // Enhanced Wishlist Logic
  const toggleWishlist = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    const productIndex = wishlist.findIndex(item => item.id === product.id);

    if (productIndex === -1) {
      // Add to wishlist with selected variants
      const productToAdd = { 
        ...product,
        selectedColor,
        selectedSize,
        addedAt: new Date().toISOString()
      };
      wishlist.push(productToAdd);
      setIsWishlisted(true);
      
      // Show feedback
      setShowConfirmation(true);
      setTimeout(() => setShowConfirmation(false), 3000);
    } else {
      // Remove from wishlist
      wishlist.splice(productIndex, 1);
      setIsWishlisted(false);
    }

    // Update storage and notify other components
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    window.dispatchEvent(new Event("wishlistUpdated"));
  };

  // Handle quantity changes with animation
  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1 || newQuantity > 10) return;
    
    setIsAnimating(true);
    setQuantity(newQuantity);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 300);
  };

  // Add item to cart
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex(item => 
      item.id === product.id && 
      item.selectedColor === selectedColor &&
      item.selectedSize === selectedSize
    );
    
    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      const productWithQuantity = { 
        ...product, 
        quantity,
        selectedColor,
        selectedSize,
        isFreeDelivery: product.freeDelivery,
        deliveryFee: product.freeDelivery ? 0 : product.deliveryFee || 0
      };
      cartItems.push(productWithQuantity);
    }
    
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
    
    setShowConfirmation(true);
    setTimeout(() => setShowConfirmation(false), 3000);
  };

  // Proceed to checkout
  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

  // Advanced Share Functionality
  const handleShare = (platform) => {
    const productUrl = window.location.href;
    const shareText = `Check out this ${product.name} - ${product.type}`;

    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(productUrl)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(`${shareText} ${productUrl}`)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(productUrl);
        setShowLinkCopied(true);
        setTimeout(() => setShowLinkCopied(false), 2000);
        break;
    }
    setShowShareOptions(false);
  };

  // Share Dropdown Component
  const ShareDropdown = () => (
    <div className="absolute z-20 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100">
      <button
        onClick={() => handleShare('facebook')}
        className="flex items-center w-full px-4 py-3 hover:bg-blue-50 text-gray-700"
      >
        <FiFacebook className="mr-3 text-blue-600" />
        Facebook
      </button>
      <button
        onClick={() => handleShare('twitter')}
        className="flex items-center w-full px-4 py-3 hover:bg-blue-50 text-gray-700"
      >
        <FiTwitter className="mr-3 text-blue-400" />
        Twitter
      </button>
      <button
        onClick={() => handleShare('whatsapp')}
        className="flex items-center w-full px-4 py-3 hover:bg-blue-50 text-gray-700"
      >
        <FiMessageSquare className="mr-3 text-green-500" />
        WhatsApp
      </button>
      <button
        onClick={() => handleShare('copy')}
        className="flex items-center w-full px-4 py-3 hover:bg-blue-50 text-gray-700"
      >
        <FiLink className="mr-3 text-gray-500" />
        Copy Link
      </button>
    </div>
  );

  // Product not found handling
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Not Found</h2>
          <p className="text-gray-600 mb-8">The requested product does not exist in our collection.</p>
          <button 
            onClick={() => navigate(-1)}
            className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center mx-auto"
          >
            <FiArrowLeft className="mr-2" />
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

  // Calculate pricing information
  const totalPrice = product.price * quantity;
  const discountPrice = product.originalPrice || Math.round(product.price * 1.2);
  const emiAmount = Math.round(totalPrice / 12);
  const savings = discountPrice - product.price;
  const progressWidth = Math.min((quantity/10)*100, 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Confirmation Toast */}
      {showConfirmation && (
        <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
          <div className={`px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-2 ${
            isWishlisted ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
          }`}>
            <FiCheckCircle className="text-xl" />
            <span>
              {isWishlisted 
                ? `Added to Wishlist!` 
                : `${quantity} × ${product.name} added to cart!`
              }
            </span>
          </div>
        </div>
      )}
      
      {/* Link Copied Toast */}
      {showLinkCopied && (
        <div className="fixed top-20 right-4 z-50 animate-fade-in-down">
          <div className="bg-blue-600 text-white px-6 py-3 rounded-xl shadow-2xl flex items-center space-x-2">
            <FiLink className="text-xl" />
            <span>Product link copied to clipboard!</span>
          </div>
        </div>
      )}
      
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Collection</span>
          </button>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 relative">
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col space-y-2 z-10">
                {product.freeDelivery && (
                  <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md">
                    <FiTruck className="mr-1" /> Free Delivery
                  </div>
                )}
                {!product.freeDelivery && (
                  <div className="bg-gray-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md">
                    <FiTruck className="mr-1" /> ₹{product.deliveryFee} Delivery
                  </div>
                )}
                {product.limitedStock && (
                  <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center shadow-md ${
                    product.lastFewItems ? 'bg-red-600 text-white' : 'bg-amber-400 text-gray-900'
                  }`}>
                    {product.lastFewItems ? (
                      <>
                        <FiAlertTriangle className="mr-1" /> Only {product.lastFewItems} left!
                      </>
                    ) : (
                      <>
                        <FiClock className="mr-1" /> Limited Stock
                      </>
                    )}
                  </div>
                )}
              </div>
              
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map((img, index) => (
                <div 
                  key={img}
                  className={`bg-gray-100 rounded-xl p-2 cursor-pointer transition-all ${
                    selectedImage === index ? 'ring-2 ring-blue-500' : 'hover:ring-1 ring-gray-300'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <img
                    src={product.image}
                    alt={`Thumbnail ${img}`}
                    className={`w-full h-20 object-contain ${
                      selectedImage === index ? 'opacity-100' : 'opacity-75 hover:opacity-100'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Product Header */}
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{product.type}</p>
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <FiStar className="text-yellow-400 mr-1" />
                  <span className="text-blue-600 font-medium">{product.rating}</span>
                  <span className="text-gray-600 ml-1">({product.reviews} reviews)</span>
                </div>
                <span className="text-gray-400">•</span>
                <span className="text-green-600 font-medium flex items-center">
                  <FiCheckCircle className="mr-1" /> In Stock
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="prose max-w-none text-gray-700">
              <p>{product.description}</p>
            </div>

            {/* Color Selection */}
            {product.colors && (
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900">Color</h3>
                <div className="flex space-x-3">
                  {product.colors.map((color, index) => (
                    <button
                      key={index}
                      className={`w-10 h-10 rounded-full border-2 transition-all ${
                        selectedColor === color ? 'border-blue-500' : 'border-transparent hover:border-gray-300'
                      }`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                      aria-label={`Select color ${index + 1}`}
                    >
                      {selectedColor === color && (
                        <div className="w-full h-full rounded-full flex items-center justify-center bg-white bg-opacity-20">
                          <FiCheckCircle className="text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && (
              <div className="space-y-3">
                <h3 className="text-lg font-medium text-gray-900">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size, index) => (
                    <button
                      key={index}
                      className={`px-4 py-2 border rounded-lg transition-all ${
                        selectedSize === size 
                          ? 'bg-blue-600 text-white border-blue-600' 
                          : 'bg-white text-gray-800 border-gray-300 hover:border-blue-300'
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Section */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
              <div className="flex items-end space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{totalPrice.toLocaleString("en-IN")}
                </span>
                {quantity > 1 && (
                  <span className="text-sm text-gray-600">
                    (₹{product.price.toLocaleString("en-IN")} each)
                  </span>
                )}
              </div>
              <div className="flex items-center mt-2">
                {product.originalPrice && (
                  <>
                    <span className="text-gray-500 line-through mr-2">₹{discountPrice.toLocaleString("en-IN")}</span>
                    <span className="text-green-600 font-medium bg-green-100 px-2 py-0.5 rounded-md text-sm">
                      Save ₹{savings.toLocaleString("en-IN")}
                    </span>
                  </>
                )}
              </div>
              <p className="mt-3 text-gray-600">
                EMI available: ₹{emiAmount.toLocaleString("en-IN")}/month (12 months)
              </p>
            </div>

            {/* Enhanced Quantity Selector */}
            <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-medium text-gray-900">Quantity</h3>
                <div className="flex items-center">
                  <span className={`text-sm font-medium ${
                    quantity >= 8 ? 'text-amber-600' : 'text-gray-500'
                  }`}>
                    {10 - quantity} remaining
                  </span>
                  {quantity >= 8 && (
                    <FiAlertTriangle className="ml-1 text-amber-600" />
                  )}
                </div>
              </div>
              
              <div className="flex items-center">
                <button 
                  onClick={() => handleQuantityChange(quantity - 1)}
                  className={`p-3 border border-gray-300 rounded-l-xl transition-all duration-200 ${
                    quantity <= 1 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                  disabled={quantity <= 1}
                  aria-label="Decrease quantity"
                >
                  <FiMinus className="w-5 h-5" />
                </button>
                
                <div 
                  className={`px-4 py-2 border-t border-b border-gray-300 bg-gray-50 text-center w-20 font-medium text-lg relative ${
                    isAnimating ? 'scale-110' : 'scale-100'
                  } transition-transform duration-300`}
                  aria-live="polite"
                >
                  {quantity}
                  <div className="absolute inset-x-0 -bottom-1 flex justify-center">
                    <div 
                      className="h-1 bg-blue-200 rounded-full transition-all duration-300"
                      style={{ width: `${progressWidth}%` }}
                    />
                  </div>
                </div>
                
                <button 
                  onClick={() => handleQuantityChange(quantity + 1)}
                  className={`p-3 border border-gray-300 rounded-r-xl transition-all duration-200 ${
                    quantity >= 10 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-600 hover:bg-gray-50 active:bg-gray-100'
                  }`}
                  disabled={quantity >= 10}
                  aria-label="Increase quantity"
                >
                  <FiPlus className="w-5 h-5" />
                </button>
              </div>
              
              <div className="mt-4 flex items-center justify-between text-sm">
                <span className="text-gray-500">
                  {quantity === 10 ? (
                    <span className="text-red-600 font-medium">
                      <FiAlertTriangle className="inline mr-1" />
                      Maximum quantity reached
                    </span>
                  ) : quantity >= 8 ? (
                    <span className="text-amber-600">
                      <FiAlertTriangle className="inline mr-1" />
                      Approaching purchase limit
                    </span>
                  ) : (
                    'Max 10 per customer'
                  )}
                </span>
                <span className="text-gray-400 text-xs">
                  (Total: ₹{(product.price * quantity).toLocaleString('en-IN')})
                </span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors">
                    <div className="bg-blue-100 p-1 rounded-full mr-3">
                      <FiCheckCircle className="text-blue-600 text-lg" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center px-8 py-4 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all group shadow-lg hover:shadow-xl"
              >
                <FiShoppingCart className="mr-3 text-xl transform group-hover:scale-110 transition-transform" />
                <span className="font-medium">Add to Cart ({quantity})</span>
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-xl transition-all shadow-lg hover:from-blue-700 hover:to-cyan-600"
              >
                <span className="font-medium">Buy Now</span>
              </button>
            </div>

            {/* Secondary Actions */}
            <div className="flex justify-center space-x-6 mt-4 relative">
              <button 
                onClick={toggleWishlist}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  isWishlisted ? 'text-red-500 bg-red-50' : 'text-gray-600 hover:text-red-500'
                }`}
              >
                <FiHeart className={`${isWishlisted ? 'fill-red-500' : ''}`} />
                <span>{isWishlisted ? 'Wishlisted' : 'Add to Wishlist'}</span>
              </button>
              
              <div className="relative">
                <button 
                  onClick={() => setShowShareOptions(!showShareOptions)}
                  className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-blue-600 rounded-lg transition-colors"
                >
                  <FiShare2 />
                  <span>Share</span>
                </button>
                {showShareOptions && <ShareDropdown />}
              </div>
            </div>

            {/* Delivery Info */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 mt-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <FiTruck className="text-blue-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">Delivery Information</h4>
                  <p className="text-gray-600 text-sm">
                    {product.freeDelivery ? (
                      "Free delivery on this item. Expected delivery in 3-5 business days."
                    ) : (
                      `Delivery charge: ₹${product.deliveryFee}. Expected delivery in 5-7 business days.`
                    )}
                  </p>
                </div>
              </div>
            </div>

            {/* Guarantee Section */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 mt-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-2 rounded-lg mr-4">
                  <FiShield className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-1">30-Day Satisfaction Guarantee</h4>
                  <p className="text-gray-600 text-sm">
                    If you're not completely satisfied, return it within 30 days for a full refund.
                  </p>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-6 border border-gray-100">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-600 capitalize">{key}</span>
                    <span className="text-gray-900 font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">You May Also Like</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 4)
              .map(related => (
                <div 
                  key={related.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group overflow-hidden border border-gray-100"
                  onClick={() => navigate(`/product/${related.id}`)}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={related.image}
                      alt={related.name}
                      className="w-full h-full object-contain p-4 transform group-hover:scale-110 transition-transform duration-500"
                    />
                    {/* Badges for related products */}
                    <div className="absolute top-2 left-2 flex flex-col space-y-1">
                      {related.freeDelivery && (
                        <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-full">
                          Free Delivery
                        </span>
                      )}
                      {related.limitedStock && (
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          related.lastFewItems ? 'bg-red-600 text-white' : 'bg-amber-400 text-gray-900'
                        }`}>
                          {related.lastFewItems ? `Only ${related.lastFewItems} left` : 'Limited'}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-4 border-t border-gray-100">
                    <h4 className="font-semibold text-gray-900 line-clamp-1">{related.name}</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-1">{related.type}</p>
                    <div className="flex items-center justify-between mt-4">
                      <div>
                        <span className="text-lg font-bold text-gray-900">₹{related.price.toLocaleString("en-IN")}</span>
                        {related.originalPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">
                            ₹{related.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>
                      <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                        ⭐ {related.rating}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;