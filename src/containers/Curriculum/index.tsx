import * as S from './styles';

type CurriculumProps = {
  topic: string;
  content: JSX.Element;
  left: number;
  margin?: string;
  className?: string;
};
const Curriculum = ({
  topic,
  content,
  left,
  margin,
  className,
}: CurriculumProps) => (
  <S.Structure margin={margin}>
    <S.Topic left={left} className={className}>
      {topic}
    </S.Topic>
    {content}
  </S.Structure>
);

export { Curriculum };
