import React from 'react';
import { Link } from 'react-router-dom';
import Countdown from 'react-countdown-now';
import $ from 'jquery';

import axios from '../../utils/axios';
import VideoContainer from '../../components/videoContainer';
import posterImg from '../../assets/Logo_day_edition.png';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import './home.css';

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
        <img src={`${import.meta.env.VITE_APP_API}${partner.image}`} alt={partner.name} />
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
              <i class="fas fa-chevron-down"></i>
            </div>
          </button>
        </div>

        <div className="page-container">
          <div className="poster-text">
            <h1>À propos de Cassiopée</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
              mollit anim id est laborum.
            </p>
            <p>
              Cras tincidunt lobortis feugiat vivamus at augue. Elit at imperdiet dui accumsan sit amet nulla facilisi.
              Malesuada proin libero nunc consequat. Sit amet aliquam id diam maecenas ultricies mi eget mauris.
              Pellentesque habitant morbi tristique senectus et netus et malesuada fames. Vitae tortor condimentum
              lacinia quis vel eros donec ac odio. In fermentum posuere urna nec tincidunt praesent semper. Et egestas
              quis ipsum suspendisse ultrices gravida. Viverra suspendisse potenti nullam ac tortor vitae. Aenean
              euismod elementum nisi quis eleifend. Quis eleifend quam adipiscing vitae. Amet luctus venenatis lectus
              magna fringilla urna. Vel fringilla est ullamcorper eget nulla facilisi. Cursus eget nunc scelerisque
              viverra mauris in aliquam sem. Pharetra vel turpis nunc eget lorem dolor sed viverra. Sit amet cursus sit
              amet dictum sit amet justo. Hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit
              ullamcorper. Scelerisque eleifend donec pretium vulputate. Morbi blandit cursus risus at ultrices. Sapien
              faucibus et molestie ac feugiat sed lectus vestibulum. Sed libero enim sed faucibus turpis. Integer vitae
              justo eget magna fermentum. Enim diam vulputate ut pharetra sit amet. Leo vel fringilla est ullamcorper
              eget nulla. Massa tempor nec feugiat nisl pretium fusce. Mauris ultrices eros in cursus turpis.
              Suspendisse potenti nullam ac tortor vitae. Molestie a iaculis at erat pellentesque adipiscing commodo
              elit at. Lorem ipsum dolor sit amet consectetur. Risus at ultrices mi tempus imperdiet nulla malesuada
              pellentesque elit. Felis donec et odio pellentesque diam. Viverra ipsum nunc aliquet bibendum. Nullam ac
              tortor vitae purus faucibus ornare. Sed ullamcorper morbi tincidunt ornare. A arcu cursus vitae congue.
              Aenean sed adipiscing diam donec adipiscing tristique risus nec. Tellus at urna condimentum mattis. Augue
              eget arcu dictum varius duis at consectetur. Volutpat sed cras ornare arcu dui. Donec ac odio tempor orci
              dapibus ultrices in iaculis. Risus sed vulputate odio ut. Tortor aliquam nulla facilisi cras fermentum.
              Consequat nisl vel pretium lectus. Interdum consectetur libero id faucibus nisl tincidunt eget. Laoreet
              sit amet cursus sit amet. Vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Turpis
              in eu mi bibendum. In ornare quam viverra orci sagittis. Euismod nisi porta lorem mollis.
            </p>
          </div>

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

          <br />
        </div>

        <div className="partners">
          <div className="partners-background"></div>

          <h2>Nos Partenaires</h2>

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
