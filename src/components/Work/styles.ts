import styled from 'styled-components';

const Button = styled.button`
  display: block;
  padding: 0.8rem 0.8rem 0.1rem 0.8rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.alternative};
  width: 100%;
  height: 31.6rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  position: relative;
  cursor: pointer;
  transition: 1s ease;
  text-decoration: none;
  color: ${({ theme }) => theme.font.color.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverTwo};
  }

  svg {
    width: 2.4rem;
    height: 2.2rem;
  }

  @media only screen and (max-width: 1199px) {
    height: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 0.9rem;
`;

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.text};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-left: 0.8rem;
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  max-height: 26.6rem;
  object-fit: cover;
  border-radius: 1rem;
`;

export { Button, Header, Title, Img };
