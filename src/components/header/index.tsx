import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import cassiopee from '../../assets/ic-cassiopee.png';
import './header.scss';

const links = [
  {
    title: 'A propos',
    path: '/about',
  },
  {
    title: 'Les artistes',
    path: '/artists',
  },
  {
    path: '/',
    id: 'home',
    imageSrc: cassiopee,
  },
  {
    title: 'Covid-19',
    path: '/covid19',
  },
  {
    title: 'Billetterie',
    path: '/billetterie',
  },
];

const Header = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);
  const [isAtTop, setAtTop] = useState(true);

  const scrollHandle = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    setAtTop(scrollTop === 0);
  };

  const toggleMobileMenu = () => {
    // Prevent from scrolling when mobile menu is active
    document.getElementsByTagName('html')[0].style.overflow = isMobileMenuActive ? '' : 'hidden';
    document.getElementsByTagName('body')[0].style.overflow = isMobileMenuActive ? '' : 'hidden';
    setMobileMenuActive(!isMobileMenuActive);
  };

  const closeMobileMenu = () => {
    document.getElementsByTagName('html')[0].style.overflow = '';
    document.getElementsByTagName('body')[0].style.overflow = '';
    setMobileMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandle, { passive: true });
    return () => window.removeEventListener('scroll', scrollHandle);
  }, []);

  const navigationLinks = links.map((link, i) => {
    const active = link.path === document.location.pathname;

    return (
      <Link
        to={link.path}
        key={i}
        className={active ? 'active' : ''}
        onClick={closeMobileMenu}
        id={link.id && `nav-${link.id}-link`}>
        {/* .normalize("NFD").replace(/[\u0300-\u036f]/g is used to remove accents */}
        <div className="container">{link.imageSrc ? <img src={link.imageSrc} /> : link.title}</div>
      </Link>
    );
  });

  const transparent = isAtTop && window.location.pathname === '/' && !isMobileMenuActive;

  return (
    <header>
      <div className={`header-content${transparent ? ' transparent' : ''}`}>
        <nav className={isMobileMenuActive ? 'active' : ''}>
          <div className="mobile-hamburger-menu" onClick={toggleMobileMenu}>
            {/* Cross symbol */}
            <div>
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="links">{navigationLinks}</div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
