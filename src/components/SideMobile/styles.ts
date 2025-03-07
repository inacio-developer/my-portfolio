import styled from 'styled-components';
const Div = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 2.5rem;
  position: sticky;
  top: 0;
  z-index: 8;
  background-color: ${({ theme }) => theme.colors.primary};
  border-bottom: solid 0.15rem ${({ theme }) => theme.colors.alternative};
  svg {
    width: 3rem;
    height: 3rem;
  }
`;
const Title = styled.h3`
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: ${({ theme }) => theme.font.weight.medium};
`;
const Button = styled.button`
  cursor: pointer;
`;
export { Div, Title, Button };
