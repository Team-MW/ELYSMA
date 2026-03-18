import React, { useState, useEffect } from 'react';
import { Instagram, Twitter, Facebook, ArrowRight, Menu } from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled-nav' : ''}`}>
        <div className="brand">Elysma</div>
        <div className="nav-links">
          <div className="nav-item" onClick={() => scrollToSection('home')}>Accueil</div>
          <div className="nav-item" onClick={() => scrollToSection('about')}>L'Essence</div>
          <div className="nav-item" onClick={() => scrollToSection('collection')}>La Collection</div>
          <div className="nav-item" onClick={() => scrollToSection('contact')}>Contact</div>
        </div>
        <div className="menu-icon" style={{ display: 'none', color: 'var(--primary)', cursor: 'pointer' }}>
          <Menu size={28} />
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-subtitle fade-in">Haute Élégance</div>
          <h1 className="hero-title fade-in delay-1">L'Art de Sublimer</h1>
          <button className="hero-cta fade-in delay-2" onClick={() => scrollToSection('collection')}>
            Découvrir la Collection
          </button>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="section-head fade-in">
          <h2 className="section-title">Notre Essence</h2>
          <div className="section-separator"></div>
        </div>

        <div className="about-grid">
          <div className="about-img-container">
            <img src="/assets/Elysma2.jpg" alt="Elysma Essence" className="about-img" />
          </div>
          <div className="about-text">
            <h3>Une vision intemporelle</h3>
            <p>
              Elysma représente l'apogée du raffinement. Chaque création est pensée pour capturer l'essence de la beauté pure, alliant un savoir-faire d'exception à une esthétique audacieuse et contemporaine.
            </p>
            <p>
              Plongez dans un univers où le luxe se ressent, se vit et se transmet. Notre héritage se reflète dans chaque détail, pour vous offrir une expérience inoubliable.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', marginTop: '1rem', cursor: 'pointer', letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.9rem' }}>
              <span>En savoir plus</span>
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </section>

      {/* COLLECTION GALLERY */}
      <section id="collection" className="gallery">
        <div className="section-head">
          <h2 className="section-title">Série Signature</h2>
          <div className="section-separator"></div>
        </div>

        <div className="gallery-grid">
          <div className="gallery-item large">
            <img src="/assets/elysam1.png" alt="Collection 1" />
            <div className="gallery-overlay">
              <h4>L'Aube</h4>
              <p>Édition Limitée - L'éveil des sens.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="/assets/Elysma2.jpg" alt="Collection 2" style={{ objectPosition: 'top' }} />
            <div className="gallery-overlay">
              <h4>Le Crépuscule</h4>
              <p>L'élégance à la nuit tombée.</p>
            </div>
          </div>
          <div className="gallery-item">
            <img src="https://images.unsplash.com/photo-1615397323607-16d7d7406f5c?auto=format&fit=crop&q=80&w=800" alt="Collection 3" />
            <div className="gallery-overlay">
              <h4>L'Onyx</h4>
              <p>Mystère et profondeur absolus.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <h2>Elysma</h2>
            <p>Paris • Milano • New York</p>
            <p>L'excellence redéfinie. L'art du raffinement à l'état pur, conçu pour les âmes d'esthètes.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h4>Maison</h4>
              <a href="#about">Histoire</a>
              <a href="#">Boutiques</a>
              <a href="#">Carrières</a>
            </div>
            <div className="footer-col">
              <h4>Services</h4>
              <a href="#">Sur-mesure</a>
              <a href="#">Entretien</a>
              <a href="#">Rendez-vous privé</a>
            </div>
            <div className="footer-col">
              <h4>Légal</h4>
              <a href="#">Mentions Légales</a>
              <a href="#">Politique de Confidentialité</a>
              <a href="#">CGV</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elysma. Tous droits réservés.</p>
          <div className="social-links">
            <Instagram size={20} className="social-icon" />
            <Twitter size={20} className="social-icon" />
            <Facebook size={20} className="social-icon" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
