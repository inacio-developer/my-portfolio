import * as S from './styles';

type TitleProps = {
  title: string;
  subtitle: string;
};

const Title = ({ title, subtitle }: TitleProps) => {
  return (
    <>
      <S.Title className="title">{title}</S.Title>
      <S.Subtitle className="subtitle">{subtitle}</S.Subtitle>
    </>
  );
};

export { Title };
