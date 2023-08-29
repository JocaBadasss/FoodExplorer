import { styled } from "styled-components"
import explorerLogo from "../../assets/ExplorerLogo.svg"

export const Container = styled.div`
  max-width: 42.8rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 4.7rem 0 6.5rem;

  > div {
    height: 4.3rem;
    display: flex;
    align-items: start;
    gap: 1rem;

    margin-bottom: 7rem;

    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    font-size: 3.6rem;
  }

  @media (min-width: 700px) {
    max-width: unset;
    flex-direction: column;
    align-items: center;
  }

  @media (min-width: 1024px) {
    max-width: unset;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
`

export const ExplorerLogo = styled.svg`
  background: url(${explorerLogo}) no-repeat center;
  width: 27rem;
  height: 4.3rem;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 3.2rem;

  > a {
    text-align: center;
  }

  > h1 {
    display: none;
  }

  @media (min-width: 700px) {
    width: 47.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_400};
      display: unset;
      text-align: center;
    }
  }

  @media (min-width: 1024px) {
    width: 47.6rem;
    background-color: ${({ theme }) => theme.COLORS.DARK_700};
    padding: 6.4rem;
    border-radius: 1.6rem;

    > h1 {
      display: unset;
      text-align: center;
    }
  }
`
export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  gap: clamp(3.2rem, 0.8296rem + 7.4074vw, 4rem);

  input {
    width: 100%;

    &::placeholder {
      font-size: clamp(1rem, -0.7778rem + 5.5556vw, 1.6rem);
    }
  }

  @media (min-width: 700px) {
    input {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: 1024px) {
    input {
      border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`
