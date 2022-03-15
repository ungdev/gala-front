import React from 'react';
import logoAstree from '../../assets/logo-astree.jpg';
import Heading from '../../components/heading';
import IllustratedText from '../../components/illustratedText';

import './commitments.scss';

import placeholderImageSrc from '../../assets/feu.jpg';
import placeholderImageSrc1 from '../../assets/engage.jpg';

import TopFloatingActionButton from '../../components/TopFloatingActionButton';

function Commitments() {
  return (
    <>
      <Heading title="À propos" />
      <TopFloatingActionButton />

      <div className="page-container" id="commitments">
        <div className="section">
          <IllustratedText imageSrc={placeholderImageSrc} alignment="left" title="Astrée" titleAlignment="left">
            <p>
              Parce que nous pensons que chacun à son niveau et dans la limite de ses capacités se doit de venir en aide
              aux autres, l'association Gala UTT s'engage chaque année auprès d'une association caritative pour lui
              apporter son soutien. Ce soutien se traduit notamment en apportant une plus grande visibilité à
              l'association auprès du public que l'événement peut toucher.
            </p>
            <p>
              Cette année, nous avions choisi de renouveler notre soutien à Astrée, association œuvrant pour restaurer
              le lien social et rompre la solitude à tous les âges
            </p>
            <p>
              Avec 500 bénévoles actifs, l'association accompagne les personnes en souffrance, sensibilise les
              collégiens à l'isolement pour prévenir des situations de décrochage et accompagne les personnes en sortie
              d'hospitalisation. L'association travaille actuellement à l'ouverture d'une nouvelle antenne à Troyes.
              Elle recherche donc des bénévoles. Si vous souhaitez les aider, même occasionnellement, n'hésitez pas à
              les contacter sur leur site Web. Si vous souffrez vous-même d'isolement, Astrée est là pour vous
              accompagner, vous pouvez également les contacter sur leur site Web.
            </p>
            <p>Associations déjà soutenues :</p>
            <ul>
              <li>Les Restos du Cœur</li>
              <li>Amnesty International</li>
              <li>UNICEF</li>
              <li>WWF-France</li>
            </ul>
            <h2 className="title-decoration">Le soucis de la prévention</h2>
            <p>
              La sécurité de chacun est notre priorité. Que cela soit pendant la soirée, pour venir ou pour repartir. Il
              nous tient à cœur d'assurer la sécurité et de préserver la santé de chaque participant. Nous tenons donc à
              éviter également tout incident lié à la soirée.
            </p>
            <p>Afin d'éviter tous risques, plusieurs dispositifs sont mis en place gratuitement :</p>
            <ul>
              <li>Des bouchons d'oreille, des préservatifs et des éthylotests sont à votre disposition</li>
              <li>Un stand de prévention et de sensibilisation est mis en place</li>
              <li>
                Des bénévoles de l'association revivre circulent pour distribuer de l'eau et des grignotis pour prévenir
                les dangers liés à la consommation d’alcool
              </li>
              <li>
                Des navettes permettant de se rendre à l’événement et d’en partir sans avoir à prendre le volant
                circulent tout au long de la soirée
              </li>
              <li>Un affichage de prévention est mis en place sur l’ensemble de l’événement</li>
            </ul>
            <p>
              Cette implication a valu au Gala UTT d'obtenir en 2015, 2018 et 2019 des prix au concours “Monte ta
              soirée", organisé par l’association avenir santé, qui récompense les structures qui ont le souci de rendre
              leurs soirées responsables.
            </p>
          </IllustratedText>
        </div>

        <div className="red section">
          <IllustratedText
            imageSrc={placeholderImageSrc1}
            alignment="right"
            title="Le gala engagé"
            titleAlignment="left">
            <p>
              L’environnement est un aspect qui est de plus en plus important au sein de notre société actuelle et dans
              notre évènement. Le Gala UTT est donc un gala engagé qui souhaite porter au mieux cette valeur.
              <br />
            </p>
            <p className="supported-association">
              Une part de plus en plus conséquente de notre budget est ainsi allouée au développement durable. Que cela
              soit avant, pendant ou après notre événement, nous mettons en place toujours plus de dispositifs de
              réduction des déchets, de tri et de valorisation des déchets comme : flûtes à champagne consignées et
              réutilisables, collecte des bouteilles de champagne consignées qui sont amenées ensuite en déchetterie,
              coordination avec les mairies locales pour le traitement et le recyclage, dans les meilleures conditions,
              des déchets tels que la moquette et le carton, écolo-tags…
            </p>
          </IllustratedText>
        </div>
      </div>
    </>
  );
}

export default Commitments;
