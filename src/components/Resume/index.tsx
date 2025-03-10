import GIF from '../../assets/gifs/gif-resume.gif';
import * as S from './styles';

const Resume = () => {
  return (
    <>
      <S.Gif src={GIF} alt="Gif image" />
      <S.Text>
        Me chamo Rafael Inácio, sou desenvolvedor de software e atualmente curso
        Engenharia de Software na Universidade Católica de Brasília, com
        previsão de conclusão em 2028. Tenho mais de 20 projetos publicados no
        GitHub, onde aplico e aprimoro meus conhecimentos em JavaScript,
        TypeScript, React e Java.
      </S.Text>
      <S.Text>
        Minha trajetória profissional combina tecnologia, design e comunicação.
        Trabalhei por dois anos no Laboratório de Fotografia e Design da PUC
        Minas, desenvolvendo habilidades visuais e de usabilidade que enriquecem
        meu trabalho como desenvolvedor. Na Prefeitura de Belo Horizonte, atuei
        como ponte entre meu setor e a equipe de tecnologia, contribuindo para o
        desenvolvimento de um aplicativo que digitalizou o cadastro de alunos na
        rede municipal, tornando o processo mais simples, acessível e eficiente.
      </S.Text>
      <S.Text>
        Também sou formado em Jornalismo pela PUC Minas, o que aprimorou minha
        comunicação, pensamento analítico e capacidade de trabalho em equipe.
        Essa experiência me permite interagir com diferentes áreas, compreender
        necessidades e traduzi-las em soluções funcionais.
      </S.Text>
      <S.Text>
        Atualmente, sigo expandindo meus conhecimentos técnicos e desenvolvendo
        projetos que aliam tecnologia, acessibilidade e impacto real.
      </S.Text>
    </>
  );
};

export { Resume };
