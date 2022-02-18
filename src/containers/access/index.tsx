import React from 'react';

import './access.scss';

const Access = () => (
  <div className="page-container" id="access">
    <h1>Accès</h1>
    <hr />

    <div className="plan-container">
      <iframe
        title="Plan accès Gala UTT"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5311.667167902067!2d4.064695!3d48.267577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42148ce859fa2d02!2sUniversit%C3%A9+de+Technologie+de+Troyes!5e0!3m2!1sfr!2sde!4v1547220645001"
        frameBorder="0"
        allowFullScreen
      />
    </div>

    <h2 className="title-decoration">En voiture</h2>

    <p>
      <strong>Depuis Paris</strong>
    </p>
    <ul className="access-list">
      <li>Autoroute A5 : sortie n°20 (Sainte Savine)</li>
      <li>N60 direction Troyes</li>
      <li>Rocade de contournement</li>
      <li>Suivre Technopole de l’Aube</li>
    </ul>

    <p>
      <strong>Depuis Reims</strong>
    </p>
    <ul className="access-list">
      <li>Autoroute A26 : sortie n°21 (Saint Thibault)</li>
      <li>N71 direction Troyes</li>
      <li>Rocade de contournement</li>
      <li>Suivre Technopole de l’Aube</li>
    </ul>

    <p>
      <strong>Depuis Dijon</strong>
    </p>
    <ul className="access-list">
      <li>Autoroute A5 : sortie n°21 (Saint Thibault)</li>
      <li>N71 direction Troyes</li>
      <li>Rocade de contournement</li>
      <li>Suivre Technopole de l’Aube</li>
    </ul>

    <p>
      Un parking d’une centaine de places est disponible à proximité de l’UTT pour les personnes arrivant en voiture.
    </p>

    <h2 className="title-decoration">En train</h2>
    <p>
      <strong>Depuis Paris :</strong> TER Gare de l’Est vers Troyes
    </p>
  </div>
);

export default Access;
