import React from 'react';
import { Link } from 'react-router-dom';

import './footer.css';

class Footer extends React.Component {
  render() {
    return (
			<footer>
				<div className="border-top"></div>

				<div className="social-links">
					<a className="social-facebook" href="https://www.facebook.com/gala.utt">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a className="social-twitter" href="https://twitter.com/galautt">
						<i className="fab fa-twitter"></i>
					</a>
					<a className="social-youtube" href="https://www.youtube.com/channel/UCLprjLc5CJMNUjSolrTyu4g">
						<i className="fab fa-youtube"></i>
					</a>
					<Link className="social-contact" to="/contact">
						<i className="far fa-envelope"></i>
						<i className="far fa-envelope-open open"></i>
					</Link>
				</div>

				<div className="copyright">
					<i className="far fa-copyright"></i> Tous droits réservés - Gala UTT 2019
				</div>

				<div className="legal">
					<Link to="/mentions-legales">Mentions légales</Link>
				</div>
			</footer>
		);
  }
};

export default Footer;