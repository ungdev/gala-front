import React from 'react';

import './infos.scss';
import tenueIcon from '../../assets/tenue.png';
import securiteIcon from '../../assets/securite.jpg';
import billeterieIcon from '../../assets/billeterie.png';
import sceneIcon from '../../assets/scene.jpg';

import IllustratedText from '../../components/illustratedText';
import Heading from '../../components/heading';
import TopFloatingActionButton from '../../components/TopFloatingActionButton';
import Title from '../../components/title';

function Infos() {
  return (
    <>
      <Heading title="Informations pratiques" />
      <TopFloatingActionButton />

      <div className="page-container" id="pratique">
        <div className="container">
          <Title>Plan</Title>
          <img src="/plan-cassiopee.png" alt="Plan de la soirée." />
          {/* <Map /> Can be reused in the future */}
          <a href="/plan-cassiopee.png" download className="button">
            Télécharger le plan au format png
          </a>
        </div>

        <div className="red section">
          <div className="container">
            <Title>Horaires des navettes</Title>
            <div>
              Des navettes seront disponibles (trajet Beurnonville -&gt; Gillon -&gt; UTT) aux horaires suivants{' '}
              <em>(horaires à l'arrêt Beurnonville)</em>:
              <br />
              20h15 - 20h30 - 21h00 - 21h15 - 21h30 - 22h00 - 22h15 - 22h30 - 22h45 - 23h00 - 23h15 - 23h30 - 23h45
              <br />
              <br />
              Des navettes seront disponibles (trajet UTT -&gt; Gillon -&gt; Beurnonville) aux horaires suivants{' '}
              <em>(horaires au parking de l'UTT)</em>:
              <br />
              1h00 - 1h30 - 2h00 - 2h30 - 3h00 - 3h30 - 3h45 - 4h00 - 4h15 - 4h30 - 4h45 - 5h00 - 5h15
            </div>
          </div>
        </div>

        <IllustratedText
          imageSrc={tenueIcon}
          title="Dress Code: Tenue de soirée exigée"
          alignment="left"
          titleAlignment="left">
          <p>Tenue correcte exigée pour la soirée. </p>
          <p>
            La totale costard cravate/robe de soirée n'est pas obligatoire, il suffit de faire un petit effort ! Cela
            dit c'est la soirée idéale pour sortir votre plus belle tenue !
          </p>
        </IllustratedText>
        <div className="red section">
          <IllustratedText imageSrc={securiteIcon} alignment="right" title="Objets interdits" titleAlignment="left">
            <p>Une palpation est organisée à l’entrée du site de Cassiopée.</p>
            <p>
              Il est interdit de se présenter en possession d’armes (y compris les armes d’autodéfense), d’objets
              explosifs ou inflammables, de spray anti-agression, déodorants ou aérosols, d’objets tranchants ou
              contondants, d’outils et objets métalliques, d’objets encombrants (casque de moto, antivols...), des
              récipients (pleins ou vides), de la nourriture ou des boissons, drogue et stupéfiants.
            </p>
          </IllustratedText>
        </div>
        <IllustratedText
          imageSrc={billeterieIcon}
          title="Informations billetterie"
          alignment="left"
          titleAlignment="left">
          <p>La billetterie est ouverte !</p>
          <p>Pour votre information les tarifs sont les suivants :</p>
          <ul>
            <li>Cotisants BDE UTT et étudiants des écoles partenaires : 26€</li>
            <li>Étudiants : 29€</li>
            <li>Non-étudiants : 32€</li>
          </ul>
          <p>Vous pouvez dès à présent prendre vos places pour le 6 mai 2023 !</p>
          <p>
            Les écoles partenaires seront annoncées au fur et à mesure des accords, n'hésites pas à nous contacter si tu
            penses que ton école serait intéressée.
          </p>
          <p>
            Lors de votre arrivée le jour J n’oubliez pas de vous munir de votre billet ainsi que d’une pièce d'identité
            (permis de conduire, carte d'identité ou passeport), les places étant nominatives.
          </p>
        </IllustratedText>
        <div className="red section">
          <div className="illustrated-text left">
            <Title alignment="left">Accès</Title>
            <div className="side">
              <h4>En voiture :</h4>
              <h5>Depuis Paris</h5>
              <ul>
                <li>Autoroute A5 : sortie n°20 (Sainte Savine)</li>
                <li>N60 direction Troyes</li>
                <li>Rocade de contournement</li>
                <li>Suivre Technopole de l’Aube</li>
              </ul>
              <h5>Depuis Reims</h5>
              <ul>
                <li>Autoroute A26 : sortie n°21 (Saint Thibault)</li>
                <li>N71 direction Troyes</li>
                <li>Rocade de contournement</li>
                <li>Suivre Technopole de l’Aube</li>
              </ul>
              <h5>Depuis Dijon</h5>
              <ul>
                <li>Autoroute A5 : sortie n°20 (Sainte Savine)</li>
                <li>N71 direction Troyes</li>
                <li>Rocade de contournement</li>
                <li>Suivre Technopole de l’Aube</li>
              </ul>
              <p className="supported-association">
                Un parking d’une centaine de places est disponible à proximité de l’UTT pour les personnes arrivant en
                voiture.
              </p>
              <h4>En covoiture :</h4>
              <p>Un groupe Facebook sera mit en place afin de réaliser du covoiturage pour se rendre à l’UTT.</p>
              <h4>En train :</h4>
              <p>Depuis Paris : TER Gare de l’Est vers Troyes</p>
            </div>
            <iframe
              title="Plan accès Gala UTT"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5311.667167902067!2d4.064695!3d48.267577!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42148ce859fa2d02!2sUniversit%C3%A9+de+Technologie+de+Troyes!5e0!3m2!1sfr!2sde!4v1547220645001"
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
        <IllustratedText
          imageSrc={sceneIcon}
          title="Politique de confidentialité"
          alignment="left"
          titleAlignment="left">
          <p>
            Lors de votre utilisation du site web, il sera susceptible d’utiliser votre navigateur web. Vos données ne
            seront pas transmises à des tiers. Pour toutes informations relatives à vos données, vous pouvez contactez
            par courrier l’association Gala UTT, 12 rue Marie Curie, Troyes 10000.
          </p>
          <br />
          <p>
            When using the website, it will likely use your web browser. Your data will not be passed on to third
            parties. For any information concerning your data you can contact by mail the association Gala UTT, 12 rue
            Marie Curie, Troyes 10000.
          </p>
        </IllustratedText>
      </div>
    </>
  );
}

export default Infos;
