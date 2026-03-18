import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import './App.css';

const MentionsLegales = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="legal-page fade-in">
            <nav className="navbar scrolled-nav">
                <div className="brand" onClick={onBack} style={{ cursor: 'pointer' }}>Elysma<span>Signature</span></div>
                <button className="btn-back" onClick={onBack}>
                    <ArrowLeft size={18} /> Retour au site
                </button>
            </nav>

            <div className="legal-content">
                <h1>Mentions Légales</h1>

                <section className="legal-section">
                    <h2>1. Éditeur du site</h2>
                    <p>
                        Le présent site, accessible à l'URL www.elysma.fr, est édité par :<br />
                        Elysma Coffee & Brunch, société au capital de 10 000 euros, inscrite au R.C.S. de Paris sous le numéro 123 456 789,<br />
                        dont le siège social est situé au 12 rue de la Paix, 75002 Paris.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>2. Hébergement</h2>
                    <p>
                        Le site est hébergé par Vercel Inc.<br />
                        440 N Barranca Ave #4133 Covina, CA 91723<br />
                        privacy@vercel.com
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. Directeur de la publication</h2>
                    <p>
                        Le Directeur de la publication du site est M. / Mme. Elysma Representative.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. Propriété intellectuelle</h2>
                    <p>
                        L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                    </p>
                    <p>
                        La reproduction de tout ou partie de ce site sur un support électronique quel qu'il soit est formellement interdite sauf autorisation expresse du directeur de la publication.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>5. Données personnelles</h2>
                    <p>
                        Les informations recueillies font l'objet d'un traitement informatique destiné à répondre aux demandes formulées. Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004, vous bénéficiez d'un droit d'accès et de rectification aux informations qui vous concernent, que vous pouvez exercer en vous adressant par e-mail ou par courrier aux coordonnées stipulées ci-dessus.
                    </p>
                </section>
            </div>

            <footer className="footer-bottom legal-footer">
                <p>&copy; {new Date().getFullYear()} Elysma Coffee & Brunch. Créé avec passion.</p>
            </footer>
        </div>
    );
};

export default MentionsLegales;
