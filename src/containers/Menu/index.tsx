import { MenuRoutes } from '../../data/Menu';
import { List } from '../../components/List';
import { Nav } from './styles';
const Menu = (): JSX.Element => {
  return (
    <Nav>
      <List
        list={MenuRoutes()}
        direction="column"
        gap={'2'}
        transform="Right"
      />
    </Nav>
  );
};
export { Menu };
