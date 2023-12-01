import { styled } from "styled-components"

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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 3.2rem;

  > a {
    text-align: center;
    margin-top: 0;
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
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
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

  input:-webkit-autofill,
  input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 1000px ${({ theme }) => theme.COLORS.DARK_900}
      inset;

    -webkit-text-fill-color: ${({ theme }) => theme.COLORS.LIGHT_100};
    -webkit-border-radius: 0.8rem;
  }

  input {
    width: 100%;

    &::placeholder {
      font-size: clamp(1rem, -0.7778rem + 5.5556vw, 1.6rem);
    }
  }

  .textfield-label {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .input-textfield {
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;

    > .MuiInputBase-root {
      font-family: "Roboto", sans-serif;
      font-size: 1.6rem;
      background-color: ${({ theme }) => theme.COLORS.DARK_900};
      border-radius: 0.8rem;
    }

    .MuiFormHelperText-root {
      font-size: 1.2rem;
    }
    .MuiFilledInput-root:after {
      border-bottom: 2px solid ${({ theme }) => theme.COLORS.LIGHT_700};
    }

    > .MuiInputBase-colorPrimary {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }

    > label {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
      font-size: clamp(1rem, -0.7778rem + 5.5556vw, 1.6rem);
    }

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
