import styled from 'styled-components';

const Title = styled.h2`
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 1rem;
  transform: translateY(50px);
  animation: slideUp 1s ease-out forwards;

  @keyframes slideUp {
    0% {
      transform: translateY(-40px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0 2rem;
  }
`;

const Subtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.subtitle};
  color: ${({ theme }) => theme.font.color.alternative};
  margin-bottom: 2.5rem;
  transform: translateY(50px);
  animation: slideBottom 1s ease-out forwards;

  @keyframes slideBottom {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }

  @media only screen and (max-width: 800px) {
    padding: 0 2rem;
    font-size: ${({ theme }) => theme.font.size.mobileSubtitle};
  }
`;

export { Title, Subtitle };
