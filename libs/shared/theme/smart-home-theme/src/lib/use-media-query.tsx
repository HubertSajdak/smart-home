import { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';

const useWebMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    if (!query) return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener('change', listener);
    return () => media.removeEventListener('change', listener);
  }, [matches, query]);

  return matches;
};

export const useMediaQuery = (screenSize: 'mobileSize' | 'tabletSize' | 'desktopSize') => {
  const theme = useTheme();
  const calculateMaxTabletSize = () => {
    const correctValue = theme.screen.isDesktop.split('px');
    const calculated = +correctValue[0] - 1;
    return `${calculated}px`;
  };
  const mobileSize = `(max-width: ${theme.screen.isTablet})`;
  const tabletSize = `(min-width: ${theme.screen.isTablet}) and (max-width: ${calculateMaxTabletSize()})`;
  const desktopSize = `(min-width: ${theme.screen.isDesktop})`;
  let query = '';
  if (screenSize === 'mobileSize') {
    query = mobileSize;
  }
  if (screenSize === 'tabletSize') {
    query = tabletSize;
  }
  if (screenSize === 'desktopSize') {
    query = desktopSize;
  }

  return useWebMediaQuery(query);
};
