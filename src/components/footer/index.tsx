import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

import cassiopee_icon from '../../assets/ic-cassiopee.png';

export default () => (
  <footer>
    <img className="logo" src={cassiopee_icon}></img>

    <div className="links">
      <Link to="/about" className="animate">
        A propos
      </Link>
      <br />
      <Link to="/artists" className="animate">
        Les artistes
      </Link>
      <br />
      <Link to="/covid-19" className="animate">
        Covid-19
      </Link>
      <br />
      <Link to="/shop" className="animate">
        Billeterie
      </Link>
    </div>

    <div className="external-and-legal">
      <div className="social-links">
        <a className="social-facebook" href="https://www.facebook.com/gala.utt">
          <i className="fab fa-facebook-f" />
        </a>
        <a className="social-youtube" href="https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g">
          <i className="fab fa-youtube" />
        </a>
        <a className="social-instagram" href="https://www.instagram.com/cassiopee_galautt/">
          <i className="fab fa-instagram" />
        </a>
      </div>

      <small className="legal">
        <div className="copyright">
          <i className="far fa-copyright" />
          Tous droits réservés - Gala UTT 2022
        </div>

        <div className="legal-links">
          <Link to="/mentions-legales" className="animate">
            Mentions légales
          </Link>{' '}
          -{' '}
          <Link to="/confidentialite" className="animate">
            Confidentialité
          </Link>
        </div>
      </small>
    </div>
  </footer>
);
