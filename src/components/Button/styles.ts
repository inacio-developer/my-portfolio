import styled from 'styled-components';

type TypeButton = {
  $width: string;
};

const Button = styled.button<TypeButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.7rem;
  width: ${({ $width }) => $width};
  padding: 1rem 1rem;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.size.text};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  background-color: transparent;
  border: 0.1rem solid ${({ theme }) => theme.colors.alternative};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: 0.8s ease-in;
  @keyframes show {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
  span {
    height: 2rem;
  }

  svg {
    width: 2rem;
    height: 2rem;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverTwo};
  }
`;

export { Button };
