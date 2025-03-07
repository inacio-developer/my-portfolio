import styled from 'styled-components';
const Structure = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: 7.9rem auto;
  @media only screen and (max-width: 1199px) {
    grid-template-columns: auto;
    grid-template-rows: auto 7.9rem;
  }
`;
export { Structure };
