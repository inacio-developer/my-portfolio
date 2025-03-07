import * as S from './styles';

type GridProps = {
  children: JSX.Element | JSX.Element[] | null;
};
const Grid = ({ children }: GridProps) => (
  <S.Structure className="animateContent">{children}</S.Structure>
);
export { Grid };
