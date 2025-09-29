import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCatalog from "./components/ProductCatalog";
import FleetSection from "./components/FleetSection";
import BrandPartners from "./components/BrandPartners";
import TestimonialsSection from "./components/TestimonialsSection";
import BusinessHours from "./components/BusinessHours";
import CertificationsSection from "./components/CertificationsSection";
import FAQSection from "./components/FAQSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import { Toaster } from "./components/ui/sonner";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCatalog />
      <FleetSection />
      <BrandPartners />
      <TestimonialsSection />
      <BusinessHours />
      <CertificationsSection />
      <FAQSection />
      <AboutSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;