import styled from 'styled-components';

const Article = styled.div`
  position: relative;
  margin-bottom: 1rem;
  padding: 1.2rem;
  border-radius: 0.6rem;
  transform: translate3d(-11px, 0px, 0px);
  transition: 1s ease;
  background-color: ${({ theme }) => theme.colors.hoverTwo};

  .width-0 {
    width: 0%;
    background-color: ${({ theme }) => theme.colors.hoverTwo};
    animation: opacityOff forwards 1s;

    @keyframes opacityOff {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  .width-10 {
    width: 10%;
    animation: opacityOn forwards 0.1s;

    @keyframes opacityOn {
      0% {
        opacity: 0.8;
      }
      100% {
        opacity: 1;
      }
    }
  }
  .width-20 {
    width: 20%;
  }
  .width-30 {
    width: 30%;
  }
  .width-40 {
    width: 40%;
  }
  .width-50 {
    width: 50%;
  }
  .width-60 {
    width: 60%;
  }
  .width-70 {
    width: 70%;
  }
  .width-80 {
    width: 80%;
  }
  .width-90 {
    width: 90%;
  }
  .width-100 {
    width: 100%;
  }
`;

const Layer = styled(Article)`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.alternative};
  transition: 2s ease;
  top: 0;
  z-index: 2;
`;

const ArticleLink = styled.button`
  display: block;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1.2rem;
  border-radius: 0.6rem;
  transform: translate3d(-11px, 0px, 0px);
  transition: 1s ease;
  text-align: left;
  font-family: ${({ theme }) => theme.font.family};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  font-size: ${({ theme }) => theme.font.size.text};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.hoverTwo};
  }
`;

const Resume = styled.span`
  position: relative;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  color: ${({ theme }) => theme.font.color.alternative};
  z-index: 3;

  @media only screen and (max-width: 900px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Content = styled.h3`
  position: relative;
  text-align: left;
  font-size: ${({ theme }) => theme.font.size.h3};
  margin-bottom: 0.8rem;
  font-weight: ${({ theme }) => theme.font.weight.regular};
  line-height: 2.5rem;
  z-index: 3;
`;

export { Article, Layer, ArticleLink, Resume, Content };
