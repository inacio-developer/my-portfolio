import styled from 'styled-components';

const Text = styled.p`
  display: block;
  font-size: ${({ theme }) => theme.font.size.text};
  margin-bottom: 2rem;
`;

export { Text };
