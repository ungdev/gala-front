import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import $ from 'jquery';

import axios from '../../utils/axios';
import VideoContainer from '../../components/videoContainer';
import posterImg from '../../assets/new-poster.png';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import './home.css';

window.jQuery = $;
require('owl.carousel2');

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
        <img src={`${process.env.REACT_APP_API}${partner.image}`} alt={partner.name} />
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

          <button className={'arrow-button' + (this.state.top ? ' active' : '')} onClick={this.handleArrow}>
            <div className="arrow-icon">
              <i className="fas fa-arrow-down icon"></i>
            </div>
          </button>
        </div>

        <div className="page-container">

          <div className="poster-text">
            <h1>IMPORTANT</h1>
            La France traversant une situation exceptionnelle liée à la pandémie du #Covid19, et suite aux récentes annonces présidentielles et gouvernementales, c'est avec un grand regret que nous vous annonçons que l'événement Cassiopée 2020 n'aura pas lieu.<br/>
            Nous tiendrons informés prochainement les personnes ayant pris leur place des modalités de remboursement.<br/>
            <br/>
            Nous remercions chaleureusement tous ceux ayant contribué au projet, qu'ils soient membres de l'organiation, partenaires, artistes ou encore prestataires.
            <br/>
            Le projet Cassiopée prend un coup mais ne s'arrête pas, l'engouement derrière Cassiopée 2020 montre l'intérêt que le public porte pour les événements culturels étudiants dans la région Grand-Est, à Troyes. Celui-ci permettra, nous l'espérons, à Cassiopée 2021 de rencontrer le succès qu'il mérite.<br/>
            <br/>
            Nous vous tiendrons au courant de la suite des événements prochainement !<br/>
            <br/>
            L'équipe Cassiopée 2020<br/>
          </div>

          <Countdown
            date="16 May 2019 20:00:00"
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

          <br />

          <p className="centered">
            Cassiopée, organisé par l'association Gala UTT, est une soirée de prestige unique en son genre accueillant
            jusqu'à 3500 participants. Nous revenons le <b>16 mai 2020</b> pour une 24<sup>ème</sup> édition de folie autour des Mille
            et Une Nuits. Les locaux de l’UTT seront de nouveau transformés afin de vous faire vivre une nuit magique.
          </p>

          <hr />

          <h2 className="centered">Annonce artistes Cassiopée 2020</h2>
          <VideoContainer title="Annonce des artistes Cassiopée 2020" src="https://www.youtube.com/embed/OqdO92_fBJM" />

          <div className="centered">
            <Link to="/program" className="button">
              Tous les artistes
            </Link>
          </div>


        </div>

        <div className="partners">
          <div className="partners-background"></div>

          <h2>Partenaires</h2>

          {this.state.partners && this.state.partners.length ? (
            <React.Fragment>
              <div className="partners-carousel-container">
                <i className="partners-carousel-arrow-left fas fa-chevron-left" onClick={this.carouselPrev}></i>
                <i className="partners-carousel-arrow-right fas fa-chevron-right" onClick={this.carouselNext}></i>

                <div className="owl-carousel partners-carousel">{this.state.partners}</div>
              </div>

              <div className="centered">
                <Link to="/partenaires" className="button">
                  Tous les partenaires
                </Link>
              </div>
            </React.Fragment>
          ) : this.state.partners === null ? (
            <div className="partners-loader">
              <i className="fas fa-spinner fa-spin"></i>
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
