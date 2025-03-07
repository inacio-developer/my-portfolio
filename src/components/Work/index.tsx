import { useNavigating } from '../../hooks/useNavigating';
import { Projects } from '../../data/Projects';
import { Button } from '../Button';
import { SvgComponent as Icon } from '../../assets/images/icons/projects-icon';
import { SvgComponent as ButtonIcon } from '../../assets/images/icons/projects-view-all';
import * as S from './styles';
const Work = (): JSX.Element => {
  const { scrollToTopAndNavigate } = useNavigating();
  return (
    <>
      {Projects.map((project, i) => {
        if (i < 2) {
          return (
            <S.Button
              key={i}
              onClick={e =>
                scrollToTopAndNavigate(
                  e,
                  encodeURI(`projetos/${project.id}/${project.title}`),
                )
              }
            >
              <S.Header>
                <Icon />
                <S.Title>{project.title}</S.Title>
              </S.Header>
              <S.Img src={project.img} alt={`img ${project.title}`} />
            </S.Button>
          );
        } else return null;
      })}
      <Button
        text={'Confira outros projetos'}
        icon={<ButtonIcon />}
        width="100%"
        clickEvent={e =>
          scrollToTopAndNavigate(
            e,
            encodeURI(`/projetos/${Projects[0].id}/${Projects[0].title}`),
          )
        }
      />
    </>
  );
};
export { Work };
