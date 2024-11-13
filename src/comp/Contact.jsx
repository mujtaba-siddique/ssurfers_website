import React, { useState, useRef } from "react";

function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;   
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!name || !email || !message) {
      setShowError(true);
      setShowSuccess(false);
    } else {
      setShowError(false);
      setShowSuccess(true);

      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-8">
      <div className="bg-white p-6 rounded-lg shadow-md text-black">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
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

      {showError && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-3 py-2 rounded relative mt-4 sm:mt-6 text-sm sm:text-base"
          role="alert"
        >
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline">Please fill in all fields.</span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-5 w-5 text-red-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setShowError(false)}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>
      )}

      {showSuccess && (
        <div
          className="bg-green-100 border border-green-400 text-green-700 px-3 py-2 rounded relative mt-4 sm:mt-6 text-sm sm:text-base"
          role="alert"
        >
          <strong className="font-bold">Message Sent!</strong>
          <span className="block sm:inline">
            Your message has been sent to the database.
          </span>
          <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg
              className="fill-current h-5 w-5 text-green-500"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              onClick={() => setShowSuccess(false)}
            >
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
            </svg>
          </span>
        </div>
      )}

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
