import { Projects as typeProjects } from '../types/projects';
import footballSummary from '../assets/images/projects-football_summary.jpg';
import schedule from '../assets/images/projects-schedule.jpg';
import humberto from '../assets/images/projects-humberto_gessinger.jpg';
import KD9 from '../assets/images/projects-nike_KD9.jpg';
const Projects: typeProjects[] = [
  {
    id: 1,
    pubDate: '2024-01-23',
    title: 'Football Summary',
    role: 'Desenvolvedor e designer',
    resume:
      'O Football Summary tem como objetivo facilitar o acesso as informações básicas dos clubes de futebol.',
    description:
      '<p>O Football Summary é um projeto que utiliza a API disponibilizada pelo site The SportsDB para criar um site que fornece informações gerais sobre clubes de futebol. O objetivo principal é facilitar o acesso a dados relevantes, como redes sociais, informações do clube, país, estádio, website oficial, e uma seção dedicada à história do clube. O projeto visa oferecer aos usuários uma maneira rápida e fácil de obter um resumo abrangente sobre cada time de futebol disponibilizado pela API.</p> <p><strong>Funcionalidades</strong></p> <p>O site apresenta as seguintes funcionalidades:</p> <p> <ul> <li><strong>Informações Gerais do Clube:</strong> Nome do clube, país, estádio e website oficial.</li> <li><strong>Redes Sociais:</strong> Links diretos para as redes sociais do clube, incluindo Youtube, Instagram, Twitter e Facebook.</li> <li><strong>Modal de História:</strong> Um modal interativo contendo a história detalhada do clube.</li> </ul> </p> <p><strong>Tecnologias Utilizadas</strong></p> <p>O projeto foi desenvolvido utilizando as seguintes tecnologias:</p> <p> <ul> <li><strong>HTML:</strong> Linguagem de marcação para estruturação do conteúdo.</li> <li><strong>CSS:</strong> Linguagem de estilos para design e layout.</li> <li><strong>JavaScript:</strong> Linguagem de programação para funcionalidades interativas.</li> </ul> </p> <p><strong>Design e Estilo</strong></p> <p>O layout do Football Summary foi construído com uma abordagem limpa e amigável. Foram utilizadas as seguintes fontes para garantir uma experiência visual agradável:</p> <p> <ul> <li><strong>Amaranth:</strong> Fonte principal para títulos.</li> <li><strong>Find Cartoon:</strong> Usada para elementos decorativos.</li> <li><strong>Nunito:</strong> Fonte secundária para textos descritivos.</li> </ul> </p> <p>As imagens foram obtidas do repositório SVG Repo.</p>',
    img: footballSummary,
    url: 'https://football-summary.vercel.app/',
    coWork: '-',
    github: 'https://github.com/inacio-developer/Football_Summary',
  },
  {
    id: 2,
    pubDate: '2024-09-25',
    title: 'Lista de Contatos',
    role: 'Desenvolvedor e designer',
    resume:
      'Este projeto emula uma lista de contatos construída com React e TypeScript.',
    description:
      '<p>Este projeto é uma aplicação de lista de contatos construída com React e TypeScript. O objetivo foi implementar diversas maneiras de adicionar, editar e remover contatos. A lógica foi desenvolvida utilizando checkboxes para selecionar quais contatos devem ser editados ou removidos, e um formulário para adicionar novos contatos.</p> <p><strong>Funcionalidades</strong></p> <p>O site apresenta as seguintes funcionalidades:</p> <p> <ul> <li><strong>Adicionar Contato:</strong> Preencha um formulário com os dados do contato e clique em "Adicionar" para inseri-lo na lista.</li> <li><strong>Editar Contato:</strong> Selecione um contato com a checkbox e clique em "Editar" para modificar os dados.</li> <li><strong>Remover Contato:</strong> Selecione um ou mais contatos e clique em "Remover" para excluí-los da lista.</li> </ul> </p> <p><strong>Tecnologias Utilizadas</strong></p> <p>O projeto foi desenvolvido utilizando as seguintes tecnologias:</p> <p> <ul> <li><strong>React:</strong> Biblioteca para construção da interface de usuário.</li> <li><strong>TypeScript:</strong> Superset do JavaScript que adiciona tipagem estática.</li> <li><strong>Styled Components:</strong> Biblioteca para estilização de componentes em React, permitindo o uso de CSS dentro do JavaScript.</li> <li><strong>Redux Toolkit:</strong> Ferramenta para gerenciamento de estado da aplicação.</li> <li><strong>Prettier:</strong> Ferramenta de formatação de código para manter a consistência do estilo.</li> <li><strong>ESLint:</strong> Ferramenta de linting para identificar e corrigir problemas no código.</li> <li><strong>.editorconfig:</strong> Arquivo que ajuda a definir e manter estilos de codificação consistentes entre diferentes editores e IDEs.</li> </ul> </p>',
    img: schedule,
    url: 'https://schedule-react-ten.vercel.app/',
    coWork: '-',
    github: 'https://github.com/inacio-developer/Schedule-React',
  },
  {
    id: 3,
    pubDate: '2024-10-11',
    title: 'Humberto Gessinger - Landing Page',
    role: 'Desenvolvedor e designer',
    resume:
      'Landing page dedicada ao cantor e compositor Humberto Gessinger, contendo informações sobre sua carreira.',
    description:
      '<p>Este projeto é uma landing page dedicada ao cantor e compositor Humberto Gessinger, contendo todas as informações primordiais de sua carreira. O site inclui:</p> <p><ul> <li><strong>Resumo da Trajetória:</strong> Um resumo de sua trajetória musical.</li> <li><strong>Agenda de Shows:</strong> A agenda de shows para o ano de 2024.</li> <li><strong>Discografia Completa:</strong> A discografia completa.</li> <li><strong>Plataformas Musicais:</strong> Informações das plataformas onde é possível apreciar sua obra.</li> <li><strong>Cálculo da Distância até o Próximo Show:</strong> Na aba de Agenda, foi desenvolvido um algoritmo que calcula dinamicamente a data de um show a partir de uma data base específica e a data atual. Esse cálculo gera uma data aleatória, mas consistente para todos os usuários que acessarem o site em um determinado dia. A lógica garante que, por exemplo, se a página for acessada em 08/10, o próximo show apareça no dia 11/10, e todos os usuários visualizarão a mesma contagem de dias até o show.</li> </ul></p> <p>Essa abordagem evita que a data de um show esteja presa ao dia atual, permitindo que o usuário visualize a contagem exata de dias, meses e anos até o próximo evento.</p> <p><strong>Tecnologias Utilizadas</strong></p> <p>O projeto foi desenvolvido utilizando as seguintes tecnologias:</p> <p><ul> <li><strong>Parcel:</strong> Utilizado para o desenvolvimento e build do projeto.</li> <li><strong>Sass:</strong> Utilizado para estilização.</li> <li><strong>JavaScript:</strong> Utilizado para a lógica de cálculo dinâmico das datas de shows e funcionalidades gerais do site.</li> <li><strong>HTML e CSS:</strong> Estrutura e estilo do site.</li> </ul></p>',
    img: humberto,
    url: 'https://lp-humberto-gessinger.vercel.app',
    coWork: '-',
    github: 'https://github.com/inacio-developer/lp_humbertoGessinger',
  },
  {
    id: 4,
    pubDate: '2024-09-07',
    title: 'Nike Zoom KD 9 - Landing Page',
    role: 'Desenvolvedor e designer',
    resume:
      'Landing page feita para apresentar o novo tênis do astro da NBA Kevin Durant.',
    description:
      '<p>Esta landing page foi criada por um fã de Kevin Durant para proporcionar uma experiência imersiva. O visitante é recebido com um vídeo de introdução que cobre toda a tela, oferecendo uma entrada vibrante ao mundo do Nike Zoom KD 9. Ao clicar para entrar, o vídeo é ocultado e o restante do conteúdo da página é revelado, incluindo uma seção especial com mais informações sobre o tênis e outro vídeo na área de "Sobre".</p> <p>A página foi projetada para refletir a atmosfera e estilo de Kevin Durant, destacando o lançamento do Nike Zoom KD 9 de maneira cativante e envolvente.</p> <p><strong>Funcionalidades</strong></p> <p>O site apresenta as seguintes funcionalidades:</p> <p> <ul> <li><strong>Vídeo Intro (Tela Cheia):</strong> Um vídeo criado pelo artista K ORB, cobrindo toda a tela na entrada do site, proporcionando uma experiência imersiva. Este vídeo foi obtido do Behance e pode ser acessado no repositório oficial.</li> <li><strong>Conteúdo Revelado:</strong> Ao clicar no botão de introdução, o conteúdo da página é revelado, mostrando o layout completo, que inclui informações e imagens sobre o Nike Zoom KD 9.</li> <li><strong>Seção "Sobre":</strong> A página contém outra seção de destaque, onde há um segundo vídeo relacionado ao lançamento, obtido do YouTube através do canal Nelson Sia.</li> </ul> </p> <p><strong>Tecnologias Utilizadas</strong></p> <p>O projeto foi desenvolvido utilizando as seguintes tecnologias:</p> <p> <ul> <li><strong>HTML:</strong> Estrutura da página.</li> <li><strong>CSS:</strong> Estilização e design responsivo.</li> <li><strong>JavaScript:</strong> Funcionalidades interativas e lógicas da página.</li> </ul> </p>',
    img: KD9,
    url: 'https://lp-kd9-zoom.vercel.app',
    coWork: '-',
    github: 'https://github.com/inacio-developer/lp-kd9-Zoom',
  },
];
export { Projects };
