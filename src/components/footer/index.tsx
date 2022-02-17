import React from 'react';
import { Link } from 'react-router-dom';

import './footer.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="store-links"></div>

        <div className="social-links">
          <a className="social-facebook" href="https://www.facebook.com/gala.utt">
            <i className="fab fa-facebook-f" />
          </a>
          <a className="social-youtube" href="https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g">
            <i className="fab fa-youtube" />
          </a>
          <Link className="social-contact" to="/contact">
            <i className="far fa-envelope" />
            <i className="far fa-envelope-open open" />
          </Link>
        </div>

        <small>
          <div className="copyright">
            <i className="far fa-copyright" />
            Tous droits réservés - Gala UTT 2021
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
