import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Videos from './components/Videos';
import LoginPage from './components/Login';
import AdminPanel from './components/AdminPanel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const location = useLocation();

 // Array of routes where the footer should not be displayed
 const noFooterRoutes = ['/admin', '/login'];

 // Check if the current location path is in the noFooterRoutes array
 const isNoFooterHeader = noFooterRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Conditionally render Header */}
      {!isNoFooterHeader && <Header />}
      
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </main>
      
      {/* Conditionally render Footer */}
      {!isNoFooterHeader && <Footer />}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
