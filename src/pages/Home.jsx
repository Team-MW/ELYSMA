import React from 'react';
import { Instagram, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-content">
      {/* HERO SECTION */}
      <section className="hero">
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
          <Link to="/menu" className="btn-reservation fade-in delay-3" style={{ textDecoration: 'none', display: 'inline-block' }}>
            Découvrir la Carte
          </Link>
        </div>
        <div className="scroll-indicator fade-in delay-3">
          <span>Scroll</span>
          <div className="scroll-line"></div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about">
        <div className="about-layout">
          <div className="about-images fade-in">
            <img src="/assets/Elysma2.jpg" alt="Elysma Interior" className="img-main" />
            <img src="/assets/hero-bg.webp" alt="Elysma Details" className="img-accent" />
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

      {/* INFINITE SCROLLING GALLERY */}
      <section className="scrolling-gallery">
        <div className="scrolling-track">
          <div className="scrolling-group">
            <img src="/assets/elysma-social-1.jpeg" alt="Gallery" />
            <img src="/assets/elysma-social-2.jpeg" alt="Gallery" />
            <img src="/assets/elysma-social-3.jpeg" alt="Gallery" />
            <img src="/assets/elysma-social-4.jpeg" alt="Gallery" />
          </div>
          <div className="scrolling-group" aria-hidden="true">
            <img src="/assets/elysma-social-1.jpeg" alt="Gallery" />
            <img src="/assets/elysma-social-2.jpeg" alt="Gallery" />
            <img src="/assets/elysma-social-3.jpeg" alt="Gallery" />
            <img src="/assets/elysma-social-4.jpeg" alt="Gallery" />
          </div>
        </div>
      </section>

      {/* NEW BEAUTIFUL SOCIAL SECTION */}
      <section className="social-showcase">
        <div className="social-header fade-in">
          <span className="section-label">Rejoignez-nous</span>
          <h2>Notre Communauté <i>@Elysma</i></h2>
          <p>Découvrez l'univers visuel de nos créations et partagez vos meilleurs moments avec le hashtag #ElysmaSignature</p>
        </div>
        
        <div className="social-grid">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card large fade-in">
            <img src="/assets/elysma-social-1.jpeg" alt="Ambiance" />
            <div className="social-overlay">
              <Instagram size={32} />
              <span>@elysma_signature</span>
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card fade-in delay-1">
            <img src="/assets/elysma-social-2.jpeg" alt="Café" />
            <div className="social-overlay">
              <Instagram size={24} />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card fade-in delay-2">
            <img src="/assets/elysma-social-3.jpeg" alt="Brunch" />
            <div className="social-overlay">
              <Instagram size={24} />
            </div>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-card fade-in delay-3">
            <img src="/assets/elysma-social-4.jpeg" alt="Pâtisseries" />
            <div className="social-overlay">
              <Instagram size={24} />
            </div>
          </a>
        </div>
        
        <div className="social-cta fade-in delay-2">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="btn-social">
            <Instagram size={18} />
            Suivre sur Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
