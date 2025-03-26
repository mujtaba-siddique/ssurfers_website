import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FiShoppingCart, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
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
    reviews: 142
  },
  {
    id: 2,
    image: Product2,
    price: 37999,
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
    reviews: 89
  },
  {
    id: 3,
    image: Product3,
    price: 32999,
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
    reviews: 67
  },
  {
    id: 4,
    image: Product4,
    price: 28999,
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
    reviews: 204
  },
  {
    id: 5,
    image: Product5,
    price: 49999,
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
    reviews: 56
  },
  {
    id: 6,
    image: Product6,
    price: 41999,
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
    reviews: 78
  },
  {
    id: 7,
    image: Product7,
    price: 52999,
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
    reviews: 34
  },
  {
    id: 8,
    image: Product8,
    price: 36999,
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
    reviews: 123
  }
];

function ProductDetail() {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));
  const navigate = useNavigate();

  // Scroll to top when component mounts or productId changes
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, [productId]);

  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    window.dispatchEvent(new Event("cartUpdated"));
    
    alert(`${product.name} added to cart!`);
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate("/cart");
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Navigation Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-800 transition-colors group"
          >
            <FiArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Explore More Boards</span>
          </button>
        </div>

        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Image Gallery */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-contain transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[1,2,3,4].map((img) => (
                <div 
                  key={img}
                  className="bg-gray-100 rounded-xl p-2 cursor-pointer hover:ring-2 ring-blue-500 transition-all"
                >
                  <img
                    src={product.image}
                    alt={`Thumbnail ${img}`}
                    className="w-full h-20 object-contain opacity-75 hover:opacity-100"
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
              <div className="flex items-center mt-4 space-x-4">
                <div className="flex items-center bg-blue-100 px-3 py-1 rounded-full">
                  <span className="text-blue-600 font-medium">⭐ {product.rating}</span>
                  <span className="text-gray-600 ml-1">({product.reviews})</span>
                </div>
                <span className="text-gray-600">•</span>
                <span className="text-green-600 font-medium">In Stock</span>
              </div>
            </div>

            {/* Pricing Section */}
            <div className="bg-blue-50 rounded-xl p-6">
              <div className="flex items-end space-x-4">
                <span className="text-4xl font-bold text-gray-900">
                  ₹{product.price.toLocaleString("en-IN")}
                </span>
                <span className="text-gray-600 line-through">₹{Math.round(product.price*1.2).toLocaleString("en-IN")}</span>
                <span className="text-green-600 font-medium bg-green-100 px-2 py-1 rounded">
                  20% OFF
                </span>
              </div>
              <p className="mt-2 text-gray-600">EMI starts at ₹{Math.round(product.price/12).toLocaleString("en-IN")}/month</p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-gray-900">Key Features</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white p-4 rounded-xl shadow-sm">
                    <FiCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleAddToCart}
                className="flex-1 flex items-center justify-center px-8 py-3.5 bg-gray-900 text-white rounded-xl hover:bg-gray-800 transition-all group"
              >
                <FiShoppingCart className="mr-3 transform group-hover:scale-110 transition-transform" />
                <span className="font-medium">Add to Cart</span>
              </button>
              <button
                onClick={handleBuyNow}
                className="flex-1 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-lg transition-all"
              >
                Buy Now
              </button>
            </div>

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Length</span>
                  <span className="text-gray-900 font-medium">{product.specs.length}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Volume</span>
                  <span className="text-gray-900 font-medium">{product.specs.volume}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Fin System</span>
                  <span className="text-gray-900 font-medium">{product.specs.fin}</span>
                </div>
                <div className="flex justify-between py-2 border-b">
                  <span className="text-gray-600">Weight</span>
                  <span className="text-gray-900 font-medium">{product.specs.weight}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16 border-t border-gray-200 pt-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">More Surfboards</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.filter(p => p.id !== product.id).slice(0,4).map(related => (
              <div 
                key={related.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
                onClick={() => navigate(`/product/${related.id}`)}
              >
                <div className="p-4">
                  <img
                    src={related.image}
                    alt={related.name}
                    className="w-full h-48 object-contain transform group-hover:scale-105 transition-transform"
                  />
                </div>
                <div className="p-4 border-t">
                  <h4 className="font-semibold text-gray-900">{related.name}</h4>
                  <p className="text-sm text-gray-600 mt-1">{related.type}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-lg font-bold text-gray-900">₹{related.price.toLocaleString("en-IN")}</span>
                    <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">⭐ {related.rating}</span>
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