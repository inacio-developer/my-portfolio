import * as S from './styles';

type ContainerProps = {
  children: JSX.Element | JSX.Element[];
};

const Container = ({ children }: ContainerProps) => (
  <S.Container className="animateContent">{children}</S.Container>
);

export { Container };
