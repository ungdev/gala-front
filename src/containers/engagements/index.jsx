import React from 'react';
import logoAstree from '../../../src/assets/logo-astree.jpg';
import logoAnpaa from '../../../src/assets/logo-anpaa-10.png';
import logoRevivre from '../../../src/assets/logo-revivre.jpg';

import './engagements.css';

class Engagements extends React.Component {
  render() {
    return (
      <div className="page-container" id="access">
        <h1 className="centered">Engagements</h1>
        <hr />

        <h2 className="title-decoration">Prévention</h2>
        <p>
          La sécurité de chacun est notre priorité. Que cela soit pendant la soirée ou pour venir et repartir, il nous
          tient à cœur d'assurer la sécurité et de préserver la santé de chaque participant. Nous tenons donc à éviter
          également tout incident lié à la soirée.
        </p>
        <p className="prevention-measure">
          Afin d'atteindre ces objectifs, plusieurs dispositifs sont mis en place gratuitement :
          <ul>
            <li>Navette entre l'UTT et le centre-ville de Troyes</li>
            <li>Ethylotests jetables (dont éthylotests pour jeunes conducteurs)</li>
            <li>Ethylotests électroniques</li>
            <li>Bouchons d'oreille</li>
            <li>Préservatifs</li>
            <li>Couvercles de gobelet</li>
            <li>Stand de prévention et de sensibilisation</li>
            <li>Personnes de confiance</li>
            <li>Affichage</li>
          </ul>
          Nous mettons également en place 3 autres dispositifs en partenariat avec des associations spécilisées dans ce
          domaine :
          <ul>
            <li>
              un stand de prévention et de sensibilisation tenu par l'Association Nationale de Prévention Alcoologie et
              Addictologie (<a href="https://www.anpaa.asso.fr/">ANPAA</a>)
            </li>
            <li>
              la circulation dans la soirée de "Charlies", proposant de l'eau, des gâteaux secs ou juste de la
              conversation, en partenariat avec l'Association <a href="">Revivre</a>
            </li>
            <li>un bar sans alcool, tenu également en partenariat avec l'association Revivre</li>
          </ul>
          <div className="prevention-images">
            <div>
              <img src={logoAnpaa} alt="Logo ANPAA" id="img-anpaa" />
              <img src={logoRevivre} alt="Logo Revivre" id="img-revivre" />
            </div>
          </div>
        </p>

        <h2 className="title-decoration">Soutien d'une association</h2>
        <p>
          Parce que nous pensons que chacun à son niveau et dans la limite de ses capacités se doit de venir en aide aux
          autres, l'association Gala UTT s'engage chaque année auprès d'une association caritative pour lui apporter son
          soutien.
          <br />
          Ce soutien se traduit notamment en apportant une plus grande visibilité à l'association auprès du publique que
          l'événement peut toucher, mais aussi par le don d'une partie de nos bénéfices lorsque cela nous est possible.
          <br />
        </p>
        <p className="supported-association">
          Cette année, nous avions choisi d'apporter notre soutien à <a href="https://www.astree.asso.fr/fr/">Astrée</a>
          , association œuvrant pour restaurer le lien social et rompre la solitude à tous les âges.
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
        <p>
          Associations déjà soutenues :
          <ul>
            <li>Les Restos du Cœur</li>
            <li>Amnesty International</li>
            <li>UNICEF</li>
            <li>WWF-France</li>
          </ul>
        </p>

        <h2 className="title-decoration">Environnement</h2>
        <p>
          L'aspect environnemental prend une importance grandissante dans la société d'aujourd'hui, et dans notre
          événement aussi. Une part de plus en plus conséquente de notre budget est ainsi allouée à cette composante.
          Que cela soit avant, pendant ou après notre événement, nous mettons en place toujours plus de dispositifs de
          réduction, de tri et de valorisations des déchets.
        </p>
      </div>
    );
  }
}

export default Engagements;
