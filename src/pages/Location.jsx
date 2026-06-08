import React from 'react';
import { MapPin, Clock, Navigation } from 'lucide-react';

export default function Location() {
  return (
    <div className="page-content page-padding">
      <div className="location-grid fade-in">
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
                <p>
                  <a href="https://www.google.com/maps/search/365+Rte+de+Seysses,+31100+Toulouse" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>365 Rte de Seysses<br />31100 Toulouse</a>
                </p>
                <a href="https://www.google.com/maps/search/365+Rte+de+Seysses,+31100+Toulouse" target="_blank" rel="noreferrer" className="btn-link">Itinéraire <Navigation size={14} /></a>
              </div>
            </div>
            <div className="info-block">
              <Clock className="info-icon" />
              <div>
                <h4>Horaires d'ouverture</h4>
                <p><b>Lundi :</b> Fermé</p>
                <p><b>Mardi – Dimanche :</b> 10h00 – 19h00</p>
              </div>
            </div>
            <div className="info-block">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="info-icon"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.06 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/></svg>
              <div>
                <h4>Téléphone</h4>
                <p><a href="tel:0767855449" style={{ color: 'inherit', textDecoration: 'underline', fontWeight: '500' }}>07 67 85 54 49</a></p>
              </div>
            </div>
          </div>
        </div>
        <div className="location-map fade-in delay-1">
          <iframe
            src="https://maps.google.com/maps?q=365+Rte+de+Seysses,+31100+Toulouse&t=&z=15&ie=UTF8&iwloc=&output=embed"
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
    </div>
  );
}
