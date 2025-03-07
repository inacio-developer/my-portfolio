import styled from 'styled-components';

const Div = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  z-index: 399322929339;
  inset: 0;

  .on {
    animation: sideMenuOn 0.6s ease-out forwards;

    @keyframes sideMenuOn {
      0% {
        transform: translateX(-360px);
        opacity: 0;
      }
      100% {
        transform: translateX(0);
        opacity: 1;
      }
    }
  }

  .off {
    animation: sideMenuOff 0.6s ease-out forwards;

    @keyframes sideMenuOff {
      0% {
        transform: translateX(0);
        opacity: 1;
      }
      100% {
        transform: translateX(-360px);
        opacity: 0;
      }
    }
  }
`;

const Layer = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: 100%;
  inset: 0;
`;

export { Div, Layer };
