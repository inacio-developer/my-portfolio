import * as S from './styles';

type TagProps = {
  tag: string;
};

const Tag = ({ tag }: TagProps): JSX.Element => (
  <>
    <S.Tag className="tag">{tag}</S.Tag>
  </>
);

export { Tag };
