import { useLocation } from 'react-router-dom';
import * as S from './styles';
import { TextArticle } from '../TextArticle';
import { TextProject } from '../TextProject';

type TextProps = {
  id: number;
  type: 'artigos' | 'projetos';
};

const Text = ({ id, type }: TextProps): JSX.Element => {
  const location = useLocation();

  return (
    <S.Div key={location.pathname} className="text_content">
      {type === 'artigos' ? <TextArticle id={id} /> : <TextProject id={id} />}
    </S.Div>
  );
};

export { Text };
