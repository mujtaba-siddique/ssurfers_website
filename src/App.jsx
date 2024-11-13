import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Info />
      <Navbar />
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
