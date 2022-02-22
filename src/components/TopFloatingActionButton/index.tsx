import React, { useEffect, useState } from 'react';

import './topFloatingActionButton.scss';

function TopFloatingActionButton() {
  const [isTop, setTop] = useState(true);

  useEffect(() => {
    document.body.addEventListener('scroll', scrollHandle, { passive: true });
    document.body.addEventListener('touchmove', scrollHandle, { passive: true });
    return () => {
      document.body.removeEventListener('scroll', scrollHandle);
      document.body.removeEventListener('touchmove', scrollHandle);
    };
  }, []);

  const scrollHandle = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    setTop(scrollTop === 0);
  };

  const scrollToTop = () => {
    if (isTop) return;

    document.body.scrollTo({
      behavior: 'smooth',
      top: 0,
    });
  };

  return (
    <div className={`floating-action-button${isTop ? ' faded' : ''}`} onClick={scrollToTop}>
      <div className="arrow" />
    </div>
  );
}

export default TopFloatingActionButton;
