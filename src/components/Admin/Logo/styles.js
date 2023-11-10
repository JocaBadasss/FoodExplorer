import { styled } from "styled-components"
import explorerLogo from "../../../assets/ExplorerLogo.svg"

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  > span {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR}
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: end;
    gap: unset;
  }
`

export const ExplorerLogo = styled.svg`
  background: url(${explorerLogo}) no-repeat center;
  width: 27rem;
  height: 4.3rem;
`
