import ReactGA from 'react-ga';

const MEASUREMENT_ID = 'G-KDWWLDLPBY';

export const init = () => {
  // Enables debuging mode on local environment
  const isDevelopmentEnv =
    !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

  ReactGA.initialize(MEASUREMENT_ID, { debug: isDevelopmentEnv });
};

/** For creating custom events */
export const sendEvent = (payload) => {
  ReactGA.event(payload);
};

export const sendPageView = (path) => {
  ReactGA.set({ page: path });
  ReactGA.pageview(path);
};
