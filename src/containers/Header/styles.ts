import styled from 'styled-components';
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 4rem 0;
  gap: 1.4rem;
  position: relative;
  margin-bottom: 1rem;
  .title_header,
  .subtitle_header {
    transform: translateY(50px);
    animation: slideUp 1s ease-out forwards;
    @keyframes slideUp {
      0% {
        opacity: 0;
        transform: translateY(50px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
  @media only screen and (max-width: 1199px) {
    width: 80%;
  }
`;
const Portrait = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 11rem;
  width: 11rem;
  position: relative;
  img {
    width: 100%;
  }
`;
const Avatar = styled.img`
  position: absolute;
  height: 5rem;
  width: 5rem !important;
  transform: translate3d(0px, 11px, 0px);
`;
const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.size.h1};
  font-weight: ${({ theme }) => theme.font.weight.regular};
  letter-spacing: 0.05rem;
  text-align: center;
`;
const Subtitle = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.font.size.subtitle};
  color: ${({ theme }) => theme.font.color.alternative};
  margin: 0.8rem 0rem;
`;
const GridContact = styled.div`
  display: grid;
  width: 46rem;
  grid-template-columns: 1fr 0.2fr 1fr;
  justify-items: center;
  align-items: center;
  margin: 1rem 0 0rem 0;
  .copySucess {
    padding: 1rem;
    background-color: ${({ theme }) => theme.colors.hoverTwo};
    color: ${({ theme }) => theme.font.color.primary};
    border: 1px solid ${({ theme }) => theme.colors.alternative};
  }
  .copySucess svg {
    display: none;
  }
  @media only screen and (max-width: 736px) {
    width: 100%;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
  }
`;
const Span = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray};
`;
const Div = styled.div`
  width: 100%;
`;
export { Header, Portrait, Avatar, Title, Subtitle, GridContact, Span, Div };
