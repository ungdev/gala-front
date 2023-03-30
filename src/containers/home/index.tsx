/* eslint-disable import/no-unresolved */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/autoplay';

import { fetchPartners, Partner } from '../../utils/api';
import TopFloatingActionButton from '../../components/TopFloatingActionButton';
import BookmarkedSection from '../../components/bookmarkedSection';
import IllustratedText from '../../components/illustratedText';

import placeholderImage from '../../assets/scene2.jpg';
import './home.scss';

function Home() {
  const [partners, setPartners] = useState<Partner[] | null>(null);

  const previous = React.createRef<HTMLElement>();
  const next = React.createRef<HTMLElement>();

  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const apiPartners = await fetchPartners();
    setPartners(apiPartners.data);
  };

  return (
    <div id="home">
      <div className="poster-container">
        <Countdown
          date="6 May 2023 20:00:00 UTC+0200"
          renderer={(props) => {
            if (!props.days && !props.hours && !props.minutes && !props.seconds) {
              return null;
            }

            return (
              <div className="countdown">
                <div className="countdown-item">
                  <div>{Math.floor(props.days / 10)}</div>
                  <div>{props.days % 10}</div>
                  <div>Jour{props.days > 1 ? 's' : ''}</div>
                </div>
                <span>:</span>
                <div className="countdown-item">
                  <div>{Math.floor(props.hours / 10)}</div>
                  <div>{props.hours % 10}</div>
                  <div>Heure{props.hours > 1 ? 's' : ''}</div>
                </div>
                <span>:</span>
                <div className="countdown-item">
                  <div>{Math.floor(props.minutes / 10)}</div>
                  <div>{props.minutes % 10}</div>
                  <div>Minute{props.minutes > 1 ? 's' : ''}</div>
                </div>
                <span>:</span>
                <div className="countdown-item">
                  <div>{Math.floor(props.seconds / 10)}</div>
                  <div>{props.seconds % 10}</div>
                  <div>Seconde{props.seconds > 1 ? 's' : ''}</div>
                </div>
              </div>
            );
          }}
        />
      </div>

      <TopFloatingActionButton />

      <div className="page-container">
        <IllustratedText
          title="Qu'est-ce que Cassiopée&nbsp;?"
          titleAlignment="center"
          imageSrc={placeholderImage}
          alignment="left">
          <p>
            Cassiopée est une association qui organise la soirée de gala de l'Université de Technologie de Troyes depuis
            1996. Cassiopée est une soirée de prestige, organisée par les étudiants et pour les étudiants afin de
            célébrer leur année universitaire. L'association passe près de 1 an à organiser l'événement, avec environ 50
            membres puis une centaine de bénévoles durant les semaines qui précèdent Cassiopée.
          </p>
          <p>
            Sa spécificité ? Le fait de se renouveler chaque année à travers un thème différent et des animations
            phares. L’évènement est également soutenu par l'UTT ainsi que de nombreux partenaires.
          </p>
          <p>
            En plus d'une soirée hors du commun rassemblant plus de 3500 participants, 2 scènes, des bars, des
            foodtrucks, des animations et un feu d'artifice, Cassiopée accueille chaque année des artistes de renommée
            nationale et internationale !
          </p>
          <p>
            Aux affiches précédentes: Skip the use, 47 Ter, Roméo Elvis, Salut c'est cool, French Fuse, Kavinsky,
            Uppermost, les Casseurs Flowteurs…
          </p>
          <p>L’événement aura lieu le samedi 6 mai 2023 de 20h à 5h.</p>
          <p>On vous attend nombreux pour cette nouvelle édition !</p>
        </IllustratedText>
      </div>

      <BookmarkedSection title="Nos Partenaires">
        {partners && partners.length ? (
          <>
            <div className="partners-carousel-container">
              <i className="partners-carousel-arrow-left fas fa-chevron-left" ref={previous} />
              <i className="partners-carousel-arrow-right fas fa-chevron-right" ref={next} />

              <Swiper
                className="partners-carousel"
                modules={[Autoplay, Navigation]}
                loop
                speed={500}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                slidesPerView={2}
                spaceBetween={10}
                breakpoints={{
                  400: {
                    slidesPerView: 3,
                  },
                  550: {
                    slidesPerView: 4,
                  },
                  800: {
                    slidesPerView: 5,
                  },
                  1000: {
                    slidesPerView: 6,
                  },
                }}
                onInit={(swiper) => {
                  Object.assign(swiper.params.navigation, {
                    prevEl: previous.current,
                    nextEl: next.current,
                  });
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}>
                {partners.map((partner, i) => (
                  <SwiperSlide key={i}>
                    <a href={partner.url}>
                      <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            <div className="centered">
              <Link to="/partenaires" className="button">
                Tous les partenaires
              </Link>
            </div>
          </>
        ) : partners === null ? (
          <div className="partners-loader">
            <i className="fas fa-spinner fa-spin" />
          </div>
        ) : (
          <div className="no-partners">Les partenaires seront bientôt disponibles</div>
        )}
      </BookmarkedSection>
    </div>
  );
}

export default Home;
