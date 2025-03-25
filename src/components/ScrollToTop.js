import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component scrolls the window to the top when navigating between routes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;