import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { FiMessageSquare } from "react-icons/fi";
import { MdClose, MdSend } from "react-icons/md";
import Info from "./comp/Info";
import Navbar from "./comp/Navbar";
import Slider from "./comp/Home";
import Products from "./comp/ProductsList";
import Surfboards from "./comp/Surfboards";
import Contact from "./comp/Contact";
import Blog from "./comp/Blog";
import Bagpack from "./comp/Bagpack";
import About from "./comp/About";
import Footer from "./comp/Footer";
import ProductDetail from "./comp/ProductDiscription";
import Cart from "./comp/Cart";
import ReadMore from "./comp/ReadMore";
import LearnMoreAboutSurfing from "./comp/LearnMoreAboutSurfing";
import LearnMoreAboutBlog from "./comp/LearnMoreAboutBlog";
import "./App.css";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [language, setLanguage] = useState(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Language-based content
  const content = {
    hindi: {
      quickQuestions: [
        "शिपिंग जानकारी?",
        "भुगतान विकल्प?",
        "वारंटी विवरण?",
        "रिटर्न नीति?",
        "उत्पाद जानकारी",
        "संपर्क विवरण"
      ],
      placeholder: "अपना प्रश्न यहाँ टाइप करें...",
      typing: "टाइप कर रहे हैं...",
      defaultResponse: "हमें आपके प्रश्न को समझने में कुछ समस्या हुई। कृपया नीचे दिए गए विकल्पों में से चुनें:",
      welcome: "नमस्ते! सर्फहब सहायक आपकी सेवा में 🏄"
    },
    english: {
      quickQuestions: [
        "Shipping Info?",
        "Payment Options?",
        "Warranty Details?",
        "Return Policy?",
        "Product Information",
        "Contact Details"
      ],
      placeholder: "Type your question here...",
      typing: "Typing...",
      defaultResponse: "I'm having trouble understanding your question. Please choose from the options below:",
      welcome: "Hello! SurfHub Assistant at your service 🏄"
    }
  };

  // Enhanced Knowledge Base
  const qna = {
    hindi: {
      shipping: "🚚 शिपिंग नीति:\n• 3-5 कार्यदिवस डिलीवरी\n• रीयल-टाइम ट्रैकिंग\n• 30-दिन की रिटर्न नीति\n• डिलीवरी स्थिति जानने के लिए ऑर्डर आईडी दर्ज करें",
      payment: "💳 भुगतान विकल्प:\n• क्रेडिट/डेबिट कार्ड\n• UPI (PhonePe/Google Pay)\n• नेट बैंकिंग\n• EMI विकल्प\n• COD (₹2000 तक)",
      warranty: "🔧 वारंटी जानकारी:\n• 1 वर्ष निर्माता वारंटी\n• 6 महीने एक्सेसरीज वारंटी\n• वारंटी क्लेम के लिए सपोर्ट@surfhub.com पर मेल करें",
      products: "🏄 उत्पाद रेंज:\n• शॉर्टबोर्ड (5'6\" - 6'8\")\n• लॉन्गबोर्ड (8'0\" - 9'6\")\n• वेटसूट (2mm से 5mm)\n• सर्फिंग एक्सेसरीज किट",
      contact: "📞 संपर्क:\n• टोल फ्री: 1800-123-4567\n• व्हाट्सएप: +91 98765 43210\n• ईमेल: support@surfhub.com\n• कार्यालय समय: सोम-शनि (सुबह 10:00 - शाम 6:00)",
      returns: "🔄 रिटर्न प्रक्रिया:\n1. ऑर्डर आईडी के साथ रिटर्न अनुरोध करें\n2. मूल पैकेजिंग में वापस करें\n3. 3-5 कार्यदिवसों में रिफंड\n4. निःशुल्क पिकअप सेवा",
      materials: "🌿 उपयोग की सामग्री:\n• 100% इको-फ्रेंडली एपॉक्सी रेजिन\n• मिलिट्री-ग्रेड कार्बन फाइबर\n• यूवी-रेजिस्टेंट कोटिंग\n• फूड-ग्रेड नियोप्रीन (वेटसूट)",
      sizing: "📏 साइज़ गाइड:\n• सर्फबोर्ड: लंबाई × चौड़ाई × मोटाई\n• वेटसूट: ऊंचाई और वजन के अनुसार\n• सभी उत्पादों के लिए विस्तृत माप चार्ट उपलब्ध"
    },
    english: {
      shipping: "🚚 Shipping Policy:\n• 3-5 business days delivery\n• Real-time tracking\n• 30-day return policy\n• Enter Order ID to check status",
      payment: "💳 Payment Options:\n• Credit/Debit Cards\n• UPI (PhonePe/Google Pay)\n• Net Banking\n• EMI Options\n• COD (up to ₹2000)",
      warranty: "🔧 Warranty Details:\n• 1 Year Manufacturer Warranty\n• 6 Months Accessories Warranty\n• Email support@surfhub.com for claims",
      products: "🏄 Product Range:\n• Shortboards (5'6\" - 6'8\")\n• Longboards (8'0\" - 9'6\")\n• Wetsuits (2mm to 5mm)\n• Surfing Accessories Kit",
      contact: "📞 Contact Us:\n• Toll Free: 1800-123-4567\n• WhatsApp: +91 98765 43210\n• Email: support@surfhub.com\n• Office Hours: Mon-Sat (10 AM - 6 PM)",
      returns: "🔄 Return Process:\n1. Request return with Order ID\n2. Return in original packaging\n3. Refund in 3-5 business days\n4. Free pickup service",
      materials: "🌿 Materials Used:\n• 100% Eco-friendly Epoxy Resin\n• Military-grade Carbon Fiber\n• UV-resistant Coating\n• Food-grade Neoprene (Wetsuits)",
      sizing: "📏 Sizing Guide:\n• Surfboards: Length × Width × Thickness\n• Wetsuits: Based on height/weight\n• Detailed size charts available for all products"
    }
  };

  // Keyword mapping for better understanding
  const keywordMap = {
    shipping: ['shipping', 'delivery', 'track', 'dispatch', 'समय', 'शिपिंग', 'डिलीवरी', 'ट्रैक'],
    payment: ['payment', 'pay', 'emi', 'cod', 'भुगतान', 'ईएमआई', 'कैश'],
    warranty: ['warranty', 'guarantee', 'claim', 'वारंटी', 'गारंटी', 'क्लेम'],
    products: ['product', 'board', 'wetsuit', 'accessories', 'उत्पाद', 'सर्फबोर्ड', 'वेटसूट'],
    contact: ['contact', 'call', 'email', 'whatsapp', 'संपर्क', 'फोन', 'ईमेल'],
    returns: ['return', 'exchange', 'refund', 'वापसी', 'रिटर्न', 'रिफंड'],
    materials: ['material', 'eco', 'resin', 'fiber', 'सामग्री', 'राल', 'फाइबर'],
    sizing: ['size', 'measurement', 'fit', 'chart', 'साइज', 'माप', 'चार्ट']
  };

  useEffect(() => {
    if (language) {
      setMessages([{ text: content[language].welcome, isBot: true }]);
    }
  }, [language]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleCloseChat = () => {
    setIsOpen(false);
    setMessages([]);
    setLanguage(null);
    setInputMessage("");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (chatContainerRef.current && !chatContainerRef.current.contains(event.target)) {
        handleCloseChat();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getResponse = (lang, msg) => {
    const cleanMsg = msg.toLowerCase().replace(/[^\w\s]/gi, '');
    
    const matchedCategory = Object.entries(keywordMap).find(([_, keywords]) => 
      keywords.some(keyword => cleanMsg.includes(keyword))
    )?.[0];

    return qna[lang][matchedCategory] || 
      `${content[lang].defaultResponse}\n\n${content[lang].quickQuestions.join('\n• ')}`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !language) return;

    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    setIsTyping(true);
    setInputMessage("");

    await new Promise(resolve => setTimeout(resolve, 1000));

    const response = getResponse(language, inputMessage);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50" ref={chatContainerRef}>
      <button 
        onClick={() => isOpen ? handleCloseChat() : setIsOpen(true)}
        className="bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 transition-all hover:scale-110"
      >
        {isOpen ? (
          <MdClose className="text-2xl" />
        ) : (
          <div className="relative">
            <FiMessageSquare className="text-2xl" />
            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
          </div>
        )}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-t-lg">
            <h3 className="font-bold">
              {language ? (language === 'hindi' ? 'सर्फहब सहायक' : 'SurfHub Assistant') : 'Choose Language'}
            </h3>
            {!language && (
              <div className="mt-3 flex flex-col gap-2">
                <button 
                  onClick={() => setLanguage('hindi')}
                  className="w-full py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  हिन्दी
                </button>
                <button 
                  onClick={() => setLanguage('english')}
                  className="w-full py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
                >
                  English
                </button>
              </div>
            )}
          </div>

          <div className="h-64 overflow-y-auto p-4 bg-gray-50">
            {!language ? (
              <div className="text-gray-600 text-center py-6">
                कृपया भाषा चुनें / Please choose language
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        msg.isBot 
                          ? "bg-white border border-gray-200" 
                          : "bg-blue-600 text-white"
                      }`}
                    >
                      {msg.text.split('\n').map((line, index) => (
                        <p key={index} className={index !== 0 ? "mt-2" : ""}>{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center space-x-2 text-gray-500">
                    <div className="animate-pulse">
                      {content[language].typing}
                    </div>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>

          {language && (
            <div className="p-4 border-t border-gray-200">
              <div className="mb-2 flex flex-wrap gap-2">
                {content[language].quickQuestions.map((question, i) => (
                  <button
                    key={i}
                    onClick={() => setInputMessage(question)}
                    className="text-xs bg-gray-100 hover:bg-gray-200 px-2 py-1 rounded-full transition-colors"
                  >
                    {question}
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder={content[language].placeholder}
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <MdSend className="text-xl" />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Info />
      <Navbar />
      <ChatBot />
      <Routes>
        <Route path="/" element={<Slider />} />
        <Route path="/products" element={<Products />} />
        <Route path="/surfboards" element={<Surfboards />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/bagpack" element={<Bagpack />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/read-more" element={<ReadMore />} />
        <Route path="/learn-more-surfing" element={<LearnMoreAboutSurfing />} />
        <Route path="/learn-more-blog" element={<LearnMoreAboutBlog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;