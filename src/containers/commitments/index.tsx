import React from 'react';
import Heading from '../../components/heading';
import IllustratedText from '../../components/illustratedText';

import './commitments.scss';

import placeholderImageSrc from '../../assets/feu.jpg';
import placeholderImageSrc1 from '../../assets/engage.jpg';
import trombiImageSrc from '../../assets/trombi.jpg';

import TopFloatingActionButton from '../../components/TopFloatingActionButton';
import Events from './events';

function Commitments() {
  return (
    <>
      <Heading title="À propos" />
      <TopFloatingActionButton />

      <div className="page-container" id="commitments">
        <div className="section">
          <IllustratedText
            imageSrc={placeholderImageSrc}
            alignment="left"
            title="Association soutenue"
            titleAlignment="left">
            <p>
              Parce que nous pensons que chacun à son niveau et dans la limite de ses capacités se doit de venir en aide
              aux autres, l'association Gala UTT s'engage chaque année auprès d'une association caritative pour lui
              apporter son soutien. Ce soutien se traduit notamment en apportant une plus grande visibilité à
              l'association auprès du public que l'événement peut toucher.
            </p>
            <p>
              Cette année, nous avions choisi de soutenir Solidarité Femmes Aube, qui lutte contre les violences faites
              aux femmes et les assiste en cas de problèmes.
            </p>
            <p>
              Solidarité Femmes fait partie de la Fédération Nationale Solidarité Femmes et a acquis une spécificité
              dans la lutte contre les violences faites aux femmes depuis 40 ans.
            </p>
            <p>
              Ils accueillent les femmes victimes de violence conjugale et leurs enfants, de façon inconditionnelle. Ils
              leur offrent une écoute, un soutien psychologique et un accompagnement en fonction de leur choix de vie, à
              leur rythme, et les orientent vers nos divers partenaires afin de leur proposer des réponses. Ils ont
              également une équipe mobile qui se déplace sur tout le département, en lieu neutre, pour aller vers les
              femmes qui ne peuvent pas se déplacer. Et ont à leur disposition un appartement-relais avec 2 chambres de
              3 couchages chacune, pour les femmes suivies à l’association et qui sont en capacité de vivre seule.
            </p>
            <p>
              Les professionnelles de cette association interviennent dans les établissements scolaires pour faire de la
              prévention, accompagnées d’une bénévole. De plus, ils sensibilisent le personnel du SAMU pour les aider à
              répondre aux demandes de femmes victimes de violence et établir un protocole. En partenariat avec la CAF,
              ils gèrent un lieu où les femmes peuvent trouver du linge de maison, de la vaisselle et du petit
              électro-ménager, leur permettant de redémarrer dans un nouvel appartement.
            </p>
            <p>
              Enfin, afin de sensibiliser le grand public, ils organisent tous les ans des soirées spectacle-débat, des
              vide-malles, pour faire connaître l’association.
            </p>
            <p>Associations déjà soutenues :</p>
            <ul>
              <li>Astrée</li>
              <li>Les Restos du Cœur</li>
              <li>Amnesty International</li>
              <li>UNICEF</li>
              <li>WWF-France</li>
            </ul>
            <h2 className="title-decoration">La prévention, nos actions</h2>
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
                Des bénévoles de l'association Revivre circulent pour distribuer de l'eau et des grignotis pour prévenir
                les dangers liés à la consommation d’alcool
              </li>
              <li>
                Des navettes permettant de se rendre à l’événement et d’en partir sans avoir à prendre le volant
                circulent tout au long de la soirée
              </li>
              <li>Un affichage de prévention est mis en place sur l’ensemble de l’événement</li>
            </ul>
            <p>
              Cette implication a valu au Gala UTT d'obtenir en 2015, 2018, 2019 et 2022 des prix au concours “Monte ta
              soirée", organisé par l’association Avenir Santé, qui récompense les structures qui ont le souci de rendre
              leurs soirées responsables.
            </p>
          </IllustratedText>
        </div>

        <div id="animations">
          <h1>Animations</h1>
          <Events />
        </div>


        {/* <div className="red section">
          <IllustratedText imageSrc={trombiImageSrc} alignment="center" title="L'équipe" titleAlignment="center">
            <p>Voici l'équipe qui se cache derrière Cassiopée qui vous propose l'évenement du Gala UTT</p>
          </IllustratedText>
        </div> */}

        <div className="red section">
          <IllustratedText
            imageSrc={placeholderImageSrc1}
            alignment="right"
            title="Cassiopée engagée"
            titleAlignment="left">
            <p>
              L’environnement est un aspect qui est de plus en plus important au sein de notre société actuelle et dans
              notre évènement. Cassiopée organise donc un gala engagé qui souhaite porter au mieux cette valeur.
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
