import React from 'react';
import Heading from '../../components/heading';

import './privacy.scss';

function Privacy() {
  return (
    <div className="page-container" id="privacy">
      <Heading title="Politique de confidentialité" />

      <div className="wrapper">
        <p>
          Lors de votre utilisation de l’application ou du site web, votre géolocalisation peut être utilisé pour le bon
          fonctionnement de l’application. L’application sera susceptible d’utiliser votre navigateur web. Vos données
          ne seront pas transmises à des tiers. Pour toutes informations relatives à vos données, vous pouvez contactez
          par courrier l’association Gala UTT, 12 rue Marie Curie, Troyes 10000.
        </p>

        <br />

        <p>
          When using the application or website, your geolocation can be used for the proper functioning of the
          application. The application will likely use your web browser. Your data will not be passed on to third
          parties. For any information concerning your data you can contact by mail the association Gala UTT, 12 rue
          Marie Curie, Troyes 10000.
        </p>
      </div>
    </div>
  );
}

export default Privacy;
