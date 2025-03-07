import styled from 'styled-components';
const Nav = styled.nav`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 2.5rem;
  background-color: ${({ theme }) => theme.colors.primary};
  border-right: solid 0.1rem ${({ theme }) => theme.colors.alternative};
  width: 7.9rem;
  z-index: 4;
  top: 0;
  @media only screen and (max-width: 1199px) {
    position: fixed;
    width: 100vw;
    top: auto;
    bottom: 0;
    height: auto;
    padding: 2rem;
    border-right: none;
    border-top: solid 0.15rem ${({ theme }) => theme.colors.alternative};
  }
`;
export { Nav };
