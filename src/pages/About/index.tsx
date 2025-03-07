import { Container } from '../../containers/Default';
import { Title } from '../../components/Title';
import { Resume } from '../../components/Resume';
import { Curriculum } from '../../containers/Curriculum';
import { Journey } from '../../components/Journey';
const About = (): JSX.Element => (
  <>
    <Container>
      <Title title="Sobre" subtitle="Um pouco mais da minha história" />
      <Curriculum topic="Resumo" content={<Resume />} left={130} />
      <Curriculum
        topic="Experiência"
        content={<Journey modality="xp" />}
        left={154.8}
      />
      <Curriculum
        topic="Educação"
        content={<Journey modality="education" />}
        left={144}
      />
    </Container>
  </>
);
export { About };
