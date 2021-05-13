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

          <p>Lors de la manifestation, les mesures suivantes sont prévues :</p>

          <ul>
            <li>Des espaces ouverts extérieurs, tandis que les locaux seront fermés au public.</li>
            <li>Du matériel tel que du gel hydroalcoolique mis à disposition dans des bornes prévues à cet effet.</li>
            <li>Des tests proposés en amont de l’événement.</li>
            <li>Des équipes de désinfection patrouillant au sein de la manifestation.</li>
            <li>Conformément aux recommandations gouvernementales, le public devant les scènes sera assis.</li>
            <li>La distanciation sociale devra être respectée.</li>
            <li>L’association prévoit une communication préventive.</li>
            <li>Signalétique dans les différentes enceintes.</li>
            <li>Communication régulière avec les autorités locales.</li>
          </ul>

          <p>
            Les masques seront obligatoires dans toute l’enceinte de l'événement et les gestes barrières devront être
            respectés.
          </p>
        </div>
      </div>
    );
  }
}

export default Covid19;
