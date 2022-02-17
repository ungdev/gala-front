import React, { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    document.getElementsByTagName('body')[0].scrollTop = 0;
  }, [location]);

  return <>{children || null}</>;
};

export default ScrollToTop;
