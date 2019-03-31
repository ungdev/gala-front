import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

import buttons from '../../variables/header';

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			mobileMenuActive: false,
			top: true
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.scrollHandle);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.scrollHandle);
	}

	scrollHandle = () => {
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

		this.setState({
			top: scrollTop === 0
		});
	}

	toggleMobileMenu = () => {
		// Prevent from scrolling when mobile menu is active
		document.getElementsByTagName('html')[0].style.overflow = this.state.mobileMenuActive ? '' : 'hidden';

		this.setState({
			mobileMenuActive: !this.state.mobileMenuActive
		});
	}

	closeMobileMenu = () => {
		document.getElementsByTagName('html')[0].style.overflow = '';

		this.setState({
			mobileMenuActive: false
		});
	}

  render() {
		const navigationLinks = buttons.map((button, i) => {
			const active = button.path === document.location.pathname;

			return (
				<Link to={button.path} key={i} className={active ? 'active' : ''} onClick={this.closeMobileMenu}>
					<li>{button.title}</li>
				</Link>
			);
		});

    return (
			<header>
				<div className={'header-content' + ((this.state.top && window.location.pathname === '/') ? ' transparent' : '')}>
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
			</header>
		);
  }
};

export default Header;