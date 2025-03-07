import { Icon } from '../types/icons';
import { Feed } from '../types/medium';
import { Projects as TypeProjects } from '../types/projects';
import { Projects } from './Projects';
import { useAPIMedium } from '../hooks/useAPIMedium';
import { SvgComponent as HomeSVG } from '../assets/images/icons/menu-home';
import { SvgComponent as ProjectsSVG } from '../assets/images/icons/menu-code';
import { SvgComponent as ArticlesSVG } from '../assets/images/icons/menu-text';
import { SvgComponent as StackSVG } from '../assets/images/icons/menu-stack';
import { SvgComponent as AboutSVG } from '../assets/images/icons/menu-about';
import { useLocation } from 'react-router-dom';
const MenuRoutes = (): Icon[] => {
  const location = useLocation();
  const { data } = useAPIMedium();
  const routeDynamic = (route: string): string => {
    const routeData = route === 'artigos' ? data : Projects;
    const pathURL = window.location.pathname;
    const regex = new RegExp(`/${route}/(\\d+)/(.*)`);
    const match = pathURL.match(regex);
    const index = match ? parseInt(match[1]) - 1 : 0;
    return encodeURI(
      `/${route}/${((routeData as Feed[]) || (routeData as TypeProjects[]))[index].id}/${((routeData as Feed[]) || (routeData as TypeProjects[]))[index].title}`,
    );
  };
  const menu: Icon[] = [
    {
      title: 'Inicio',
      keyboard: '1',
      path: HomeSVG(),
      route: '/',
    },
    {
      title: 'Projetos',
      keyboard: '2',
      path: ProjectsSVG(),
      route: routeDynamic('projetos'),
    },
    {
      title: 'Artigos',
      keyboard: '3',
      path: ArticlesSVG(),
      route: routeDynamic('artigos'),
    },
    {
      title: 'Stacks',
      keyboard: '4',
      path: StackSVG(),
      route: '/stacks',
    },
    {
      title: 'Sobre',
      keyboard: '5',
      path: AboutSVG(),
      route: '/sobre',
    },
  ];
  return menu;
};
export { MenuRoutes };
