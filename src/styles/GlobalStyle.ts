import { createGlobalStyle } from 'styled-components';
import regular from '../assets/fonts/Nunito-Regular.ttf';
import medium from '../assets/fonts/Nunito-Medium.ttf';
import bold from '../assets/fonts/Nunito-Bold.ttf';
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: url(${regular});
        font-weight: 300;
    }
    @font-face {
        font-family: 'Nunito';
        src: url(${medium});
        font-weight: 500;
    }
    @font-face {
        font-family: 'Nunito';
        src: url(${bold});
        font-weight: 700;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%; 
    }
    body {
        width: 100%;
        overflow-x: hidden;
        font-family: ${({ theme }) => theme.font.family};
        font-size: ${({ theme }) => theme.font.size.text};
        font-weight: ${({ theme }) => theme.font.weight.regular};
        color: ${({ theme }) => theme.font.color.primary};
        background-color: ${({ theme }) => theme.colors.primary};
    }
    .container {
        margin: auto;
        width: 100%;
        max-width: 1600px;
        display: grid;
        grid-template-columns: 7.9rem auto;

        @media only screen and (max-width: 1199px) {
        grid-template-columns: auto;
        grid-template-rows: auto 7.9rem;
  }
    }
    ul {
        list-style: none;
    }
    button {
        font-family: ${({ theme }) => theme.font.family};
        font-size: ${({ theme }) => theme.font.size.text};
        color: ${({ theme }) => theme.font.color.primary};
        background-color: transparent;
        outline: none;
        border: none;
    }
    .animateContent {
    position: relative;
    opacity: 0;
    animation: fadeIn 1s ease-out forwards;
    @keyframes fadeIn {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }}
`;
export { GlobalStyle };
