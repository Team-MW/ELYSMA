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
        <div className="location-map fade-in delay-1">
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
    </div>
  );
}
