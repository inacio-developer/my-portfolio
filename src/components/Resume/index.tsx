import GIF from '../../assets/gifs/gif-resume.gif';
import * as S from './styles';

const Resume = () => {
  return (
    <>
      <S.Gif src={GIF} alt="Gif image" />
      <S.Text>
        Me chamo Rafael Inácio, sou desenvolvedor e atualmente curso Engenharia
        de Software na Universidade Católica de Brasília, com conclusão prevista
        para 2027. Tenho mais de 20 projetos publicados no GitHub, onde exploro
        tecnologias como JavaScript com TypeScript, React e Java com Spring
        Boot.
      </S.Text>
      <S.Text>
        Adquiri experiência com design ao trabalhar por dois anos no Laboratório
        de Fotografia e Design da PUC Minas, desenvolvendo habilidades que
        complementam meu trabalho técnico. Durante minha experiência na
        Prefeitura de Belo Horizonte, atuei intermediando a comunicação entre
        meu setor e a equipe de tecnologia no desenvolvimento de um aplicativo
        voltado para atender demandas da cidade.
      </S.Text>
      <S.Text>
        Sou formado em Jornalismo pela PUC Minas, e essa formação contribui para
        minha capacidade de comunicação e colaboração em equipe. Atualmente,
        estou focado em aprimorar meus conhecimentos técnicos e criar soluções
        que aliem funcionalidade e impacto real.
      </S.Text>
    </>
  );
};

export { Resume };
