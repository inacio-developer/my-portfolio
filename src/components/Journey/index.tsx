import { Career } from '../../data/Career';
import * as S from './styles';

type JourneyProps = {
  modality: 'xp' | 'education';
};

const Journey = ({ modality }: JourneyProps): JSX.Element => {
  const isMobile = window.innerWidth <= 500;
  const isSmallMobile = window.innerWidth <= 400;

  return (
    <>
      {Career[modality].map((exp, i) => (
        <S.Career key={i}>
          <S.Date>{exp.period}</S.Date>
          <p>
            {modality === 'xp'
              ? isMobile
                ? `${exp.office} na ${exp.acronym}`
                : `${exp.office} na ${exp.enterprise}`
              : isMobile
                ? isSmallMobile
                  ? `${exp.course?.replace('Engenharia de Software', 'Eng. de Software')} na ${exp.acronym}`
                  : `${exp.course} na ${exp.acronym}`
                : `${exp.course} na ${exp.school}`}
          </p>
        </S.Career>
      ))}
    </>
  );
};

export { Journey };
