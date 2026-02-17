import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from '@/components/ui/sonner';

// Import components
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Import pages
import Home from '@/pages/Home';
import Product from '@/pages/Product';
import MicroGrooming from '@/pages/MicroGrooming';
import About from '@/pages/About';
import Contact from '@/pages/Contact';

// Import luxury minimal styles
import '@/styles/luxury-minimal.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/micro-grooming" element={<MicroGrooming />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="top-center" />
      </BrowserRouter>
    </div>
  );
}

export default App;
