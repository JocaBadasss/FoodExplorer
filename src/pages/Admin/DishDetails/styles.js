import { styled } from "styled-components"

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: ${({ $width }) => ($width < 768 ? "11.2rem" : "10.4rem")} auto 7.7rem;
  > main {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    padding: clamp(1.6rem, 1.265rem + 0.7882vw, 2.4rem)
      clamp(5.6rem, 2.6643rem + 6.9075vw, 12.1rem) 3.3rem;

    .content {
      width: 100%;
      margin-bottom: clamp(2rem, -4.0972rem + 14.3464vw, 15.5rem);

      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      align-items: center;

      img {
        width: clamp(26.4rem, 20.7092rem + 13.39vw, 39rem);
        height: clamp(26.4rem, 20.7092rem + 13.39vw, 39rem);
      }

      .wrapper {
        display: flex;
        flex-direction: column;
        gap: 4.8rem;

        > button {
          width: ${({ $width }) => $width > 768 && `13.1rem`};
          border-radius: 0.5rem;
        }
      }

      .details {
        display: flex;
        flex-direction: column;
        gap: 2.4rem;

        > h1 {
          font-family: "Poppins", sans-serif;
          font-size: 2.7rem;
          font-weight: 500;
          line-height: 140%;
          text-align: center;
        }

        > p {
          font-family: "Poppins", sans-serif;
          font-weight: 400;
          font-size: 1.6rem;
          line-height: 140%;
          text-align: center;
        }

        > div {
          display: flex;
          gap: 2.4rem;
          flex-wrap: wrap;
          justify-content: center;
          flex-basis: 33%;

          span {
            padding: 0.4rem 0.8rem;

            border-radius: 0.5rem;

            ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
            background-color: ${({ theme }) => theme.COLORS.DARK_1000};
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    > main {
      gap: 4.2rem;

      .content {
        flex-direction: row;
        gap: 4.8rem;

        .details {
          > div {
            justify-content: flex-start;
          }

          > h1 {
            ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            text-align: left;
          }

          p {
            ${({ theme }) => theme.FONTS.POPPINS_300_REGULAR};
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            text-align: left;
          }
        }
      }
    }
  }
`
