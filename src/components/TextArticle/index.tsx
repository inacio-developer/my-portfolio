import { useTextArticle } from './useTextArticle';
import { Tag } from '../Tag';
import * as S from '../Text/styles';
type TextProps = {
  id: number;
};
const TextArticle = ({ id }: TextProps): JSX.Element => {
  const { isData, articleFigure, monthPerExtense, text } = useTextArticle();
  return (
    <>
      <S.Img src={articleFigure(id)} />
      <S.Date>{monthPerExtense(isData[id - 1].pubDate)}</S.Date>
      <S.Title>{isData[id - 1].title}</S.Title>
      <S.DivTag>
        {isData[id - 1].categories.map((category, i) => (
          <Tag key={i} tag={category} />
        ))}
      </S.DivTag>
      <S.DivText>{text()}</S.DivText>
    </>
  );
};
export { TextArticle };
