import { useNavigate } from 'react-router-dom';
const useNavigating = () => {
  const navigate = useNavigate();
  const scrollToTopAndNavigate = (click: React.MouseEvent, path: string) => {
    click.preventDefault();
    window.scrollTo(0, 0);
    navigate(path);
  };
  const keydownNav = (path: string) => {
    window.scrollTo(0, 0);
    navigate(`/${path}`);
  };
  return { scrollToTopAndNavigate, keydownNav };
};
export { useNavigating };
