import React from 'react';
import { Coffee, Utensils, Star } from 'lucide-react';

export default function Menu() {
  return (
    <div className="page-content page-padding">
      <div className="page-header fade-in">
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
    </div>
  );
}
