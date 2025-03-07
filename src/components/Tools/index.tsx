import { Skill } from '../../data/Skills';
import { Tag } from '../Tag';
import * as S from './styles';

type ToolsProps = {
  category: 'development' | 'IDE' | 'softwares';
};

const Tools = ({ category }: ToolsProps): JSX.Element => {
  return (
    <S.Stacks>
      {Skill[category].map(tool => (
        <S.Card>
          <S.Div>
            <S.Img src={tool.img} alt={tool.name} />
          </S.Div>
          <div>
            <Tag tag={tool.category} />
            <S.Title>{tool.name}</S.Title>
          </div>
        </S.Card>
      ))}
    </S.Stacks>
  );
};

export { Tools };
