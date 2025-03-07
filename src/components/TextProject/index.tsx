import { useTextProject } from './useTextProject';
import { Curriculum } from '../../containers/Curriculum';
import * as S from '../Text/styles';

type TextProps = {
  id: number;
};

const TextProject = ({ id }: TextProps): JSX.Element => {
  const { isData, monthPerExtense, projectsBodyText } = useTextProject();

  return (
    <>
      <S.Img src={isData[id - 1].img} />
      <S.TitleLink href={isData[id - 1].url} target="_blank">
        {isData[id - 1].title}
      </S.TitleLink>
      <S.TextDetailsProject>
        <Curriculum
          topic="Atribuição"
          content={<p>{isData[id - 1].role}</p>}
          left={0}
          margin="0"
          className="topicOn"
        />
        <Curriculum
          topic="Colaboradores"
          content={<p>{isData[id - 1].coWork}</p>}
          left={0}
          margin="0"
          className="topicOn"
        />
        <Curriculum
          topic="Repositório"
          content={
            <p>
              <a target="_blank" href={isData[id - 1].github} rel="noreferrer">
                {isData[id - 1].title}
              </a>
            </p>
          }
          left={0}
          margin="0"
          className="topicOn"
        />
        <Curriculum
          topic="Publicado em"
          content={<p>{monthPerExtense(isData[id - 1].pubDate)}</p>}
          left={0}
          margin="0"
          className="topicOn"
        />
      </S.TextDetailsProject>
      <S.DivText>{projectsBodyText(id)}</S.DivText>
    </>
  );
};

export { TextProject };
