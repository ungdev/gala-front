import React from 'react';

import './covid-19.css';

class Covid19 extends React.Component {
  render() {
    return (
      <div className="page-container" id="covid-19">
        <div className="billetterie_container">
          <div className="centered">
            <h1>Infos COVID-19</h1>
            <hr />
          </div>

          <p className="centered">Veuillez lire attentivement les conditions d'entrée avant d'acheter votre billet.</p>

          <h2 className="title-decoration">Vêtements</h2>
          <p>Une tenue de Gala est exigée. Un vestiaire gratuit sera mis à votre disposition toute la soirée.</p>
          <p>Sont autorisés :</p>
          <ul>
            <li>Robe de soirée ou tailleur</li>
            <li>Costume</li>
            <li>Chemise</li>
            <li>Pantalon en toile</li>
            <li>Chaussures propres</li>
          </ul>
          <p>Sont prohibés :</p>
          <ul>
            <li>Jeans</li>
            <li>Survêtements (Eh oui mamène désolé !!)</li>
            <li>Chaussures de sport (baskets)</li>
          </ul>
          <p>
            <strong>
              Toute personne ne respectant pas le code vestimentaire de la soirée pourra se voir refuser l'entrée par
              les organisateurs.
            </strong>
          </p>

          <h2 className="title-decoration">Identité</h2>
          <p>
            Une pièce d'identité (permis de conduire, carte d'identité ou passeport) ainsi que le billet sont
            nécessaires afin de pouvoir entrer au sein de l'événement (les places étant nominatives).
          </p>
          <p>
            Veuillez noter que l'entrée est <strong>interdite aux mineurs</strong> hors UTT, même avec autorisation d'un
            responsable légal.
          </p>
          <p>
            <strong>Les organisateurs se réservent le droit d'accès.</strong>
          </p>

          <h2 className="title-decoration">Horaires</h2>
          <p>Ouverture des portes à 20h. Fin des entrées à 2h. Fin de l'événement à 5h.</p>

          <h2 className="title-decoration">Sécurité</h2>
          <p>
            Les dispositifs dangereux tels que les armes à feu ou les armes blanches sont interdits à l'intérieur du
            Gala, sans exception. <strong>Une fouille sera réalisée avant toute entrée</strong>, provoquant la
            confiscation de tout matériel pouvant poser un problème de sécurité (rasoir, aérosol, ...).
          </p>
        </div>
      </div>
    );
  }
}

export default Covid19;
