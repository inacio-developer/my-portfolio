import styled from 'styled-components';

const Tag = styled.span`
  display: block;
  padding: 0.2rem 0.7rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.alternative};
  border-radius: 0.4rem;
  font-size: ${({ theme }) => theme.font.size.tag};
  text-transform: uppercase;
  color: ${({ theme }) => theme.font.color.alternative};
  margin-top: 1rem;
  width: fit-content;
  transition: 1s ease;
`;

export { Tag };
