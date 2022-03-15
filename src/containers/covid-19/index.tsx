import React from 'react';

import './covid-19.scss';
import covidIcon from '../../assets/covid.jpg';
import tenueIcon from '../../assets/tenue.jpg';
import securiteIcon from '../../assets/securite.jpg';
import billeterieIcon from '../../assets/billeterie.png';
import sceneIcon from '../../assets/scene.jpg';

import handSanitizerIcon from '../../assets/hand-sanitizer.png';
import maskIcon from '../../assets/surgical-mask.png';
import passIcon from '../../assets/pass.png';
import communicationIcon from '../../assets/communication.png';
import IllustratedText from '../../components/illustratedText';
import Heading from '../../components/heading';
import BookmarkedSection from '../../components/bookmarkedSection';
import TopFloatingActionButton from '../../components/TopFloatingActionButton';
import placeholderImageSrc from '../../assets/placeholder.jpg';

function Covid19() {
  return (
    <>
      <Heading title="Informations pratiques" />
      <TopFloatingActionButton />

      <div className="page-container" id="covid-19">
        <IllustratedText imageSrc={covidIcon} title="Situation sur la covid-19" alignment="left" titleAlignment="left">
          <p>
            Au sein de cette section vous trouverez toutes les informations liées à la situation sanitaire actuelle.
            Tout changement des mesures gouvernementales impactant notre évènement seront disponible ici.
          </p>
        </IllustratedText>

        <BookmarkedSection title="LE PROTOCOLE">
          <div className="item-container">
            <div className="item">
              <div className="image-container">
                <img src={handSanitizerIcon} alt="Gel hydroalcoolique" />
              </div>
              <h4>Gel hydroalcoolique</h4>
              <p>Du matériel tel que du gel hydroalcoolique mis à disposition dans des bornes prévues à cet effet</p>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={maskIcon} alt="Masque chirurgical" />
              </div>
              <h4>Le masque</h4>
              <p>Le masque est obligatoire au sein des bâtiments</p>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={passIcon} alt="Distanciation sociale" />
              </div>
              <h4>Pass-sanitaire</h4>
              <p>Le pass-sanitaire est requis pour participer</p>
            </div>
            <div className="item">
              <div className="image-container">
                <img src={communicationIcon} alt="Interdiction: Poignée de main" />
              </div>
              <h4>Communication préventive</h4>
              <p>
                L’association prévoit une communication préventive. Des signalétiques seront présentes dans les
                différentes enceintes. Une communication régulière avec les autorités locales est mise en place.
              </p>
            </div>
          </div>
        </BookmarkedSection>
        <IllustratedText imageSrc={tenueIcon} title="La tenue" alignment="left" titleAlignment="left">
          <p>Venez comme vous êtes !</p>
          <p>
            Une tenue simplement composée d’une chemise et d’un jean suffit. En revanche si vous avez envie de sortir le
            costume ou une belle robe c’est l’occasion parfaite.
          </p>
        </IllustratedText>
        <div className="red section">
          <IllustratedText
            imageSrc={securiteIcon}
            alignment="right"
            title="Sécurité"
            titleAlignment="left">
            <p>
            Attention, les objets dangereux comme les armes blanches, armes à feu ou objets contondants sont strictement 
            internet à l’intérieur du Gala. Nous procéderons à une fouille avant chaque entrée, provoquant la confiscation 
            de tout matériel pouvant poser un problème de sécurité (rasoir, aérosol, ...).
              <br />
            </p>
          </IllustratedText>
        </div>
        <IllustratedText imageSrc={billeterieIcon} title="Informations billeterie" alignment="left" titleAlignment="left">
          <p>La billetterie est ouverte !</p>
          <p>Pour votre information les tarifs sont les suivants :</p>
          <ul>
            <li>Cotisants BDE UTT et étudiants des écoles partenaires : 25€</li>
            <li>Étudiants : 28€</li>
            <li>Non-étudiants : 30€</li>
          </ul>
          <p>Vous pouvez dès à présent prendre vos places pour le 14 mai 2022 !</p>
          <p>
            Les écoles partenaires seront annoncées au fur et à mesure des accords, n'hésites pas à nous contacter si tu
            penses que ton école serait intéressée.
          </p>
          <p>
            Lors de votre arrivé le jour J n’oubliez pas de vous munir de votre billet ainsi que d’une pièce d'identité
            (permis de conduire, carte d'identité ou passeport), les places étant nominatives.
          </p>
        </IllustratedText>
        <div className="red section">
          <IllustratedText imageSrc={placeholderImageSrc} alignment="right" title="Accés" titleAlignment="left">
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
          </IllustratedText>
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

export default Covid19;
