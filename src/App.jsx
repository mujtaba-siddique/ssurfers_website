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
  const [context, setContext] = useState(null);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  // Enhanced Language-based content
  const content = {
    hindi: {
      quickQuestions: [
        "शिपिंग जानकारी?",
        "भुगतान विकल्प?",
        "वारंटी विवरण?",
        "रिटर्न नीति?",
        "उत्पाद जानकारी",
        "संपर्क विवरण",
        "साइज़ गाइड",
        "सामग्री विवरण",
        "मेरा ऑर्डर स्थिति",
        "डिस्काउंट ऑफ़र"
      ],
      placeholder: "अपना प्रश्न यहाँ टाइप करें...",
      typing: "टाइप कर रहे हैं...",
      defaultResponse: "मैं आपके प्रश्न को पूरी तरह से नहीं समझ पाया। क्या आप नीचे दिए गए विकल्पों में से चुन सकते हैं?",
      welcome: "नमस्ते! सर्फहब सहायक आपकी सेवा में 🏄\nआप किस बारे में जानना चाहेंगे?",
      orderStatusPrompt: "कृपया अपना ऑर्डर आईडी दर्ज करें",
      discountInfo: "🎉 वर्तमान ऑफ़र:\n• नए ग्राहकों के लिए 10% छूट (FIRST10)\n• ₹5000+ ऑर्डर पर मुफ़्त शिपिंग\n• सीज़नल सेल - 15% तक छूट\n• बंडल ऑफ़र: 2 सर्फबोर्ड खरीदें, 1 वेटसूट मुफ़्त पाएं"
    },
    english: {
      quickQuestions: [
        "Shipping Info?",
        "Payment Options?",
        "Warranty Details?",
        "Return Policy?",
        "Product Information",
        "Contact Details",
        "Size Guide",
        "Material Details",
        "My Order Status",
        "Discount Offers"
      ],
      placeholder: "Type your question here...",
      typing: "Typing...",
      defaultResponse: "I'm not entirely sure I understand. Could you select from the options below?",
      welcome: "Hello! SurfHub Assistant at your service 🏄\nWhat would you like to know about?",
      orderStatusPrompt: "Please enter your Order ID",
      discountInfo: "🎉 Current Offers:\n• 10% off for new customers (FIRST10)\n• Free shipping on orders ₹5000+\n• Seasonal sale - up to 15% off\n• Bundle offer: Buy 2 surfboards, get 1 wetsuit free"
    }
  };

  // Expanded Knowledge Base with categorized responses
  const qna = {
    hindi: {
      shipping: "🚚 शिपिंग नीति:\n• 3-5 कार्यदिवस डिलीवरी\n• रीयल-टाइम ट्रैकिंग\n• 30-दिन की रिटर्न नीति\n• डिलीवरी स्थिति जानने के लिए ऑर्डर आईडी दर्ज करें",
      payment: "💳 भुगतान विकल्प:\n• क्रेडिट/डेबिट कार्ड\n• UPI (PhonePe/Google Pay)\n• नेट बैंकिंग\n• EMI विकल्प\n• COD (₹2000 तक)",
      warranty: "🔧 वारंटी जानकारी:\n• 1 वर्ष निर्माता वारंटी\n• 6 महीने एक्सेसरीज वारंटी\n• वारंटी क्लेम के लिए सपोर्ट@surfhub.com पर मेल करें",
      products: "🏄 उत्पाद रेंज:\n• शॉर्टबोर्ड (5'6\" - 6'8\")\n• लॉन्गबोर्ड (8'0\" - 9'6\")\n• वेटसूट (2mm से 5mm)\n• सर्फिंग एक्सेसरीज किट\n• सर्फबोर्ड बैग\n• वैक्स और फिन्स",
      contact: "📞 संपर्क:\n• टोल फ्री: 1800-123-4567\n• व्हाट्सएप: +91 98765 43210\n• ईमेल: support@surfhub.com\n• कार्यालय समय: सोम-शनि (सुबह 10:00 - शाम 6:00)",
      returns: "🔄 रिटर्न प्रक्रिया:\n1. ऑर्डर आईडी के साथ रिटर्न अनुरोध करें\n2. मूल पैकेजिंग में वापस करें\n3. 3-5 कार्यदिवसों में रिफंड\n4. निःशुल्क पिकअप सेवा",
      materials: "🌿 उपयोग की सामग्री:\n• 100% इको-फ्रेंडली एपॉक्सी रेजिन\n• मिलिट्री-ग्रेड कार्बन फाइबर\n• यूवी-रेजिस्टेंट कोटिंग\n• फूड-ग्रेड नियोप्रीन (वेटसूट)",
      sizing: "📏 साइज़ गाइड:\n• सर्फबोर्ड: लंबाई × चौड़ाई × मोटाई\n• वेटसूट: ऊंचाई और वजन के अनुसार\n• सभी उत्पादों के लिए विस्तृत माप चार्ट उपलब्ध",
      order: (orderId) => `📦 ऑर्डर #${orderId} स्थिति:\n• 24 मार्च: ऑर्डर की पुष्टि हुई\n• 25 मार्च: पैकिंग पूरी हुई\n• 26 मार्च: शिपमेंट भेजा गया\n• अनुमानित डिलीवरी: 29 मार्च\n• कैरियर: डीएचएल (ट्रैकिंग #DH123456789IN)`,
      discount: content.hindi.discountInfo,
      beginner: "🏄‍♂️ शुरुआती के लिए सुझाव:\n• 8'+ लंबा बोर्ड चुनें (अधिक स्थिर)\n• 2-3mm वेटसूट (भारतीय जलवायु के लिए)\n• प्रारंभिक पैकेज (बोर्ड + वेटसूट + वैक्स) लें\n• हमारे सर्फिंग पाठ्यक्रमों के बारे में पूछें!",
      pro: "🌊 पेशेवर सर्फर सुझाव:\n• हाइब्रिड/शॉर्टबोर्ड (5'8\" - 6'4\")\n• 4-5mm वेटसूट (ठंडे पानी के लिए)\n• कस्टम फिन सेटअप\n• प्रीमियम सर्फवैक्स और एक्सेसरीज",
      maintenance: "🧼 सर्फबोर्ड देखभाल:\n• उपयोग के बाद मीठे पानी से धोएं\n• सीधी धूप से बचाएं\n• वैक्स को नियमित रूप से बदलें\n• स्टोर करते समय सपाट सतह पर रखें\n• छोटी मरम्मत के लिए सनकिट का उपयोग करें"
    },
    english: {
      shipping: "🚚 Shipping Policy:\n• 3-5 business days delivery\n• Real-time tracking\n• 30-day return policy\n• Enter Order ID to check status",
      payment: "💳 Payment Options:\n• Credit/Debit Cards\n• UPI (PhonePe/Google Pay)\n• Net Banking\n• EMI Options\n• COD (up to ₹2000)",
      warranty: "🔧 Warranty Details:\n• 1 Year Manufacturer Warranty\n• 6 Months Accessories Warranty\n• Email support@surfhub.com for claims",
      products: "🏄 Product Range:\n• Shortboards (5'6\" - 6'8\")\n• Longboards (8'0\" - 9'6\")\n• Wetsuits (2mm to 5mm)\n• Surfing Accessories Kit\n• Surfboard Bags\n• Wax and Fins",
      contact: "📞 Contact Us:\n• Toll Free: 1800-123-4567\n• WhatsApp: +91 98765 43210\n• Email: support@surfhub.com\n• Office Hours: Mon-Sat (10 AM - 6 PM)",
      returns: "🔄 Return Process:\n1. Request return with Order ID\n2. Return in original packaging\n3. Refund in 3-5 business days\n4. Free pickup service",
      materials: "🌿 Materials Used:\n• 100% Eco-friendly Epoxy Resin\n• Military-grade Carbon Fiber\n• UV-resistant Coating\n• Food-grade Neoprene (Wetsuits)",
      sizing: "📏 Sizing Guide:\n• Surfboards: Length × Width × Thickness\n• Wetsuits: Based on height/weight\n• Detailed size charts available for all products",
      order: (orderId) => `📦 Order #${orderId} Status:\n• Mar 24: Order confirmed\n• Mar 25: Packing completed\n• Mar 26: Shipment dispatched\n• Estimated delivery: Mar 29\n• Carrier: DHL (Tracking #DH123456789IN)`,
      discount: content.english.discountInfo,
      beginner: "🏄‍♂️ Beginner Recommendations:\n• Choose 8'+ board (more stable)\n• 2-3mm wetsuit (for Indian climate)\n• Starter package (board + wetsuit + wax)\n• Ask about our surfing lessons!",
      pro: "🌊 Pro Surfer Tips:\n• Hybrid/Shortboard (5'8\" - 6'4\")\n• 4-5mm wetsuit (cold water)\n• Custom fin setup\n• Premium surf wax and accessories",
      maintenance: "🧼 Surfboard Care:\n• Rinse with fresh water after use\n• Avoid direct sunlight\n• Change wax regularly\n• Store on flat surface\n• Use suncure for minor repairs"
    }
  };

  // Enhanced Keyword mapping with priority scoring
  const keywordMap = [
    { category: 'order', keywords: ['order', 'status', 'track', 'delivery', 'ऑर्डर', 'स्थिति', 'ट्रैक', 'डिलीवरी'], score: 5 },
    { category: 'shipping', keywords: ['shipping', 'delivery', 'dispatch', 'time', 'carrier', 'शिपिंग', 'डिलीवरी', 'समय', 'कैरियर'], score: 4 },
    { category: 'payment', keywords: ['payment', 'pay', 'emi', 'cod', 'card', 'upi', 'भुगतान', 'ईएमआई', 'कैश', 'कार्ड'], score: 4 },
    { category: 'warranty', keywords: ['warranty', 'guarantee', 'claim', 'repair', 'वारंटी', 'गारंटी', 'क्लेम', 'मरम्मत'], score: 3 },
    { category: 'products', keywords: ['product', 'board', 'wetsuit', 'accessories', 'bag', 'fin', 'उत्पाद', 'सर्फबोर्ड', 'वेटसूट', 'बैग'], score: 3 },
    { category: 'contact', keywords: ['contact', 'call', 'email', 'whatsapp', 'support', 'संपर्क', 'फोन', 'ईमेल', 'सहायता'], score: 2 },
    { category: 'returns', keywords: ['return', 'exchange', 'refund', 'cancel', 'वापसी', 'रिटर्न', 'रिफंड', 'विनिमय'], score: 3 },
    { category: 'materials', keywords: ['material', 'eco', 'resin', 'fiber', 'coating', 'सामग्री', 'राल', 'फाइबर', 'कोटिंग'], score: 2 },
    { category: 'sizing', keywords: ['size', 'measurement', 'fit', 'chart', 'guide', 'साइज', 'माप', 'चार्ट', 'फिट'], score: 2 },
    { category: 'discount', keywords: ['discount', 'offer', 'sale', 'coupon', 'code', 'छूट', 'ऑफर', 'सेल', 'कूपन'], score: 3 },
    { category: 'beginner', keywords: ['beginner', 'new', 'start', 'learn', 'basic', 'शुरुआत', 'नया', 'सीखें', 'बेसिक'], score: 3 },
    { category: 'pro', keywords: ['pro', 'advanced', 'expert', 'professional', 'पेशेवर', 'एडवांस', 'विशेषज्ञ'], score: 3 },
    { category: 'maintenance', keywords: ['care', 'maintain', 'clean', 'store', 'repair', 'देखभाल', 'सफाई', 'मरम्मत'], score: 2 }
  ];

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
    setContext(null);
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
    
    if (context === 'order') {
      const orderIdMatch = cleanMsg.match(/(?:order|ord|odr|#)?\s*(\d{6,10})/);
      if (orderIdMatch) {
        setContext(null);
        return qna[lang].order(orderIdMatch[1]);
      } else {
        return content[lang].orderStatusPrompt;
      }
    }

    let bestMatch = { category: null, score: 0 };
    
    keywordMap.forEach(({ category, keywords, score }) => {
      const matchScore = keywords.some(keyword => 
        cleanMsg.includes(keyword)
      ) ? score : 0;
      
      if (matchScore > bestMatch.score) {
        bestMatch = { category, score: matchScore };
      }
    });

    if (bestMatch.category === 'order') {
      setContext('order');
      return content[lang].orderStatusPrompt;
    }

    return bestMatch.category ? 
      qna[lang][bestMatch.category] : 
      `${content[lang].defaultResponse}\n\n${content[lang].quickQuestions.join('\n• ')}`;
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !language) return;

    const userMessage = { text: inputMessage, isBot: false };
    setMessages(prev => [...prev, userMessage]);
    
    setIsTyping(true);
    setInputMessage("");

    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 700));

    const response = getResponse(language, inputMessage);
    setMessages(prev => [...prev, { text: response, isBot: true }]);
    setIsTyping(false);
  };

  const handleQuickQuestion = (question) => {
    setInputMessage(question);
    if (messages.length > 1) {
      handleSendMessage();
    }
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
        <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4">
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
                      } whitespace-pre-wrap`}
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
            <div className="p-4 border-t border-gray-200 bg-white">
              <div className="mb-2 flex flex-wrap gap-2 max-h-20 overflow-y-auto">
                {content[language].quickQuestions.map((question, i) => (
                  <button
                    key={i}
                    onClick={() => handleQuickQuestion(question)}
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
                  disabled={!inputMessage.trim()}
                  className={`p-2 rounded-lg transition-colors ${
                    inputMessage.trim() 
                      ? "bg-blue-600 text-white hover:bg-blue-700" 
                      : "bg-gray-200 text-gray-400 cursor-not-allowed"
                  }`}
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