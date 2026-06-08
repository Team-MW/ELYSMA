import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FAQ from './components/FAQ';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Location from './pages/Location';
import Contact from './pages/Contact';
import MentionsLegales from './MentionsLegales';
import './App.css';

const pageMap = {
  '/': 'home',
  '/menu': 'menu',
  '/location': 'location',
  '/contact': 'contact',
};

function AppLayout({ onShowLegal }) {
  const location = useLocation();
  const currentPage = pageMap[location.pathname] || 'home';

  return (
    <>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/location" element={<Location />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <FAQ page={currentPage} />
      <Footer onShowLegal={onShowLegal} />
    </>
  );
}

function App() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <Router>
      <div className="app-container">
        {showLegal ? (
          <MentionsLegales onBack={() => setShowLegal(false)} />
        ) : (
          <AppLayout onShowLegal={() => setShowLegal(true)} />
        )}
      </div>
    </Router>
  );
}

export default App;
