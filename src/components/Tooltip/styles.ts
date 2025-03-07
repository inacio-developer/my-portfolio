import styled from 'styled-components';

const Tooltip = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  width: max-content;
  font-size: ${({ theme }) => theme.font.size.tooltip};
  padding: 0.35rem 0.9rem;
  background-color: #e8e8e8;
  border-radius: 0.5rem;
  animation: 1s opacity;
  @keyframes opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Key = styled.div`
  width: 1.4rem;
  height: 1.4rem;
  background-color: #a6a6a6;
  margin-left: 0.55rem;
  padding: 0rem 0rem 0.18rem 0;
  border-top-right-radius: 0.4rem;
  border-top-left-radius: 0.4rem;
  border-bottom-left-radius: 0.4rem;
  border-bottom-right-radius: 0.4rem;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    font-size: 1rem;
    border-top-right-radius: 0.4rem;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    background-color: #d9d9d9;
  }
  @media only screen and (max-width: 1199px) {
    display: none;
  }
`;

export { Tooltip, Key };
