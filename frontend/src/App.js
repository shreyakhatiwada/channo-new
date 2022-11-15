import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Leafletmap from "./components/leaflet_map";
import Khoj from "./components/khoj";
import KhojSlider from "./components/khoj_slider";
import About from "./components/about";
import Home from "./components/home";
import Login from "./components/login";
import Signin from "./components/signin";
import Contact from "./components/contact";
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
      <Khoj />
      <KhojSlider />
      <Leafletmap />
      <Footer />
    </div>
  );
}

export default App;
