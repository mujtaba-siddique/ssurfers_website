import React, { useState, useRef, useEffect } from "react";
import { FiUser, FiMail, FiMessageSquare } from "react-icons/fi";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: ""
  });
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  // Auto-dismiss alerts after 1 second
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showSuccess) setShowSuccess(false);
      if (showError) setShowError("");
    }, 1000);
    return () => clearTimeout(timer);
  }, [showSuccess, showError]);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validateForm = () => {
    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();
    let isValid = true;
    const errors = {
      name: "",
      email: "",
      message: ""
    };

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!validateEmail(email)) {
      errors.email = "Please enter a valid email";
      isValid = false;
    }

    if (!message) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!validateForm()) {
      setShowError("Please fix the errors in the form");
      return;
    }

    // Form is valid - proceed with submission
    const formData = {
      name: nameRef.current.value.trim(),
      email: emailRef.current.value.trim(),
      message: messageRef.current.value.trim()
    };

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);

    // Reset form
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
    
    setShowSuccess(true);
    setShowError("");
    setFormErrors({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-600">We'd love to hear from you</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl p-8">
          {/* Contact Form */}
          <div className="space-y-8">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="space-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiUser className="mr-2 h-5 w-5" />
                  Full Name
                </label>
                <input
                  type="text"
                  ref={nameRef}
                  className={`w-full px-4 py-3 border ${formErrors.name ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500`}
                  placeholder="John Doe"
                />
                {formErrors.name && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiMail className="mr-2 h-5 w-5" />
                  Email Address
                </label>
                <input
                  type="email"
                  ref={emailRef}
                  className={`w-full px-4 py-3 border ${formErrors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500`}
                  placeholder="john@example.com"
                />
                {formErrors.email && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>
                )}
              </div>

              <div className="space-y-1">
                <label className="flex items-center text-sm font-medium text-gray-700">
                  <FiMessageSquare className="mr-2 h-5 w-5" />
                  Your Message
                </label>
                <textarea
                  ref={messageRef}
                  rows="5"
                  className={`w-full px-4 py-3 border ${formErrors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white text-gray-900 placeholder-gray-500`}
                  placeholder="How can we help you?"
                ></textarea>
                {formErrors.message && (
                  <p className="text-red-500 text-xs mt-1">{formErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity font-medium"
              >
                Send Message
              </button>
            </form>

            {/* Error Alert */}
            {showError && (
              <div className="fixed bottom-4 right-4 bg-red-50 border-l-4 border-red-500 p-4 animate-slide-in">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-red-500">⚠</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{showError}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Success Alert */}
            {showSuccess && (
              <div className="fixed bottom-4 right-4 bg-green-50 border-l-4 border-green-500 p-4 animate-slide-in">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <span className="text-green-500">✓</span>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-green-700">Message sent successfully!</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:pl-12 space-y-8">
            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">Email</p>
                  <p className="text-gray-900 font-medium">support@surfhub.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">Phone</p>
                  <p className="text-gray-900 font-medium">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-gray-600">Address</p>
                  <p className="text-gray-900 font-medium">
                    123 Surf Street<br/>
                    Coastal Road<br/>
                    Goa, India 403722
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Visit Us</h3>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  title="Google Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61513.71416024182!2d73.74981581645776!3d15.50339410171674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba106336b741%3A0xedc887a63aa4bd26!2sNorth%20Goa%2C%20Goa!5e0!3m2!1sen!2sin!4v1718786264511!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;