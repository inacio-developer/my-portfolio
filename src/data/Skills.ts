import { Skills } from '../types/skills';
import html from '../assets/images/stacks-html.svg';
import CSS from '../assets/images/stacks-css.svg';
import bootstrap from '../assets/images/stacks-bootstrap.svg';
import tailwind from '../assets/images/stacks-tailwind.svg';
import less from '../assets/images/stacks-less.svg';
import sass from '../assets/images/stacks-sass.svg';
import javascript from '../assets/images/stacks-js.svg';
import typescript from '../assets/images/stacks-typescript.svg';
import jquery from '../assets/images/stacks-jquery.svg';
import react from '../assets/images/stacks-react.svg';
import styledComponents from '../assets/images/stacks-styledComponents.svg';
import gulp from '../assets/images/stacks-gulp.svg';
import grunt from '../assets/images/stacks-grunt.svg';
import jest from '../assets/images/stacks-jest.svg';
import cypress from '../assets/images/stacks-cypress.svg';
import node from '../assets/images/stacks-node.svg';
import java from '../assets/images/stacks-java.svg';
import mySQL from '../assets/images/stacks-mysql.svg';
import postgree from '../assets/images/stacks-postgree.svg';
import vsCode from '../assets/images/stacks-vscode.svg';
import idea from '../assets/images/stacks-idea.svg';
import psp from '../assets/images/stacks-photoshop.svg';
import figma from '../assets/images/stacks-figma.svg';
import premiere from '../assets/images/stacks-premiere.svg';
const Skill: { development: Skills[]; IDE: Skills[]; softwares: Skills[] } = {
  development: [
    {
      category: 'Estruturação',
      name: 'HTML',
      img: html,
    },
    {
      category: 'Estilo',
      name: 'CSS',
      img: CSS,
    },
    {
      category: 'Framework',
      name: 'Bootstrap',
      img: bootstrap,
    },
    {
      category: 'Biblioteca',
      name: 'Tailwind',
      img: tailwind,
    },
    {
      category: 'Pré-processador',
      name: 'Less',
      img: less,
    },
    {
      category: 'Pré-processador',
      name: 'Sass',
      img: sass,
    },
    {
      category: 'Linguagem',
      name: 'Javascript',
      img: javascript,
    },
    {
      category: 'Linguagem',
      name: 'Typescript',
      img: typescript,
    },
    {
      category: 'Biblioteca',
      name: 'Jquery',
      img: jquery,
    },
    {
      category: 'Biblioteca',
      name: 'React',
      img: react,
    },
    {
      category: 'Biblioteca',
      name: 'Styled Components',
      img: styledComponents,
    },
    {
      category: 'Automação',
      name: 'Gulp',
      img: gulp,
    },
    {
      category: 'Automação',
      name: 'Grunt',
      img: grunt,
    },
    {
      category: 'Testes',
      name: 'Jest',
      img: jest,
    },
    {
      category: 'Testes',
      name: 'Cypress',
      img: cypress,
    },
    {
      category: 'Runtime',
      name: 'Node.js',
      img: node,
    },
    {
      category: 'Linguagem',
      name: 'Java',
      img: java,
    },
    {
      category: 'Banco de dados',
      name: 'MySQL',
      img: mySQL,
    },
    {
      category: 'Banco de dados',
      name: 'Postgree',
      img: postgree,
    },
  ],
  IDE: [
    {
      category: 'Microsoft',
      name: 'Visual Studio Code',
      img: vsCode,
    },
    {
      category: 'JetBrains',
      name: 'IntelliJ IDEA',
      img: idea,
    },
  ],
  softwares: [
    {
      category: 'Pacote Adobe',
      name: 'Photoshop',
      img: psp,
    },
    { category: 'Pacote Adobe', name: 'Figma', img: figma },
    {
      category: 'Pacote Adobe',
      name: 'Premiere',
      img: premiere,
    },
  ],
};
export { Skill };
