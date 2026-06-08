import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "Acceptez-vous les réservations ?",
    answer: "Oui, nous acceptons les réservations pour les groupes de 4 personnes ou plus. Pour les plus petits comités, nous fonctionnons sans réservation. N'hésitez pas à nous contacter pour privatiser le lieu !"
  },
  {
    question: "Proposez-vous des options végétariennes ou sans gluten ?",
    answer: "Absolument ! Notre carte change au fil des saisons, mais nous veillons toujours à inclure d'excellentes options végétariennes, véganes et sans gluten pour satisfaire tous les régimes."
  },
  {
    question: "Peut-on venir travailler avec son ordinateur ?",
    answer: "Bien sûr, nous accueillons les travailleurs nomades en semaine (du lundi au vendredi). Le week-end, nous privilégions la déconnexion et la convivialité lors de notre brunch signature."
  },
  {
    question: "Faites-vous à emporter ?",
    answer: "Oui, toutes nos boissons (cafés de spécialité, thés, jus frais) ainsi qu'une sélection de nos pâtisseries sont disponibles à emporter tout au long de la journée."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section fade-in">
      <div className="faq-container">
        <div className="faq-header">
          <span className="section-label">Vos Questions</span>
          <h2>Foire Aux <i>Questions</i></h2>
        </div>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleQuestion(index)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                {openIndex === index ? <ChevronUp className="faq-icon" /> : <ChevronDown className="faq-icon" />}
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
