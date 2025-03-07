import { Icon } from '../types/icons';
import { SvgComponent as LinkedinSVG } from '../assets/images/icons/header-linkedin';
import { SvgComponent as MediumSVG } from '../assets/images/icons/header-medium';
import { SvgComponent as GitSVG } from '../assets/images/icons/header-git';
const SocialNetworks: Icon[] = [
  {
    title: 'Linkedin',
    path: LinkedinSVG(),
    href: 'https://www.linkedin.com/in/inacio-developer/',
  },
  {
    title: 'GitHub',
    path: GitSVG(),
    href: 'https://github.com/inacio-developer',
  },
  {
    title: 'Medium',
    path: MediumSVG(),
    href: 'https://medium.com/@rafaelinacio.articles',
  },
];
export { SocialNetworks };
