import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  transition: 1s ease;
  cursor: pointer;
  transform: translate3d(0px, -7px, 0px);
  margin-bottom: 0.5rem;
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverTwo};
  }

  &:hover .tag {
    color: ${({ theme }) => theme.colors.hoverBlack};
    border: 0.1rem solid ${({ theme }) => theme.colors.hoverBlack};
  }

  &:visited {
    color: ${({ theme }) => theme.font.color.primary};
  }

  @media only screen and (max-width: 700px) {
    flex-direction: column-reverse;
    gap: 0.5rem;
  }
`;

const Title = styled.p`
  min-width: 85%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
`;

const DivTags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const Date = styled.span``;

export { Button, Title, DivTags, Date };
