import React from 'react';
import { useLocation } from 'react-router-dom';
import { init, sendPageView } from './analytics';

export const useGoogleAnalytics = () => {
  const location = useLocation();

  React.useEffect(() => {
    init();
  }, []);

  React.useEffect(() => {
    const currentPath = location.pathname + location.search;

    sendPageView(currentPath);
  }, [location]);
};
