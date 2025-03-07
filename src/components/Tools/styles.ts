import styled from 'styled-components';

const Stacks = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;

  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    column-gap: 1rem;
  }

  @media only screen and (max-width: 450px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
  }
`;

const Card = styled.div`
  width: 18rem;
  height: 22rem;
  display: grid;
  align-items: center;
  grid-template-rows: 2fr 0.1fr;
  background-color: #f5f5f5;
  border-radius: 1rem;
  padding: 1rem 1.6rem;

  @media only screen and (max-width: 1199px) {
    width: 100%;
    height: auto;
  }
`;

const Div = styled.div`
  display: flex;
  align-self: center;
  justify-self: center;
`;

const Img = styled.img`
  width: 7.2rem;
`;

const Title = styled.span`
  display: block;
  margin: 0.8rem 0 0.4rem 0;
`;

export { Stacks, Div, Card, Img, Title };
