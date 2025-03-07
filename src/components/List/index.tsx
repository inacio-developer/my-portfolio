import { Icon } from '../../types/icons';
import { NavLink } from 'react-router-dom';
import { Tooltip } from '../Tooltip';
import * as S from './styles';
import { useList } from './useList';

type ListProps = {
  list: Icon[];
  direction: string;
  gap: string;
  transform: 'Bottom' | 'Right';
};

const anchorOrLink = (
  icon: Icon,
  event: React.MouseEventHandler,
): JSX.Element => {
  return icon.route ? (
    <NavLink
      to={icon.route}
      onClick={event}
      className={({ isActive }) =>
        isActive ? 'navbar-item is-active itemMenu' : 'navbar-item itemMenu'
      }
    >
      {icon.path}
      <Tooltip content={icon.title} keyboard={icon.keyboard} />
    </NavLink>
  ) : (
    <a
      href={icon.href}
      target="_blank"
      className="link_socialNetworks"
      rel="noreferrer"
    >
      {icon.path}
      <Tooltip content={icon.title} keyboard={icon.keyboard} />
    </a>
  );
};

const List = ({ list, direction, gap, transform }: ListProps): JSX.Element => {
  const { handleTooltip, repositionHeightPage } = useList(list);

  return (
    <S.List $flexDirection={direction} $gap={gap}>
      {list.map((icon, id) => (
        <S.Item
          $transform={transform}
          onMouseEnter={() => handleTooltip(id)}
          onMouseLeave={() => handleTooltip(id)}
          key={id}
        >
          {anchorOrLink(icon, repositionHeightPage)}
        </S.Item>
      ))}
    </S.List>
  );
};
export { List };
