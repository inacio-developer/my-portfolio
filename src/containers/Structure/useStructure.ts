import { useEffect } from 'react';
import { useNavigating } from '../../hooks/useNavigating';
import { MenuRoutes } from '../../data/Menu';

const useStructure = () => {
  const { keydownNav } = useNavigating();
  const navKeydown = (key: KeyboardEvent) => {
    const condition =
      key.key === '1' ||
      key.key === '2' ||
      key.key === '3' ||
      key.key === '4' ||
      key.key === '5';
    if (condition) {
      const href = document
        .querySelectorAll('.itemMenu')
        [parseInt(key.key) - 1].getAttribute('href')
        ?.replaceAll('/my-portfolio', '');

      console.log(href);

      if (href !== window.location.pathname) {
        keydownNav(href as string);
      }
    }
  };
  const effect = useEffect(() => {
    window.addEventListener('keydown', navKeydown);
    return () => {
      window.removeEventListener('keydown', navKeydown);
    };
  }, []);
  return { effect };
};

export { useStructure };
