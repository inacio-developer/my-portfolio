import styled from 'styled-components';

const Gif = styled.img`
  width: 100%;
  margin-bottom: 2.5rem;
`;

const Text = styled.p`
  margin-bottom: 2.5rem;
  line-height: 2.6rem;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export { Gif, Text };
