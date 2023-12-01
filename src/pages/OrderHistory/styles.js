import styled from "styled-components"

export const Container = styled.div`
  height: 100vh;

  display: grid;

  grid-template-areas:
    "header"
    "main"
    "footer";

  grid-template-rows: 10.4rem auto 7.7rem;
`

export const Main = styled.main`
  padding: 5.6rem 3.5rem 12.2rem;

  @media (min-width: 1024px) {
    padding: 3.4rem 11.3rem 0 12.3rem;
  }
`
