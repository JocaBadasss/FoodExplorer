import { styled } from "styled-components"

import FooterLogo from "../../assets/FooterExplorerLogo.svg"

export const Container = styled.footer`
  grid-area: footer;

  height: 7.7rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: "DM sans", sans-serif;
  font-size: clamp(0.6rem, -1.1778rem + 5.5556vw, 1.2rem);

  padding: 2.9rem 2.7rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  @media (min-width: 1024px) {
    padding: 2.3rem 12.3rem;

    font-size: 1.4rem;
  }
`

export const Logo = styled.svg`
  background: url(${FooterLogo}) no-repeat left;
  width: 14.2rem;
  height: 1.8rem;

  @media (min-width: 1024px) {
    width: 18.6rem;
    height: 3rem;
  }
`
