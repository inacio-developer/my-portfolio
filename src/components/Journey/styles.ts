import styled from 'styled-components';

const Career = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.5rem;
  margin-bottom: 0.5rem;
`;

const Date = styled.span`
  display: block;
  color: ${({ theme }) => theme.font.color.alternative};
`;

export { Career, Date };
