import { Container } from '../../containers/Container';
import { Header } from '../../containers/Header';
import { Me } from '../../components/Me';
import { Work } from '../../components/Work';
import { Articles } from '../../components/Articles';
import { Curriculum } from '../../containers/Curriculum';
const Home = (): JSX.Element => {
  return (
    <>
      <div className="animateContent">
        <Container>
          <Header />
        </Container>
        <Curriculum topic={'Sobre'} content={<Me />} left={102} />
        <Curriculum topic="Projetos" content={<Work />} left={120} />
        <Curriculum topic={'Artigos'} content={<Articles />} left={112} />
      </div>
    </>
  );
};
export { Home };
