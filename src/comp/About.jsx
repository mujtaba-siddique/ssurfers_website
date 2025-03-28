import React from "react";
import { 
  TruckIcon, 
  ShieldCheckIcon, 
  UserGroupIcon, 
  CurrencyDollarIcon,
  StarIcon,
  ChatBubbleBottomCenterTextIcon
} from "@heroicons/react/24/outline";

function About() {
  // High-quality full images
  const WarehouseImage = "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";
  
  const teamMembers = [
    { 
      name: "Emily Carter", 
      role: "CEO & Founder", 
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Retail visionary with 10+ years in online commerce"
    },
    { 
      name: "James Park", 
      role: "Operations Head", 
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Supply chain and logistics expert"
    },
    { 
      name: "Sophia Rodriguez", 
      role: "Lead Buyer", 
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Product curation specialist"
    },
    { 
      name: "Liam Smith", 
      role: "Customer Support Lead", 
      img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      bio: "Dedicated to exceptional service"
    },
  ];

  const stats = [
    { value: "500K+", label: "Happy Customers", icon: UserGroupIcon },
    { value: "24/7", label: "Customer Support", icon: ChatBubbleBottomCenterTextIcon },
    { value: "10M+", label: "Products Available", icon: CurrencyDollarIcon },
    { value: "98%", label: "Satisfaction Rate", icon: StarIcon },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Redefining <span className="text-blue-600">Online Shopping</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted destination for quality products and seamless shopping experiences since 2015
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative">
              <img 
                src={WarehouseImage} 
                alt="Our warehouse" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <span className="block text-2xl font-bold text-blue-600">500K+</span>
                <span className="text-gray-600">Happy Customers</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Shop With Us?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine competitive pricing with exceptional customer service to bring you 
                the best online shopping experience. Our carefully curated selection and 
                fast reliable delivery make us your perfect retail partner.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-xl shadow-sm">
                    <stat.icon className="h-8 w-8 text-blue-600 mr-4" />
                    <div>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Shopping Promise</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The commitments that define our service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <StarIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assured</h3>
              <p className="text-gray-600">Rigorous quality checks on every product</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <TruckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Reliable shipping with real-time tracking</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Shopping</h3>
              <p className="text-gray-600">100% secure payment processing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Full Pictures */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Retail Experts</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              A team passionate about perfecting your shopping experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
                <div className="relative h-96 w-full overflow-hidden">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-blue-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Shopping Today!
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Discover our curated collection and experience the difference of truly customer-focused e-commerce.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Explore Products
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;