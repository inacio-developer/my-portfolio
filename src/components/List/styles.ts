import styled from 'styled-components';

type Transform = 'Bottom' | 'Right';

type ListProps = {
  $flexDirection: string;
  $gap: string;
};

type ItemProps = {
  $transform: Transform;
};

const List = styled.ul<ListProps>`
  display: flex;
  flex-direction: ${({ $flexDirection }) => $flexDirection};
  justify-content: center;
  align-items: center;
  gap: ${({ $gap }) => $gap + 'rem'};
  z-index: 2;
  position: relative;

  @media only screen and (max-width: 1199px) {
    flex-direction: row;
    width: 100%;
    justify-content: ${({ $flexDirection }) =>
      $flexDirection === 'column' ? 'space-around' : 'center'};
  }
`;

const Item = styled.li<ItemProps>`
  a {
    display: flex;
    align-items: center;
  }

  .link_socialNetworks:visited {
    color: ${({ theme }) => theme.font.color.primary};
  }

  &:hover .iconSVG {
    fill: ${({ theme }) => theme.colors.hover};
    stroke: ${({ theme }) => theme.colors.hover} !important;
  }

  &:hover .iconFillException {
    fill: transparent;
  }

  &:hover .iconStrokeException {
    stroke: transparent;
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
    cursor: pointer;
  }

  .gitSizeException {
    width: 3.2rem;
    height: 3.2rem;
  }

  .MediumSizeException {
    width: 3.5rem;
    height: 3.5rem;
  }

  .iconSVG {
    transition:
      stroke 0.5s ease-in,
      fill 0.5s ease-in;
  }

  .tooltip {
    display: none;
    transform: ${({ $transform }) =>
      $transform === 'Bottom'
        ? 'translate3d(-13px, 30px, 0px)'
        : 'translate3d(4rem, 0px, 0px)'};

    @media only screen and (max-width: 1199px) {
      transform: ${({ $transform }) =>
        $transform === 'Bottom'
          ? 'translate3d(-13px, 30px, 0px)'
          : 'translate3d(-1.1rem, -34px, 0px)'};
    }
  }

  &:hover .tooltip {
    display: flex;
  }

  .navbar-item,
  .navbar-item:visited .is-active,
  .is-active:active,
  .isa-active:focus {
    color: inherit;
  }

  .is-active .iconSVG {
    stroke: ${({ theme }) => theme.colors.hoverBlack} !important;
  }

  .is-active .iconSVGException {
    fill: ${({ theme }) => theme.colors.hoverBlack};
  }

  .is-active .iconStrokeException {
    stroke: transparent;
  }
`;

export { List, Item };
