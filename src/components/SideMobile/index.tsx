import { SvgComponent as MenuIcon } from '../../assets/images/icons/mobile-menu';
import * as S from './styles';

type SideMobileProps = {
  title: string;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideMobile = ({ title, setState }: SideMobileProps) => {
  const handleMenu = () => {
    setState(true);
    document.body.style.overflowY = 'hidden';
  };

  return (
    <>
      <S.Div>
        <S.Title>{title}</S.Title>
        <S.Button onClick={handleMenu}>
          <MenuIcon />
        </S.Button>
      </S.Div>
    </>
  );
};

export { SideMobile };
