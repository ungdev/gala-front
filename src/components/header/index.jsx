import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const routes = [
	{
		title: 'Accueil',
		path: '/'
	},
	{
		title: 'Galerie',
		path: '/galerie'
	},
	{
		title: 'Partenaires',
		path: '/partenaires'
	},
	{
		title: 'Conditions d\'entrée',
		path: '/conditions-entree'
	},
	{
		title: 'Accès',
		path: '/acces'
	},
	{
		title: 'Contact',
		path: '/contact'
	}
];

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mobileMenuActive: false
		};
	}

	toggleMobileMenu = () => {
		// Prevent from scrolling the body when menu is active
		document.getElementsByTagName('body')[0].style.overflow = this.state.mobileMenuActive ? '' : 'hidden';

		this.setState({
			mobileMenuActive: !this.state.mobileMenuActive
		});
	}

	closeMobileMenu = () => {
		document.getElementsByTagName('body')[0].style.overflow = '';

		this.setState({
			mobileMenuActive: false
		});
	}

  render() {
		const navigationLinks = routes.map((route, i) => {
			const active = route.path === document.location.pathname;

			return (
				<Link to={route.path} key={i} className={active ? 'active' : ''} onClick={this.closeMobileMenu}>
					<li>{route.title}</li>
				</Link>
			);
		});

    return (
			<div id="header">
				<div className="header-content">
					<nav className={this.state.mobileMenuActive ? 'active' : ''}>
						<div className="mobile-hamburger-menu" onClick={this.toggleMobileMenu}>
							<div>
								<span></span>
								<span></span>
								<span></span>
							</div>
						</div>

						<ul>
							{ navigationLinks }
						</ul>
					</nav>
				</div>
			</div>
		);
  }
};

export default Header;