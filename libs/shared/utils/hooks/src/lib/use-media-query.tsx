import { useEffect, useState } from 'react';

export const useMediaQuery = (screenSize: 'mobileSize' | 'tabletSize' | 'desktopSize') => {
  const [matches, setMatches] = useState(false);
  const mobileSize = '(max-width: 964px)';
  const tabletSize = '(min-width: 965px) and (max-width: 1439px)';
  const desktopSize = '(min-width: 1440px)';
  let query = null;
  if (screenSize === 'mobileSize') {
    query = mobileSize;
  }
  if (screenSize === 'tabletSize') {
    query = tabletSize;
  }
  if (screenSize === 'desktopSize') {
    query = desktopSize;
  }
  useEffect(() => {
    if (!query) return;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    window.addEventListener('resize', listener);
    return () => window.removeEventListener('resize', listener);
  }, [matches, query]);

  return matches;
};
