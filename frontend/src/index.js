import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//Router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Page component imports
import Navbar from './landing_pages/Navbar';
import HomePage from './landing_pages/home/HomePage';
// ...existing code...
import AboutPage from './landing_pages/about/AboutPage';
// ...existing code...
// import Product from './products/Product';
// import Pricing from './home/Pricing';
// import Support from './support/Support';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        {/* <Route path="/product" element={<Product />} /> */}
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        {/* <Route path="/support" element={<Support />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
);
