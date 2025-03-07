import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  width: 100%;
  padding: 0 2.6rem;

  svg {
    width: 1.7rem;
  }
`;

const Menu = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  width: 33rem;
  padding: 3rem 0rem;
  border-right: solid 0.1rem ${({ theme }) => theme.colors.alternative};

  button {
    transform: translate3d(-11px, 0px, 0px);
  }

  .Article_Date {
    color: ${({ theme }) => theme.font.color.alternative};
    margin-bottom: 0rem;
  }

  @media only screen and (max-width: 1199px) {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 100vh;
    z-index: 4;
    left: 0;
    padding: 3rem 2rem;
    background-color: white;
  }
`;

const Category = styled.h3`
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 1.6rem;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

const Tag = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.h3};
  color: ${({ theme }) => theme.font.color.alternative};
  margin-bottom: 0.8rem;
`;

export { Section, Menu, Category, Tag };
