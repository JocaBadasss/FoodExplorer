import { styled } from "styled-components"
import explorerLogo from "../../assets/ExplorerLogo.svg"

export const Container = styled.header`
  width: 100%;

  >button {
    border: none;
    background: none;
    font-size: 3.6rem;
    color: blue;
  }
`

export const Logo = styled.svg`
  background-image: url(${explorerLogo}) no-repeat center center;

`
