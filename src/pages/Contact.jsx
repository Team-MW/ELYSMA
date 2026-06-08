import React, { useState } from 'react';

export default function Contact() {
  const [formStatus, setFormStatus] = useState(null);

  return (
    <div className="page-content page-padding">
      <div className="contact-container fade-in">
        <div className="contact-header">
          <span className="section-label">Nous Contacter</span>
          <h2>Une demande <i>particulière</i> ?</h2>
          <p>Privatisation, événement, ou simple question, notre équipe est à votre écoute.</p>
        </div>
        <form className="contact-form" onSubmit={async (e) => {
          e.preventDefault();
          setFormStatus("sending");
          
          const formData = new FormData(e.target);
          const data = Object.fromEntries(formData.entries());
          
          try {
            const res = await fetch("https://mail-form-xi.vercel.app/api/form", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                formId: "Elysmacontact",
                data: data
              })
            });
            
            if (res.ok) {
              setFormStatus("success");
              e.target.reset();
              setTimeout(() => setFormStatus(null), 5000);
            } else {
              setFormStatus("error");
            }
          } catch (err) {
            setFormStatus("error");
          }
        }}>
          <div className="form-group">
            <label htmlFor="name">Nom complet</label>
            <input type="text" id="name" name="name" placeholder="Votre nom" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="votre@email.com" required />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" placeholder="Comment pouvons-nous vous aider ?" required></textarea>
          </div>
          
          <button type="submit" className="btn-submit" disabled={formStatus === 'sending'}>
            {formStatus === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
          
          {formStatus === 'success' && <p className="form-msg success">✅ Votre message a été envoyé avec succès !</p>}
          {formStatus === 'error' && <p className="form-msg error">❌ Une erreur est survenue lors de l'envoi.</p>}
        </form>
      </div>
    </div>
  );
}
