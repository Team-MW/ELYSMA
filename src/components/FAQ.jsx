import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const faqByPage = {
  home: [
    {
      question: "Acceptez-vous les réservations ?",
      answer: "Oui, nous acceptons les réservations pour les groupes de 4 personnes ou plus. Pour les plus petits comités, nous fonctionnons sans réservation. N'hésitez pas à nous contacter pour privatiser le lieu !"
    },
    {
      question: "Êtes-vous ouvert le lundi ?",
      answer: "Non, Elysma est fermé le lundi. Nous vous accueillons du mardi au dimanche de 10h00 à 19h00 avec plaisir !"
    },
    {
      question: "Proposez-vous des options végétariennes ou sans gluten ?",
      answer: "Absolument ! Notre carte change au fil des saisons, mais nous veillons toujours à inclure d'excellentes options végétariennes, véganes et sans gluten pour satisfaire tous les régimes."
    },
    {
      question: "Faites-vous à emporter ?",
      answer: "Oui, toutes nos boissons (cafés de spécialité, thés, jus frais) ainsi qu'une sélection de nos pâtisseries sont disponibles à emporter tout au long de la journée."
    }
  ],
  menu: [
    {
      question: "La carte change-t-elle souvent ?",
      answer: "Oui ! Nous travaillons avec des produits frais et locaux, donc notre carte évolue au fil des saisons pour vous proposer le meilleur de chaque période de l'année."
    },
    {
      question: "Proposez-vous des options végétariennes ou sans gluten ?",
      answer: "Absolument ! Nous veillons toujours à inclure d'excellentes options végétariennes, véganes et sans gluten. N'hésitez pas à demander à notre équipe pour plus de détails."
    },
    {
      question: "Peut-on commander un gâteau personnalisé ?",
      answer: "Oui, nous réalisons des gâteaux sur commande pour vos anniversaires, mariages et événements. Contactez-nous au moins 5 jours à l'avance via notre formulaire de contact."
    },
    {
      question: "Servez-vous du café de spécialité ?",
      answer: "Tout à fait ! Nous travaillons avec des torréfacteurs locaux et proposons une sélection de cafés de spécialité : espresso, flat white, cold brew, et bien plus encore."
    }
  ],
  location: [
    {
      question: "Où êtes-vous situés exactement ?",
      answer: "Nous sommes au 365 Route de Seysses, 31100 Toulouse. Vous pouvez cliquer sur 'Itinéraire' pour ouvrir Google Maps directement depuis notre page."
    },
    {
      question: "Y a-t-il un parking à proximité ?",
      answer: "Oui, un parking gratuit est disponible juste devant l'établissement, ce qui rend la venue très pratique en voiture."
    },
    {
      question: "Quels sont vos horaires d'ouverture ?",
      answer: "Nous sommes ouverts du mardi au dimanche de 10h00 à 19h00. Nous sommes fermés le lundi. Ces horaires peuvent évoluer lors des jours fériés."
    },
    {
      question: "Y a-t-il une terrasse ?",
      answer: "Oui, nous disposons d'une belle terrasse pour profiter des beaux jours. Elle est disponible selon la météo et les saisons."
    }
  ],
  contact: [
    {
      question: "Quel est le délai de réponse à mon message ?",
      answer: "Nous répondons à tous les messages dans un délai de 24 à 48h ouvrées. Pour une urgence, vous pouvez nous appeler directement au 07 67 85 54 49."
    },
    {
      question: "Comment réserver pour un événement privé ?",
      answer: "Pour toute demande de privatisation (anniversaire, baby shower, réunion professionnelle…), remplissez le formulaire de contact en précisant la date, le nombre de personnes et le type d'événement."
    },
    {
      question: "Puis-je commander un gâteau via ce formulaire ?",
      answer: "Oui ! Précisez dans votre message le type de gâteau souhaité, la date et le nombre de personnes. Nous vous recontacterons pour valider les détails et le devis."
    },
    {
      question: "Proposez-vous des partenariats ou collaborations ?",
      answer: "Oui, nous sommes ouverts aux collaborations avec des artistes, photographes, créateurs et marques locales qui partagent notre vision. Écrivez-nous via le formulaire !"
    }
  ]
};

export default function FAQ({ page = 'home' }) {
  const [openIndex, setOpenIndex] = useState(null);
  const questions = faqByPage[page] || faqByPage.home;

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
          {questions.map((item, index) => (
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
