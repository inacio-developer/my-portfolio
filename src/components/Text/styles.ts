import styled from 'styled-components';
const Div = styled.div`
  width: 56rem;
  height: 100%;
  padding: 4rem 0;
  opacity: 0;
  animation: FadeIn 1s ease-out forwards;
  ul {
    list-style: inside;
  }
  li {
    line-height: 2.5rem;
    letter-spacing: 0.01rem;
    margin-bottom: 1rem;
  }
  li:last-of-type {
    margin-bottom: 0rem;
  }
  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @media only screen and (max-width: 1199px) {
    width: 60%;
    padding: 4rem 2rem 0rem 2rem;
  }
  @media only screen and (max-width: 800px) {
    width: 80%;
    padding: 4rem 2rem 0rem 2rem;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    padding: 4rem 2rem 0rem 2rem;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 28.5rem;
  object-fit: cover;
  border-radius: 1rem;
`;
const Date = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.text};
  font-size: ${({ theme }) => theme.font.color.alternative};
  margin-top: 3.7rem;
  margin-bottom: 1.3rem;
`;
const Title = styled.h2`
  display: block;
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 1.3rem;
`;
const TitleLink = styled.a`
  display: block;
  font-size: ${({ theme }) => theme.font.size.h2};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  margin-bottom: 1.3rem;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.font.color.primary};
  margin-top: 3.3rem;
`;
const DivTag = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
`;
const DivText = styled.div`
  margin-top: 2.8rem;
  p,
  blockquote,
  pre {
    font-size: ${({ theme }) => theme.font.size.text};
    line-height: 2.5rem;
    letter-spacing: 0.01rem;
    margin: 1.5rem 0;
    white-space: normal;
  }
  p {
    &:first-of-type {
      margin-top: 0;
    }
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;
const TextDetailsProject = styled.div`
  display: block;
  margin-top: 2rem;

  section {
    padding: 0.15rem 0;
    &:last-of-type {
      padding: 0.15rem 0 0 0;
    }
  }
  p {
    display: inline-block;
    margin: 0;
    transform: translate3d(138px, 0px, 0px);
  }

  a {
    @media only screen and (max-width: 600px) {
      display: inline-block;
      width: 150px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;
export {
  Div,
  Img,
  Date,
  Title,
  TitleLink,
  DivTag,
  DivText,
  TextDetailsProject,
};
