import styled from 'styled-components';

const Structure = styled.div`
  display: grid;
  grid-template-columns: 40rem auto;
  justify-items: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 1199px) {
    grid-template-rows: 1fr;
    grid-template-columns: auto;
  }
`;

export { Structure };
