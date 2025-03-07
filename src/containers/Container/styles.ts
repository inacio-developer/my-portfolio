import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 48rem;
  margin: auto;

  @media only screen and (max-width: 1199px) {
    width: 100%;
  }
`;

export { Container };
