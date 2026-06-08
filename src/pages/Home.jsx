import React from 'react';
import { Instagram, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';

export const TikTokIcon = ({ size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.95v7.4c-.01 1.94-.69 3.84-1.95 5.3-1.26 1.45-3.05 2.37-5.01 2.6-1.95.21-3.95-.12-5.69-1.04-1.73-.91-3.09-2.42-3.83-4.24-.73-1.81-.82-3.83-.24-5.69.57-1.86 1.77-3.46 3.34-4.51 1.56-1.04 3.44-1.48 5.35-1.24.4.05.81.13 1.21.24v4.3c-1.39-.41-2.92-.3-4.2.32-1.27.61-2.19 1.76-2.55 3.12-.35 1.35-.12 2.82.64 3.99.75 1.16 2.02 1.9 3.43 2.01 1.41.1 2.85-.35 3.89-1.22 1.04-.87 1.63-2.18 1.63-3.56V.02h-3.91z" />
  </svg>
);

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

      {/* NEW TIKTOK SECTION */}
      <section className="tiktok-section">
        <div className="tiktok-header fade-in">
          <span className="section-label">En Mouvement</span>
          <h2>L'Expérience <i>en Vidéo</i></h2>
          <p>
            Retrouvez-nous sur TikTok pour plus de contenu !
          </p>
          <a href="https://www.tiktok.com/@elysma.coffeeshop" target="_blank" rel="noreferrer" className="btn-social tiktok-btn" style={{ marginTop: '1.5rem' }}>
            <TikTokIcon size={18} />
            @elysma.coffeeshop
          </a>
        </div>
        
        <div className="tiktok-grid fade-in delay-1">
          <div className="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7555959350393572630" frameBorder="0" allowFullScreen scrolling="no" allow="encrypted-media;"></iframe>
          </div>
          <div className="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7621884917076577558" frameBorder="0" allowFullScreen scrolling="no" allow="encrypted-media;"></iframe>
          </div>
          <div className="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7599023743666621718" frameBorder="0" allowFullScreen scrolling="no" allow="encrypted-media;"></iframe>
          </div>
          <div className="tiktok-container">
            <iframe src="https://www.tiktok.com/embed/v2/7590453767573654806" frameBorder="0" allowFullScreen scrolling="no" allow="encrypted-media;"></iframe>
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

      {/* GOOGLE REVIEWS SECTION */}
      <section className="reviews-section">
        <div className="reviews-header fade-in">
          <div className="reviews-title-row">
            {/* Google logo SVG */}
            <svg width="28" height="28" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.36 3.08 29.44 1 24 1 14.82 1 7.01 6.47 3.38 14.27l7.12 5.53C12.22 13.41 17.62 9.5 24 9.5z"/>
              <path fill="#4285F4" d="M46.5 24.5c0-1.61-.14-3.17-.4-4.68H24v9.36h12.7c-.55 2.96-2.2 5.47-4.67 7.15l7.14 5.55C43.55 37.68 46.5 31.56 46.5 24.5z"/>
              <path fill="#FBBC05" d="M10.5 28.19A14.7 14.7 0 0 1 9.5 24c0-1.45.2-2.86.56-4.2L2.94 14.27A22.94 22.94 0 0 0 1 24c0 3.66.87 7.12 2.38 10.2l7.12-5.53.98-.48z"/>
              <path fill="#34A853" d="M24 47c5.44 0 10.01-1.8 13.34-4.88l-7.14-5.55c-1.87 1.26-4.27 2-6.2 2-6.38 0-11.78-3.91-13.5-9.43l-7.12 5.53C7.01 41.53 14.82 47 24 47z"/>
            </svg>
            <h2>Avis <span style={{color:'#4285F4'}}>G</span><span style={{color:'#EA4335'}}>o</span><span style={{color:'#FBBC05'}}>o</span><span style={{color:'#4285F4'}}>g</span><span style={{color:'#34A853'}}>l</span><span style={{color:'#EA4335'}}>e</span></h2>
          </div>
          <div className="reviews-rating-global">
            <span className="rating-score">5.0</span>
            <div className="stars-row">
              {'★★★★★'.split('').map((s, i) => <span key={i} className="star-gold">{s}</span>)}
            </div>
            <span className="rating-count">Basé sur les avis Google</span>
          </div>
        </div>

        <div className="reviews-scroll-track fade-in delay-1">
          <div className="review-card">
            <div className="review-card-top">
              <div className="review-avatar">L</div>
              <div>
                <strong>Latife Öner</strong>
                <span>Local Guide · il y a 2 mois</span>
              </div>
              <div className="review-stars-small">★★★★★</div>
            </div>
            <p className="review-text">« Professionnel ! Accueillants et un goût irrésistible ! Mes filles ont adoré leur gâteau d'anniversaire. La qualité du petit déjeuner et des pâtisseries est incroyable 🤤 »</p>
          </div>

          <div className="review-card">
            <div className="review-card-top">
              <div className="review-avatar" style={{background:'#4285F4'}}>C</div>
              <div>
                <strong>Chay MR</strong>
                <span>Local Guide · il y a 5 mois</span>
              </div>
              <div className="review-stars-small">★★★★★</div>
            </div>
            <p className="review-text">« Tout est excellent, le brunch était parfait accompagné d'un bon jus d'orange frais. Le dessert avec le cornet incroyable. Je recommande 🫶 »</p>
          </div>

          <div className="review-card">
            <div className="review-card-top">
              <div className="review-avatar" style={{background:'#34A853'}}>F</div>
              <div>
                <strong>Fabien Gonin Hoang</strong>
                <span>Local Guide · il y a 7 mois</span>
              </div>
              <div className="review-stars-small">★★★★★</div>
            </div>
            <p className="review-text">« Mon Paris-brest avec sa couverture croustillante est le meilleur que j'ai jamais mangé. L'accueil est excellent, tout d'une propreté irréprochable. Les prix sont très bons ! TOP 👍 »</p>
          </div>

          <div className="review-card">
            <div className="review-card-top">
              <div className="review-avatar" style={{background:'#FBBC05'}}>S</div>
              <div>
                <strong>Soumaya Trefois</strong>
                <span>il y a 5 mois</span>
              </div>
              <div className="review-stars-small">★★★★★</div>
            </div>
            <p className="review-text">« Excellente découverte ! Un coffee shop parfait pour bruncher. L'ambiance est chaleureuse et le service au top. Une adresse que je recommande sans hésiter ! »</p>
          </div>

          <div className="review-card">
            <div className="review-card-top">
              <div className="review-avatar" style={{background:'#EA4335'}}>M</div>
              <div>
                <strong>Maryam Trefois</strong>
                <span>il y a 5 mois</span>
              </div>
              <div className="review-stars-small">★★★★★</div>
            </div>
            <p className="review-text">« Tellement bon ! Je n'avais pas mangé un petit-déjeuner comme celui-là depuis longtemps 😍 Si je pouvais mettre plus que 5 étoiles, je l'aurais fait ! ⭐⭐⭐⭐⭐➕ »</p>
          </div>
        </div>

        <div className="reviews-cta fade-in delay-2">
          <a href="https://www.google.com/maps/search/365+Rte+de+Seysses,+31100+Toulouse" target="_blank" rel="noreferrer" className="btn-google-cta">
            <svg width="16" height="16" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path fill="#EA4335" d="M24 9.5c3.14 0 5.95 1.08 8.17 2.86l6.1-6.1C34.36 3.08 29.44 1 24 1 14.82 1 7.01 6.47 3.38 14.27l7.12 5.53C12.22 13.41 17.62 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24.5c0-1.61-.14-3.17-.4-4.68H24v9.36h12.7c-.55 2.96-2.2 5.47-4.67 7.15l7.14 5.55C43.55 37.68 46.5 31.56 46.5 24.5z"/><path fill="#FBBC05" d="M10.5 28.19A14.7 14.7 0 0 1 9.5 24c0-1.45.2-2.86.56-4.2L2.94 14.27A22.94 22.94 0 0 0 1 24c0 3.66.87 7.12 2.38 10.2l7.12-5.53.98-.48z"/><path fill="#34A853" d="M24 47c5.44 0 10.01-1.8 13.34-4.88l-7.14-5.55c-1.87 1.26-4.27 2-6.2 2-6.38 0-11.78-3.91-13.5-9.43l-7.12 5.53C7.01 41.53 14.82 47 24 47z"/></svg>
            Voir tous les avis sur Google
          </a>
        </div>
      </section>
    </div>
  );
}

