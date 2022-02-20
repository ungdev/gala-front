import React from 'react';

import './tickets.scss';

function Tickets() {
  return (
    <div className="page-container" id="tickets">
      <div className="billetterie_container">
        <div className="centered">
          <h1>Billetterie</h1>
          <hr />
        </div>

        <p className="centered">
          Veuillez lire attentivement les conditions d'entrée avant de vous inscrire. Afin de respecter une jauge de
          1000 participants, l’inscription gratuite est obligatoire pour accéder à l’événement.
        </p>

        <h2 className="title-decoration">Vêtements</h2>
        <p>Venez comme vous êtes, sans oublier votre masque !</p>

        <h2 className="title-decoration">Identité</h2>
        <p>
          Une pièce d'identité (permis de conduire, carte d'identité ou passeport) est nécessaire afin de pouvoir entrer
          au sein de l'événement, les places étant nominatives.
        </p>
        <p>
          <strong>Les organisateurs se réservent le droit d'accès.</strong>
        </p>

        <h2 className="title-decoration">Horaires</h2>
        <p>Ouverture de l’événement à 14h30. Début des concerts à 15h. Fermeture de l’événement à 19h.</p>

        <h2 className="title-decoration">Sécurité</h2>
        <p>
          Les dispositifs dangereux tels que les armes à feu, les armes blanches ou les objets contondants sont
          interdits à l'intérieur du Gala, sans exception. <strong>Une fouille sera réalisée avant toute entrée</strong>
          , provoquant la confiscation de tout matériel pouvant poser un problème de sécurité (rasoir, aérosol, ...).
        </p>
        <button className="tickets-button button">La billetterie est fermée</button>
      </div>
    </div>
  );
}

export default Tickets;
