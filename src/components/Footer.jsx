import React from 'react';
import { Phone, MapPin, Clock, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TikTokIcon } from '../pages/Home';

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
            <a href="tel:0767855449" style={{ color: 'inherit', textDecoration: 'none' }}>07 67 85 54 49</a>
          </div>
          <div className="contact-info">
            <MapPin size={18} />
            <a href="https://www.google.com/maps/search/365+Rte+de+Seysses,+31100+Toulouse" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>365 Rte de Seysses<br />31100 Toulouse</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Horaires</h4>
          <div className="contact-info">
            <Clock size={18} style={{ alignSelf: 'flex-start', marginTop: '4px' }} />
            <span>
              Lundi : Fermé<br />
              Mar – Dim : 10h00 – 19h00
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
        <p style={{ fontSize: '0.8rem', opacity: 0.6 }}>
          Réalisé par <a href="https://microdidact.com" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>microdidact.com</a>
        </p>
        <div className="socials">
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
          <a href="https://www.tiktok.com/@elysma.coffeeshop" target="_blank" rel="noreferrer" aria-label="TikTok" style={{ marginLeft: '1rem' }}><TikTokIcon size={20} /></a>
        </div>
      </div>
    </footer>
  );
}
