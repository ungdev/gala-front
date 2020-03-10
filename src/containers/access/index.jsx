import React from 'react';

import './access.css';

class access extends React.Component {
  render() {
    return (
      <div className="page-container" id="access">
        <h1 className="centered">Accès</h1>
        <hr />

        <div className="plan-container">
          <iframe
            title="Plan accès Gala UTT"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5311.667167902067!2d4.064695!3d48.267577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42148ce859fa2d02!2sUniversit%C3%A9+de+Technologie+de+Troyes!5e0!3m2!1sfr!2sde!4v1547220645001"
            frameBorder="0"
            allowFullScreen></iframe>
        </div>

        <h2 className="title-decoration">Navettes depuis le centre ville de Troyes</h2>
        <p>
          À partir de 21h30, une navette gratuite est mise en place entre l'arrêt de bus Beurnonville et le parking de
          l’UTT.
        </p>
        <ul>
          <li>
            Départs Beurnonville : 21h30 – 22h00 – 22h15 – 22h30 – 22h45 – 23h00 – 23h15 – 23h30 – 23h45 – 00h00 – 00h15
            – 00h30
          </li>
          <li>
            Départs UTT : 01h00 – 01h30 – 02h00 – 02h30 – 03h00 – 03h30 – 03h45 – 04h00 – 04h15 – 04h30 – 04h45 – 05h00
            – 05h15 – 05h30
          </li>
        </ul>

        <h2 className="title-decoration">En voiture</h2>

        <p>
          <strong>Depuis Paris</strong>
        </p>
        <ul className="access-list">
          <li>
            <i className="fas fa-angle-right"></i> Autoroute A5 : sortie n°20 (Sainte Savine)
          </li>
          <li>
            <i className="fas fa-angle-right"></i> N60 direction Troyes
          </li>
          <li>
            <i className="fas fa-angle-right"></i> Rocade de contournement
          </li>
          <li>
            <i className="fas fa-angle-right"></i> Suivre Technopole de l’Aube
          </li>
        </ul>

        <p>
          <strong>Depuis Reims</strong>
        </p>
        <ul className="access-list">
          <li>
            <i className="fas fa-angle-right"></i> Autoroute A26 : sortie n°21 (Saint Thibault)
          </li>
          <li>
            <i className="fas fa-angle-right"></i> N71 direction Troyes
          </li>
          <li>
            <i className="fas fa-angle-right"></i> Rocade de contournement
          </li>
          <li>
            <i className="fas fa-angle-right"></i> Suivre Technopole de l’Aube
          </li>
        </ul>

        <p>
          <strong>Depuis Dijon</strong>
        </p>
        <ul className="access-list">
          <li>
            <i className="fas fa-angle-right"></i> Autoroute A5 : sortie n°21 (Saint Thibault)
          </li>
          <li>
            <i className="fas fa-angle-right"></i> N71 direction Troyes
          </li>
          <li>
            <i className="fas fa-angle-right"></i> Rocade de contournement
          </li>
          <li>
            <i className="fas fa-angle-right"></i> Suivre Technopole de l’Aube
          </li>
        </ul>

        <p>
          Un parking d’une centaine de places est disponible à proximité de l’UTT pour les personnes arrivant en
          voiture.
        </p>

        <h2 className="title-decoration">En train</h2>
        <p>
          <strong>Depuis Paris :</strong> TER Gare de l’Est vers Troyes
        </p>
      </div>
    );
  }
}

export default access;
