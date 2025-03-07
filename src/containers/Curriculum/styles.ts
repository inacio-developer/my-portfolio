import styled from 'styled-components';
import { Container } from '../Default/styles';

type StructureProps = {
  margin?: string | 'auto';
};
type TopicProps = {
  left: number;
};

const Structure = styled(Container)<StructureProps>`
  padding: 2rem 0;
  margin: ${({ margin }) => margin};

  .topicOn {
    display: block;
  }

  @media only screen and (max-width: 600px) {
    padding: 2rem 2rem;
  }
`;

const Topic = styled.h3<TopicProps>`
  position: absolute;
  font-size: ${({ theme }) => theme.font.size.h3};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.font.color.alternative};
  transform: translate3d(-${({ left }) => left}px, 0px, 0px);
  letter-spacing: 0.01rem;

  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export { Structure, Topic };
