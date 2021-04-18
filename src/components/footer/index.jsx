import React from 'react';
import { Link } from 'react-router-dom';

import googlePlayImg from '../../assets/google-play.png';
import appStoreImg from '../../assets/app-store.png';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="store-links">
          <a href="https://play.google.com/store/apps/details?id=fr.uttnetgroup.gala">
            <img src={googlePlayImg} alt="Google Play" className="store-image" />
          </a>

          <a href="https://itunes.apple.com/fr/app/gala-utt/id1365179575?mt=8">
            <img src={appStoreImg} alt="App store" className="store-image" />
          </a>
        </div>

        <div className="social-links">
          <a className="social-facebook" href="https://www.facebook.com/gala.utt">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="social-youtube" href="https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g">
            <i className="fab fa-youtube"></i>
          </a>
          <Link className="social-contact" to="/contact">
            <i className="far fa-envelope"></i>
            <i className="far fa-envelope-open open"></i>
          </Link>
        </div>

        <small>
          <div className="copyright">
            <i className="far fa-copyright"></i>Tous droits réservés - Gala UTT 2021
          </div>

          <div className="links">
            <Link to="/mentions-legales">Mentions légales</Link> - <Link to="/confidentialite">Confidentialité</Link>
          </div>
        </small>
      </footer>
    );
  }
}

export default Footer;
