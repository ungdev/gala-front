import React from 'react';
import logoAstree from '../../assets/logo-astree.jpg';
import Heading from '../../components/heading';

import './commitments.scss';

function Commitments() {
  return (
    <>
      <Heading title="Engagements" />
      <div className="page-container" id="commitments">
        <h2 className="title-decoration">Prévention</h2>
        <p>
          La sécurité de chacun est notre priorité. Que cela soit pendant la soirée ou pour venir et repartir, il nous
          tient à cœur d'assurer la sécurité et de préserver la santé de chaque participant. Nous tenons donc à éviter
          également tout incident lié à la soirée.
        </p>
        <p>Afin d'atteindre ces objectifs, plusieurs dispositifs sont mis en place gratuitement :</p>
        <ul>
          <li>Bouchons d'oreille</li>
          <li>Stand de prévention et de sensibilisation</li>
          <li>Personnes de confiance</li>
          <li>Affichage</li>
        </ul>

        <h2 className="title-decoration">Soutien d'une association</h2>
        <p>
          Parce que nous pensons que chacun à son niveau et dans la limite de ses capacités se doit de venir en aide aux
          autres, l'association Gala UTT s'engage chaque année auprès d'une association caritative pour lui apporter son
          soutien.
          <br />
          Ce soutien se traduit notamment en apportant une plus grande visibilité à l'association auprès du public que
          l'événement peut toucher.
          <br />
        </p>
        <p className="supported-association">
          Cette année, nous avions choisi de renouveler notre soutien à Astrée, association œuvrant pour restaurer le
          lien social et rompre la solitude à tous les âges.
          <br />
          <br />
          <img src={logoAstree} alt="Logo Astrée" id="img-astree" />
          <br />
          Avec 500 bénévoles actifs, l'association accompagne les personnes en souffrance, sensibilise les collégiens à
          l'isolement pour prévenir des situations de décrochage et accompagne les personnes en sortie
          d'hospitalisation.
          <br />
          L'association travaille actuellement à l'ouverture d'une nouvelle antenne à Troyes. Elle recherche donc des
          bénévoles. Si vous souhaitez les aider, même occasionnellement, n'hésitez pas à les contacter sur leur site
          Web. Si vous souffrez vous-même d'isolement, Astrée est là pour vous accompagner, vous pouvez également les
          contacter sur leur site Web.
        </p>
        <p>Associations déjà soutenues :</p>
        <ul>
          <li>Les Restos du Cœur</li>
          <li>Amnesty International</li>
          <li>UNICEF</li>
          <li>WWF-France</li>
        </ul>
        <h2 className="title-decoration">Environnement</h2>
        <p>
          L'aspect environnemental prend une importance grandissante dans la société d'aujourd'hui, et dans notre
          événement aussi. Une part de plus en plus conséquente de notre budget est ainsi allouée à cette composante.
          Que cela soit avant, pendant ou après notre événement, nous mettons en place toujours plus de dispositifs de
          réduction, de tri et de valorisation des déchets.
        </p>
      </div>
    </>
  );
}

export default Commitments;
