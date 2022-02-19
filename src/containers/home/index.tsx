import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import OwlCarousel from 'react-owl-carousel';

import axios from '../../utils/axios';

import 'owl.carousel/dist/assets/owl.carousel.css';
import './home.scss';

interface RawPartner {
  url: string;
  image: string;
  name: string;
}

const Home = () => {
  const [partners, setPartners] = useState<JSX.Element[] | null>(null);
  const [isTop, setTop] = useState(true);

  const carouselRef = React.createRef<OwlCarousel>();
  let carouselInterval: number | null = null;

  useEffect(() => {
    fetchPartners();
    window.addEventListener('scroll', scrollHandle, { passive: true });
    window.addEventListener('touchmove', scrollHandle, { passive: true });
    return () => {
      clearCarouselInterval();
      window.removeEventListener('scroll', scrollHandle);
      window.removeEventListener('touchmove', scrollHandle);
    };
  }, []);

  const scrollHandle = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    setTop(scrollTop === 0);
  };

  const clearCarouselInterval = () => {
    if (carouselInterval) {
      window.clearInterval(carouselInterval);
      carouselInterval = null;
    }
  };

  const setCarouselInterval = () => {
    if (!carouselInterval) {
      carouselInterval = window.setInterval(() => {
        if (carouselRef.current) {
          carouselRef.current.next(1200);
        }
      }, 2000);
    }
  };

  const carouselPrev = () => {
    carouselRef.current?.prev(300);

    // Reset carousel interval
    clearCarouselInterval();
    setCarouselInterval();
  };

  const carouselNext = () => {
    carouselRef.current?.next(300);

    // Reset carousel interval
    clearCarouselInterval();
    setCarouselInterval();
  };

  const handleArrow = () => {
    if (!isTop) {
      return;
    }

    document.body.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight - 80,
    });
  };

  const fetchPartners = async () => {
    const apiPartners = await axios.get<RawPartner[]>('partners');

    const partners = apiPartners.data.map((partner, i) => (
      <a href={partner.url} key={i}>
        <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
      </a>
    ));

    setPartners(partners);
  };

  return (
    <div id="home">
      <div className="poster-container">
        <button className={`arrow-button${isTop ? ' active' : ''}`} onClick={handleArrow}>
          <div className="arrow-icon">
            <i className="fas fa-chevron-down" />
          </div>
        </button>
      </div>

      <div className="page-container">
        <Countdown
          date="05 June 2021 14:30:00"
          renderer={(props) => {
            if (!props.days && !props.hours && !props.minutes && !props.seconds) {
              return null;
            }

            return (
              <div className="countdown">
                <div className="countdown-item">
                  <div>{props.days}</div>
                  <div>Jour{props.days > 1 ? 's' : ''}</div>
                </div>
                <div className="countdown-item">
                  <div>{props.hours}</div>
                  <div>Heure{props.hours > 1 ? 's' : ''}</div>
                </div>
                <div className="countdown-item">
                  <div>{props.minutes}</div>
                  <div>Minute{props.minutes > 1 ? 's' : ''}</div>
                </div>
                <div className="countdown-item">
                  <div>{props.seconds}</div>
                  <div>Seconde{props.seconds > 1 ? 's' : ''}</div>
                </div>
              </div>
            );
          }}
        />

        <div className="poster-text">
          <h1>À propos de Cassiopée</h1>

          <div className="important">
            <h2>⚠️ Important ⚠️</h2>
            <p>
              Malgré toute l’inventivité dont l’équipe de Cassiopée a pu faire preuve pour organiser un événement
              respectant les normes en vigueur et préservant la santé des participants, nous sommes au regret de vous
              annoncer l’annulation de Cassiopée Day Edition prévu le 5 juin 2021 💔
              <br />
              C’est le cœur lourd que nous vous disons à l’année prochaine pour que Cassiopée puisse enfin voir le jour
              🙋
            </p>
          </div>

          <p>
            Cassiopée Day Edition est un événement géré par l'association Gala UTT de l'Université de Technologie de
            Troyes qui organise tous les ans une soirée incontournable dans le Grand Est.
          </p>
          <p>
            Cette année Cassiopée aura lieu sous un format exceptionnel et gratuit, réunissant tous types d'invités pour
            un après-midi de concerts et de découvertes sur le thème d'Atlantide entre 14h30 et 19h !
          </p>
          <p>
            Trois scènes étudiantes, deux stands de restauration, un stand de champagne et deux animations originales,
            cet évènement ne pourra que vous séduire…
          </p>
        </div>
      </div>

      <div className="partners">
        <h2>Nos Partenaires</h2>

        {partners && partners.length ? (
          <>
            <div className="partners-carousel-container">
              <i className="partners-carousel-arrow-left fas fa-chevron-left" onClick={carouselPrev} />
              <i className="partners-carousel-arrow-right fas fa-chevron-right" onClick={carouselNext} />

              <OwlCarousel
                responsive={{
                  0: { items: 2 },
                  400: { items: 3 },
                  550: { items: 4 },
                  800: { items: 5 },
                  1000: { items: 6 },
                }}
                loop
                smartSpeed={500}
                onLoad={setCarouselInterval}
                onDrag={clearCarouselInterval}
                onDragged={setCarouselInterval}
                className="partners-carousel"
                ref={carouselRef}>
                {partners}
              </OwlCarousel>
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
          <div className="no-partners">(Les partenaires seront bientôt disponibles)</div>
        )}
      </div>
    </div>
  );
};

export default Home;
