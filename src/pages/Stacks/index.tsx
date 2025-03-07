import { Container } from '../../containers/Default';
import { Title } from '../../components/Title';
import { Curriculum } from '../../containers/Curriculum';
import { Tools } from '../../components/Tools';
const Stacks = (): JSX.Element => (
  <>
    <Container>
      <Title
        title="Ferramentas"
        subtitle="Linguagens, bibliotecas, frameworks e outros recursos"
      />
      <Curriculum
        topic={'Desenvolvimento'}
        content={<Tools category={'development'} />}
        left={180}
      />
      <Curriculum
        topic={'IDE'}
        content={<Tools category={'IDE'} />}
        left={87}
      />
      <Curriculum
        topic={'Softwares'}
        content={<Tools category={'softwares'} />}
        left={135}
      />
    </Container>
  </>
);
export { Stacks };
