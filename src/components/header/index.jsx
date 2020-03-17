import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const links = [
  {
    title: 'Programme',
    path: '/program',
  },
  {
    title: 'Billetterie',
    path: '/billetterie',
  },
  {
    title: 'Partenaires',
    path: '/partenaires',
  },
  {
    title: 'Cassiopée',
    path: '/',
    id: 'home',
  },
  {
    title: 'Galerie',
    path: '/galerie',
  },
  {
    title: 'Accès',
    path: '/access',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
];

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      mobileMenuActive: false,
      top: true,
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollHandle, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollHandle, { passive: true });
  }

  scrollHandle = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.setState({
      top: scrollTop === 0,
    });
  };

  toggleMobileMenu = () => {
    // Prevent from scrolling when mobile menu is active
    document.getElementsByTagName('html')[0].style.overflow = this.state.mobileMenuActive ? '' : 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = this.state.mobileMenuActive ? '' : 'hidden';

    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive,
    });
  };

  closeMobileMenu = () => {
    document.getElementsByTagName('html')[0].style.overflow = '';
    document.getElementsByTagName('body')[0].style.overflow = '';

    this.setState({
      mobileMenuActive: false,
    });
  };

  render() {
    const navigationLinks = links.map((link, i) => {
      const active = link.path === document.location.pathname;

      return (
        <Link
          to={link.path}
          key={i}
          className={active ? 'active' : ''}
          onClick={this.closeMobileMenu}
          id={link.id && `nav-${link.id}-link`}>
          {/* .normalize("NFD").replace(/[\u0300-\u036f]/g is used to remove accents */}
          <li id={link.id && `nav-${link.id}-text`}>{link.title}</li>
        </Link>
      );
    });

    const transparent = this.state.top && window.location.pathname === '/' && !this.state.mobileMenuActive;

    return (
      <header>
        <div className={'header-content' + (transparent ? ' transparent' : '')}>
          <nav className={this.state.mobileMenuActive ? 'active' : ''}>
            <div className="mobile-hamburger-menu" onClick={this.toggleMobileMenu}>
              {/* Cross symbol */}
              <div>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <ul>{navigationLinks}</ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
