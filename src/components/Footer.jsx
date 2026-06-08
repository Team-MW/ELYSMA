import React from 'react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer({ onShowLegal }) {
  return (
    <footer className="footer">
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
  );
}
