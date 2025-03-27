import React from "react";
import Aboutus from "../assets/about_us.webp";
import { 
  CheckBadgeIcon, 
  HeartIcon, 
  UsersIcon, 
  ChartBarIcon,
  LightBulbIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/outline";

function About() {
  const teamMembers = [
    { 
      name: "Sarah Johnson", 
      role: "CEO & Founder", 
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Visionary leader with 15+ years in tech innovation"
    },
    { 
      name: "Michael Chen", 
      role: "CTO", 
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Full-stack expert and systems architect"
    },
    { 
      name: "Emma Wilson", 
      role: "Lead Designer", 
      img: "https://randomuser.me/api/portraits/women/25.jpg",
      bio: "Award-winning UI/UX specialist"
    },
    { 
      name: "David Miller", 
      role: "Marketing Head", 
      img: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Digital strategy maestro"
    },
  ];

  const stats = [
    { value: "12+", label: "Years Experience", icon: ChartBarIcon },
    { value: "500+", label: "Projects Completed", icon: CheckBadgeIcon },
    { value: "98%", label: "Client Satisfaction", icon: HeartIcon },
    { value: "50+", label: "Team Members", icon: UsersIcon },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Transforming Ideas Into <span className="text-blue-600">Digital Reality</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A dedicated team of innovators crafting exceptional digital experiences since 2012
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 relative">
              <img 
                src={Aboutus} 
                alt="Our team" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg hidden md:block">
                <span className="block text-2xl font-bold text-blue-600">12+</span>
                <span className="text-gray-600">Years Experience</span>
              </div>
            </div>
            
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                We combine technical expertise with creative vision to deliver solutions that 
                drive real business results. Our client-centric approach ensures we become 
                an extension of your team, not just another vendor.
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              The foundation of everything we create
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <LightBulbIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Pushing boundaries with cutting-edge solutions</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <HandThumbUpIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integrity</h3>
              <p className="text-gray-600">Transparent and ethical business practices</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                <UsersIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Building partnerships, not just projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet The Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Diverse expertise united by a passion for excellence
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img 
                    src={member.img} 
                    alt={member.name}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-300"
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
            Ready to Start Your Project?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your business goals with custom digital solutions.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}

export default About;