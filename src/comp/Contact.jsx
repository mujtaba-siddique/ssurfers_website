import React, { useState, useRef } from "react";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value.trim();
    const email = emailRef.current.value.trim();
    const message = messageRef.current.value.trim();

    // Validation: Check if name has at least two words (space between them)
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!name || name.split(" ").length < 2 || !nameRegex.test(name)) {
      setErrorMessage("Please enter a valid full name (at least two words, letters and spaces only).");
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    // Validation: Check if message is a string and not empty or just whitespace
    if (!message || message.length === 0) {
      setErrorMessage("Please enter a valid message.");
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    // Validation: Check if email is filled (optional: you can add more validation for email format if needed)
    if (!email) {
      setErrorMessage("Please enter your email address.");
      setShowError(true);
      setShowSuccess(false);
      return;
    }

    // If all validations pass, show success message
    setShowError(false);
    setShowSuccess(true);
    setErrorMessage('');
    
    // Clear the form fields
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        
        {/* Error and Success Message Box */}
        {(showError || showSuccess) && (
          <div
            className={`${
              showError ? 'bg-red-100 border-red-400 text-red-700' : 'bg-green-100 border-green-400 text-green-700'
            } px-3 py-2 rounded relative mb-4 text-sm sm:text-base`}
            role="alert"
          >
            <strong className="font-bold">
              {showError ? "Error!" : "Message Sent!"}
            </strong>
            <span className="block sm:inline">{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              className="w-full p-2 mt-2 bg-slate-100 rounded-md text-black focus:outline-none"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              className="w-full p-2 mt-2 bg-slate-100 rounded-md text-black focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              ref={messageRef}
              rows="4"
              className="w-full p-2 mt-2 bg-slate-100 rounded-md text-black focus:outline-none"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-40 bg-black text-white py-2 rounded-md hover:bg-slate-700 transition-colors sm:ml-80 sm:mt-5"
          >
            Send Message
          </button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-3xl font-semibold mb-6">Contact Info</h2>
        <p>If you prefer, you can contact us through the following:</p>
        <ul className="mt-4 space-y-3">
          <li>
            <strong>Email:</strong> contact@email.com
          </li>
          <li>
            <strong>Phone:</strong> +91 7678990987
          </li>
          <li>
            <strong>Address:</strong> 123 Majra, Dehradun, India
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
