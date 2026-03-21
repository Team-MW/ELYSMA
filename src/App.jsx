import React, { useState, useEffect } from 'react';
import { Instagram, MapPin, Phone, Clock, Coffee, Utensils, Star, Menu, X, Navigation } from 'lucide-react';
import MentionsLegales from './MentionsLegales';
import './App.css';

function MainApp({ onShowLegal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${(scrolled || mobileMenuOpen) ? 'scrolled-nav' : ''}`}>
        <div className="brand" onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>
          Elysma<span>Signature</span>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <div className="nav-item" onClick={() => scrollToSection('home')}>Accueil</div>
          <div className="nav-item" onClick={() => scrollToSection('about')}>L'Expérience</div>
          <div className="nav-item" onClick={() => scrollToSection('menu')}>Le Menu</div>
          <div className="nav-item" onClick={() => scrollToSection('location')}>Où nous trouver</div>
          <div className="nav-item" onClick={() => scrollToSection('contact')}>Contact</div>
        </div>

        <div className="nav-actions desktop-only">
          <button className="btn-reservation" onClick={() => scrollToSection('location')}>
            Réserver
          </button>
        </div>

        <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </nav>

      {/* HERO SECTION */}
      <section id="home" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge fade-in">— Coffee & Brunch signature —</div>
          <h1 className="hero-title fade-in delay-1">
            Coffee & Brunch<br /><span>Signature</span>
          </h1>
          <p className="hero-desc fade-in delay-2">
            ✨ L’élégance à savourer, du matin au goûter
          </p>
          <button className="btn-reservation fade-in delay-3" onClick={() => scrollToSection('menu')}>
            Découvrir la Carte
          </button>
        </div>
        <div className="scroll-indicator fade-in delay-3">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="about">
        <div className="about-layout">
          <div className="about-images fade-in">
            <img src="/assets/Elysma2.jpg" alt="Elysma Interior" className="img-main" />
            <img src="/assets/elysam1.png" alt="Elysma Details" className="img-accent" />
          </div>
          <div className="about-text fade-in delay-1">
            <span className="section-label">L'Art de Vivre</span>
            <h2>Une torréfaction <i>locale</i>, <br />des produits de <i>saison</i>.</h2>
            <p>
              Chez Elysma, nous croyons que chaque tasse de café raconte une histoire, et que chaque plat doit éveiller les sens. Notre cuisine est une véritable célébration des produits frais et locaux, travaillés avec précision et audace.
            </p>
            <p>
              Que ce soit pour un espresso parfaitement calibré au petit matin, ou pour notre célèbre brunch signature prolongé le week-end, nous avons créé un espace où le temps suspend son vol.
            </p>
            <div className="signature-sign">L'Équipe Elysma</div>
          </div>
        </div>
      </section>

      {/* MENU HIGHLIGHTS */}
      <section id="menu" className="menu-preview">
        <div className="menu-header fade-in">
          <span className="section-label">Notre Carte</span>
          <h2>Inspirations <i>Signature</i></h2>
          <p>Une sélection minutieuse de nos créations les plus appréciées, renouvelée au fil des saisons.</p>
        </div>

        <div className="menu-grid">
          {/* SPECIALTY COFFEE */}
          <div className="menu-card fade-in delay-1">
            <div className="menu-card-icon"><Coffee size={32} /></div>
            <h3>Café de Spécialité</h3>
            <p>Des grains sélectionnés avec soin par nos torréfacteurs.</p>
            <div className="menu-list">
              <div className="menu-item">
                <span>Espresso Single Origin</span>
                <span className="price">3.5€</span>
              </div>
              <div className="menu-item">
                <span>Flat White Signature</span>
                <span className="price">5.0€</span>
              </div>
              <div className="menu-item">
                <span>Cold Brew Infusion</span>
                <span className="price">5.5€</span>
              </div>
              <div className="menu-item">
                <span>Pistachio Latte</span>
                <span className="price">6.5€</span>
              </div>
            </div>
          </div>

          {/* BRUNCH PLATES */}
          <div className="menu-card fade-in delay-2">
            <div className="menu-card-icon"><Utensils size={32} /></div>
            <h3>Le Brunch</h3>
            <p>Gourmandise et créativité s'invitent à votre table.</p>
            <div className="menu-list">
              <div className="menu-item">
                <span>Avocado Toast Truffé</span>
                <span className="price">16€</span>
              </div>
              <div className="menu-item">
                <span>Oeufs Bénédicte Saumon</span>
                <span className="price">18€</span>
              </div>
              <div className="menu-item">
                <span>Pancakes Soufflés</span>
                <span className="price">15€</span>
              </div>
              <div className="menu-item">
                <span>Bowl de Saison</span>
                <span className="price">14€</span>
              </div>
            </div>
          </div>

          {/* PATISSERIE */}
          <div className="menu-card fade-in delay-3">
            <div className="menu-card-icon"><Star size={32} /></div>
            <h3>Douceurs</h3>
            <p>Pour accompagner parfaitement votre boisson chaude.</p>
            <div className="menu-list">
              <div className="menu-item">
                <span>Croissant Pur Beurre</span>
                <span className="price">2.5€</span>
              </div>
              <div className="menu-item">
                <span>Pain Perdu Brioché</span>
                <span className="price">9.0€</span>
              </div>
              <div className="menu-item">
                <span>Cheesecake Elysma</span>
                <span className="price">7.5€</span>
              </div>
              <div className="menu-item">
                <span>Cinnamon Roll Maison</span>
                <span className="price">5.0€</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OU NOUS TROUVER (LOCATION) */}
      <section id="location" className="location-section">
        <div className="location-grid">
          <div className="location-info">
            <span className="section-label">Où Nous Trouver</span>
            <h2>Un Lieu <i>Unique</i> en plein cœur de Toulouse</h2>
            <p className="location-desc">
              Poussez les portes d'Elysma et plongez dans une atmosphère chaleureuse où le temps s'arrête. Conçu comme un écrin de calme urbain, notre espace marie élégance intemporelle et convivialité.
            </p>

            <div className="info-blocks">
              <div className="info-block">
                <MapPin className="info-icon" />
                <div>
                  <h4>Adresse</h4>
                  <p>365 Route de Seysse<br />Toulouse</p>
                  <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="btn-link">Itinéraire <Navigation size={14} /></a>
                </div>
              </div>
              <div className="info-block">
                <Clock className="info-icon" />
                <div>
                  <h4>Horaires d'ouverture</h4>
                  <p><b>Lundi - Vendredi:</b> 8h00 - 18h00</p>
                  <p><b>Samedi - Dimanche:</b> 9h00 - 17h00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-map">
            <iframe
              src="https://maps.google.com/maps?q=365%20Route%20de%20Seysse,%20Toulouse&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </section>

      {/* INSTAGRAM SECTION */}
      <section id="social" className="instagram-section">
        <div className="instagram-layout">
          <div className="instagram-text fade-in">
            <span className="section-label">Notre Quotidien</span>
            <h2>Suivez l'<i>Expérience</i></h2>
            <p>Plongez dans les coulisses de nos créations et partagez vos moments. Assistez à nos préparations de cafés de spécialité, découvrez l'élaboration de nos plats et rejoignez notre belle communauté sur Instagram.</p>
            <a href="https://www.instagram.com/elysma" target="_blank" rel="noreferrer" className="btn-link" style={{ marginTop: '2rem' }}>@elysma_signature</a>
          </div>
          <div className="instagram-container fade-in delay-1">
            <iframe
              src="https://www.instagram.com/p/DQzq-BSAvFN/embed"
              className="instagram-iframe"
              frameBorder="0"
              scrolling="no"
              allowtransparency="true"
              title="Instagram Elysma Reel"
            ></iframe>
          </div>
        </div>
      </section>

      {/* VISUAL GALLERY BANNER */}
      <section className="gallery-banner">
        <div className="gallery-banner-item">
          <img src="/assets/elysam1.png" alt="Elysma Brunch" className="gallery-banner-img" />
        </div>
        <div className="gallery-banner-item">
          <img src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800" alt="Coffee Pour" className="gallery-banner-img" />
        </div>
        <div className="gallery-banner-item">
          <img src="/assets/Elysma2.jpg" alt="Interior" className="gallery-banner-img" style={{ objectPosition: 'center 20%' }} />
        </div>
        <div className="gallery-banner-item">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800" alt="Pancakes" className="gallery-banner-img" />
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>Elysma<span>Signature</span></h2>
            <p>✨ L’élégance à savourer, du matin au goûter</p>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <div className="contact-info">
              <Phone size={18} />
              <span>01 23 45 67 89</span>
            </div>
            <div className="contact-info">
              <MapPin size={18} />
              <span>365 Route de Seysse<br />Toulouse</span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Horaires</h4>
            <div className="contact-info">
              <Clock size={18} style={{ alignSelf: 'flex-start', marginTop: '4px' }} />
              <span>
                Lun - Ven: 8h - 18h<br />
                Sam - Dim: 9h - 17h
              </span>
            </div>
          </div>

          <div className="footer-col">
            <h4>Légal</h4>
            <ul>
              <li><a href="#mentions-legales" onClick={(e) => { e.preventDefault(); onShowLegal(); }}>Mentions Légales</a></li>
              <li><a href="#mentions-legales" onClick={(e) => { e.preventDefault(); onShowLegal(); }}>Politique de Confidentialité</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Elysma Coffee & Brunch. Créé avec passion.</p>
          <div className="socials">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>
      </footer>
    </>
  );
}

function App() {
  const [showLegal, setShowLegal] = useState(false);

  return (
    <div className="app-container">
      {showLegal ? (
        <MentionsLegales onBack={() => setShowLegal(false)} />
      ) : (
        <MainApp onShowLegal={() => setShowLegal(true)} />
      )}
    </div>
  );
}

export default App;
