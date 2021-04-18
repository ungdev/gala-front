import React from 'react';
import $ from 'jquery';

import LazyloadImage from '../../components/lazyloadImage';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import './gallery.css';
import axios from '../../utils/axios';

window.jQuery = $;

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      carouselImages: [],
      viewerActive: false,
      arrowLeftActive: true,
      arrowRightActive: true,
    };

    this.outsideClickEnabled = true;

    this.fetchGallery();
  }

  fetchGallery = async () => {
    const uploads = await axios.get('gallery');
    const imagesUrl = uploads.data.map((name) => import.meta.env.VITE_API_URL + name);

    const images = [];
    const carouselImages = [];

    imagesUrl.forEach((image, i) => {
      images.push(
        <div className="image-container" key={i}>
          <LazyloadImage src={image} onClick={() => this.openViewer(i)} />
        </div>,
      );

      carouselImages.push(
        <img className="owl-lazy" data-src={image} onClick={this.cancelOutsideClick} key={i} alt="" />,
      );
    });

    this.setState({
      images,
      carouselImages,
    });

    this.carousel = $('.owl-carousel');

    this.carousel.owlCarousel({
      items: 1,
      margin: 20,
      smartSpeed: 400,
      lazyLoad: true,
      lazyLoadEager: 1,
    });

    window.addEventListener('keydown', this.keydownHandle, { passive: true });

    this.carousel.on('translate.owl.carousel', (e) => this.updateArrows(e.item.index));
  };

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keydownHandle, {
      passive: true,
    });
  }

  keydownHandle = (e) => {
    if (this.state.viewerActive) {
      if (e.keyCode === 27) {
        // Escape key
        this.closeViewer();
      } else if (e.keyCode === 37) {
        // Left arrow
        this.previousImage();
      } else if (e.keyCode === 39) {
        // Right arrow
        this.nextImage();
      }
    }
  };

  openViewer = (i) => {
    this.carousel.trigger('to.owl.carousel', [i, 0]);

    this.setState({
      viewerActive: true,
    });

    document.getElementsByTagName('html')[0].style.overflow = 'hidden';

    this.updateArrows(i);
  };

  closeViewer = () => {
    this.setState({
      viewerActive: false,
    });

    document.getElementsByTagName('html')[0].style.overflow = '';
  };

  arrowLeftClick = () => {
    this.previousImage();
    this.cancelOutsideClick();
  };

  arrowRightClick = () => {
    this.nextImage();
    this.cancelOutsideClick();
  };

  previousImage = () => {
    this.carousel.trigger('prev.owl.carousel', [250]);
  };

  nextImage = () => {
    this.carousel.trigger('next.owl.carousel', [250]);
  };

  updateArrows = (i) => {
    if (i === 0) {
      this.setState({
        arrowLeftActive: false,
      });
    } else {
      this.setState({
        arrowLeftActive: true,
      });
    }

    if (i === this.state.carouselImages.length - 1) {
      this.setState({
        arrowRightActive: false,
      });
    } else {
      this.setState({
        arrowRightActive: true,
      });
    }
  };

  cancelOutsideClick = () => {
    this.outsideClickEnabled = false;
  };

  checkOutsideClick = () => {
    if (this.outsideClickEnabled) {
      this.closeViewer();
    } else {
      this.outsideClickEnabled = true;
    }
  };

  render() {
    return (
      <div className="page-container" id="gallery">
        <h1 className="centered">Infos COVID</h1>
        <hr />

        {this.state.images.length > 0 ? (
          <>
            <div className="images-container">{this.state.images}</div>

            <div
              className={'viewer-container' + (this.state.viewerActive ? ' active' : '')}
              onClick={this.checkOutsideClick}>
              <div
                className={'viewer-carousel-arrow-left' + (this.state.arrowLeftActive ? '' : ' disabled')}
                title="Photo précédente"
                onClick={this.arrowLeftClick}></div>
              <div
                className={'viewer-carousel-arrow-right' + (this.state.arrowRightActive ? '' : ' disabled')}
                title="Photo suivante"
                onClick={this.arrowRightClick}></div>

              <div className="viewer-carousel owl-carousel">{this.state.carouselImages}</div>

              <div className="viewer-close" title="Fermer" onClick={this.closeViewer}></div>
            </div>
          </>
        ) : (
          /*<div className="artists-loader">
            <i className="fas fa-spinner fa-spin"></i>
          </div>*/
          <div id="no-image" className="centered">
            (Les images ne sont pas disponibles)
          </div>
        )}
      </div>
    );
  }
}

export default Gallery;
