import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown';
import $ from 'jquery';

import axios from '../../utils/axios';
import posterImg from '../../assets/Logo_day_edition.png';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import './home.css';

window.jQuery = $;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.carousel = null;
    this.carouselInterval = null;

    this.state = {
      partners: null,
      top: true,
    };

    this.fetchPartners();
  }

  componentWillUnmount() {
    this.clearCarouselInterval();

    window.removeEventListener('scroll', this.scrollHandle, { passive: true });
    window.removeEventListener('touchmove', this.scrollHandle, {
      passive: true,
    });
  }

  scrollHandle = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.setState({
      top: scrollTop === 0,
    });
  };

  clearCarouselInterval = () => {
    if (this.carouselInterval) {
      window.clearInterval(this.carouselInterval);
    }
  };

  setCarouselInterval = () => {
    this.carouselInterval = window.setInterval(() => {
      if (this.carousel) {
        this.carousel.trigger('next.owl.carousel', [1200]);
      }
    }, 2000);
  };

  carouselPrev = () => {
    this.carousel.trigger('prev.owl.carousel', [300]);

    // Reset carousel interval
    this.clearCarouselInterval();
    this.setCarouselInterval();
  };

  carouselNext = () => {
    this.carousel.trigger('next.owl.carousel', [300]);

    // Reset carousel interval
    this.clearCarouselInterval();
    this.setCarouselInterval();
  };

  handleArrow = () => {
    if (!this.state.top) {
      return;
    }

    $('html, body').animate({ scrollTop: window.innerHeight - 80 }, 500);
  };

  fetchPartners = async () => {
    let partners = await axios.get('partners');

    partners = partners.data.map((partner, i) => (
      <a href={partner.url} key={i}>
        <img src={`${import.meta.env.VITE_API_URL}${partner.image}`} alt={partner.name} />
      </a>
    ));

    this.setState({
      partners,
    });

    this.createCarousel();
  };

  createCarousel() {
    this.carousel = $('.owl-carousel');

    this.carousel.owlCarousel({
      responsive: {
        0: { items: 2 },
        400: { items: 3 },
        550: { items: 4 },
        800: { items: 5 },
        1000: { items: 6 },
      },
      loop: true,
      smartSpeed: 500,
      onDrag: this.clearCarouselInterval,
      onDragged: this.setCarouselInterval,
    });

    this.setCarouselInterval();

    window.addEventListener('scroll', this.scrollHandle, { passive: true });
    window.addEventListener('touchmove', this.scrollHandle, { passive: true });
  }

  render() {
    return (
      <div id="home">
        <div className="poster-container">
          <img src={posterImg} alt="" className="poster" />

          <button className={`arrow-button${this.state.top ? ' active' : ''}`} onClick={this.handleArrow}>
            <div className="arrow-icon">
              <i className="fas fa-chevron-down" />
            </div>
          </button>
        </div>

        <div className="page-container">
          <Countdown
            date="05 June 2021 20:00:00"
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
            <p>
            Cassiopée Day Edition est un événement géré par l'association Gala UTT de l'Université de Technologie de Troyes qui organise tous les ans une soirée incontournable dans le Grand Est.
            </p>
            <p>
            Cette année Cassiopée aura lieu sous un format exceptionnel et gratuit, réunissant tous types d'invités pour un après-midi de concerts et de découvertes sur le thème d'Atlantide entre 14h30 et 19h !
            </p>
            <p>
            Trois scènes étudiantes, deux stands de restauration, un stand de champagne et deux animations originales, cet évènement ne pourra que vous séduire…
            </p>

          </div>
        </div>

        <div className="partners">
          <h2>Nos Partenaires</h2>

          {this.state.partners && this.state.partners.length ? (
            <>
              <div className="partners-carousel-container">
                <i className="partners-carousel-arrow-left fas fa-chevron-left" onClick={this.carouselPrev} />
                <i className="partners-carousel-arrow-right fas fa-chevron-right" onClick={this.carouselNext} />

                <div className="owl-carousel partners-carousel">{this.state.partners}</div>
              </div>

              <div className="centered">
                <Link to="/partenaires" className="button">
                  Tous les partenaires
                </Link>
              </div>
            </>
          ) : this.state.partners === null ? (
            <div className="partners-loader">
              <i className="fas fa-spinner fa-spin" />
            </div>
          ) : (
            <div className="no-partners">(Les partenaires seront bientôt disponibles)</div>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
