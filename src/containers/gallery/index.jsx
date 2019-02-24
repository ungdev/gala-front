import React from 'react';
import $ from 'jquery';

import 'owl.carousel2/dist/assets/owl.carousel.css';
import './gallery.css';

window.jQuery = $;
require('owl.carousel2');

class Gallery extends React.Component {
	constructor(props) {
		super(props);

		this.images = [];
		this.carouselImages = [];

		const context = require.context('../../assets/gallery', false, /\.(jpe?g)$/i);
		const imagesUrl = context.keys().map(context);

		imagesUrl.forEach((image, i) => {
			this.images.push(
				<div className="image-container" key={i}>
					<img src={image} alt="" onClick={() => this.openViewer(i)} />
				</div>
			);

			this.carouselImages.push(
				<img src={image} alt="" key={i} onClick={this.cancelOutsideClick} />
			);
		});

		this.state = {
			viewerActive: false,
			arrowLeftActive: true,
			arrowRightActive: true
		};

		this.outsideClickEnabled = true;
	}

	componentDidMount() {
		this.carousel = $('.owl-carousel');

		this.carousel.owlCarousel({
			items: 1,
			margin: 20,
			smartSpeed: 400
		});

		window.addEventListener('keydown', this.keydownHandle);

		this.carousel.on('translate.owl.carousel', (e) => this.updateArrows(e.item.index));
	}

	componentWillUnmount() {
		window.removeEventListener('keydown', this.keydownHandle);
	}

	keydownHandle = (e) => {
		if(this.state.viewerActive) {
			if(e.keyCode === 27) { // Escape key
				this.closeViewer();
			}
			else if(e.keyCode === 37) { // Left arrow
				this.previousImage();
			}
			else if(e.keyCode === 39) { // Right arrow
				this.nextImage();
			}
		}
	}

	openViewer = (i) => {
		this.carousel.trigger('to.owl.carousel', [i, 0]);

		this.setState({
			viewerActive: true
		});

		document.getElementsByTagName('html')[0].style.overflow = 'hidden';

		this.updateArrows(i);
	}

	closeViewer = () => {
		this.setState({
			viewerActive: false
		});

		document.getElementsByTagName('html')[0].style.overflow = '';
	}

	arrowLeftClick = () => {
		this.previousImage();
		this.cancelOutsideClick();
	}

	arrowRightClick = () => {
		this.nextImage();
		this.cancelOutsideClick();
	}

	previousImage = () => {
		this.carousel.trigger('prev.owl.carousel', [250]);
	}

	nextImage = () => {
		this.carousel.trigger('next.owl.carousel', [250]);
	}

	updateArrows = (i) => {
		if(i === 0) {
			this.setState({
				arrowLeftActive: false
			});
		}
		else {
			this.setState({
				arrowLeftActive: true
			});
		}

		if(i === this.carouselImages.length - 1) {
			this.setState({
				arrowRightActive: false
			});
		}
		else {
			this.setState({
				arrowRightActive: true
			});
		}
	}

	cancelOutsideClick = () => {
		this.outsideClickEnabled = false;
	}

	checkOutsideClick = () => {
		if(this.outsideClickEnabled) {
			this.closeViewer();
		}
		else {
			this.outsideClickEnabled = true;
		}
	}

	render() {
    return (
			<div id="gallery">
				<h1 className="centered">Galerie</h1>
				<hr />

				<div className="images-container">
					{ this.images }
				</div>

				<div className={'viewer-container' + (this.state.viewerActive ? ' active' : '')} onClick={this.checkOutsideClick}>
					<div
						className={'viewer-carousel-arrow-left' + (this.state.arrowLeftActive ? '' : ' disabled')}
						title="Photo précédente"
						onClick={this.arrowLeftClick}
					></div>
					<div
						className={'viewer-carousel-arrow-right' + (this.state.arrowRightActive ? '' : ' disabled')}
						title="Photo suivante"
						onClick={this.arrowRightClick}
					></div>

					<div className="viewer-carousel owl-carousel">
						{ this.carouselImages }
					</div>

					<div
						className="viewer-close"
						title="Fermer"
						onClick={this.closeViewer}
					></div>
				</div>
			</div>
		);
  }
};

export default Gallery;