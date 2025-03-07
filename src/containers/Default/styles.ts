import styled from 'styled-components';

const Container = styled.section`
  position: relative;
  width: 58rem;
  max-width: 58rem;
  margin: auto;
  padding: 6.5rem 0 6rem 0;
  line-height: 2.5rem;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    padding: 4rem 0 4rem 0;
  }
`;

export { Container };
