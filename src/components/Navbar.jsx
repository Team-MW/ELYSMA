import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile à chaque changement de page
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav className={`navbar ${(scrolled || mobileMenuOpen || location.pathname !== '/') ? 'scrolled-nav' : ''}`}>
      <Link to="/" className="brand" style={{ textDecoration: 'none' }}>
        <img src="/assets/logo-elysma.png" alt="Elysma Signature" className="navbar-logo" />
      </Link>

      <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
        <Link to="/" className={`nav-item ${location.pathname === '/' ? 'active' : ''}`}>Accueil</Link>
        <Link to="/menu" className={`nav-item ${location.pathname === '/menu' ? 'active' : ''}`}>Le Menu</Link>
        <Link to="/location" className={`nav-item ${location.pathname === '/location' ? 'active' : ''}`}>Où nous trouver</Link>
        <Link to="/contact" className={`nav-item ${location.pathname === '/contact' ? 'active' : ''}`}>Contact</Link>
      </div>

      <div className="nav-actions desktop-only">
        <Link to="/location" className="btn-reservation" style={{ textDecoration: 'none' }}>
          Réserver
        </Link>
      </div>

      <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </div>
    </nav>
  );
}
