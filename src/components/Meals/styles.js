import { styled } from "styled-components"

export const Container = styled.div`
  /* margin: 0 auto; */
`

export const Card = styled.section`
  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.COLORS.DARK_200};

  padding: 2.4rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;

  position: relative;

  .favorite {
    border: none;
    background: none;

    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }

  > img {
    width: 8.8rem;
    height: 8.8rem;
  }

  > h1 {
    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
  }

  > p {
    text-align: center;

    ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
  }

  > span {
    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
  }

  @media (min-width: 1024px) {
    /* min-width: 28.9rem; */
    min-height: 46.2rem;

    padding: 2.4rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;

    position: relative;

    .favorite {
      border: none;
      background: none;

      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
    }

    > img {
      width: 17.6rem;
      height: 17.6rem;
    }

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_300_BOLD};
      width: 25.5rem;
    }

    > p {
      text-align: center;

      ${({ theme }) => theme.FONTS.ROBOTO_SMALLER_REGULAR};
    }

    > span {
      ${({ theme }) => theme.FONTS.ROBOTO_BIGGEST_REGULAR};
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }
  }
`
export const IncludeContainer = styled.div`
  width: 16.2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;

  > button {
    width: 100%;
    height: 4.8rem;
  }

  > div {
    width: 10rem;
    height: 3.2rem;

    margin: 0.8rem 0 0.8rem 0;

    display: flex;
    gap: 1.4rem;

    button {
      border: none;
      background: none;
    }

    input {
      width: 100%;
      background: none;
      border: none;

      text-align: center;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};

      &::-webkit-inner-spin-button {
        -webkit-appearance: none;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.6rem;

    > button {
      width: 9.2rem;
      height: 4.8rem;
    }

    > div {
      width: 10rem;
      height: 3.2rem;

      margin: 0.8rem 0 0.8rem 0;

      display: flex;
      gap: 1.4rem;

      button {
        border: none;
        background: none;
      }

      input {
        width: 100%;
        background: none;
        border: none;

        text-align: center;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &::-webkit-inner-spin-button {
          -webkit-appearance: none;
        }
      }
    }
  }
`
