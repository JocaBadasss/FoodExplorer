import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;

  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: ${({ $width }) => ($width < 768 ? "11.2rem" : "10.4rem")} auto 7.7rem;
`
export const Main = styled.main`
  grid-area: main;
  display: grid;
  gap: 6.2rem;

  padding-top: ${({ $issearching }) =>
    $issearching ? "3.2rem" : "0"} !important;

  padding: 0 0 0 clamp(2.4rem, 0.1632rem + 5.2632vw, 4.2rem);

  .banner-wrapper {
    padding-left: clamp(0.6rem, 0.0286rem + 1.7857vw, 1.4rem);
  }

  @media (min-width: 768px) {
    padding: 0 clamp(4.3rem, -5.9742rem + 13.3779vw, 12.3rem) 0
      clamp(4.3rem, -5.9742rem + 13.3779vw, 12.3rem);
  }
`

export const Banner = styled.div`
  height: clamp(12rem, 5.6255rem + 14.8936vw, 26rem);

  position: relative;

  margin-top: clamp(4.4rem, -1.0198rem + 12.7524vw, 16.4rem);

  display: flex;
  justify-content: space-around;
  align-items: center;

  border-radius: 0.3rem;

  background: linear-gradient(
    to bottom,
    hsla(198, 61%, 9%, 100%),
    hsla(200, 100%, 5%, 100%)
  );

  > .container {
    width: 15.3rem;
    height: 12rem;
    > img {
      width: clamp(19.1rem, -3.451rem + 53.0612vw, 37.3rem);
      height: clamp(14.9rem, 2.9251rem + 27.9787vw, 41.2rem);

      position: absolute;
      bottom: 0;
      left: -7%;
    }
  }

  > hgroup {
    width: clamp(23rem, 14.3284rem + 20.4038vw, 42.2rem);
    padding-top: 2rem;
    padding-left: 0.2rem;
    font-family: "Poppins", sans-serif;

    h1 {
      font-size: clamp(1.8rem, 0.8788rem + 2.1675vw, 4rem);
      line-height: 140%;
      font-weight: 600;
    }

    p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 320px) and (max-width: 374px) {
    h1 {
      font-size: clamp(1.4rem, 1rem + 1.25vw, 1.6rem) !important;
    }

    p {
      font-size: clamp(0.9rem, 0.7rem + 0.625vw, 1rem) !important;
    }
  }

  @media (min-width: 375px) and (max-width: 425px) {
    h1 {
      font-size: clamp(1.6rem, 0.1rem + 4vw, 1.8rem) !important;
    }

    p {
      font-size: clamp(1.07rem, 0.095rem + 2.6vw, 1.2rem) !important;
    }
  }

  @media (min-width: 320px) and (max-width: 424px) {
    .container {
      > img {
        width: clamp(14.1rem, -3.451rem + 52.0612vw, 37.3rem) !important;
      }
    }
  }

  @media (min-width: 320px) and (max-width: 350px) {
    hgroup {
      h1 {
        font-size: 1.4rem;
      }

      p {
        font-size: 0.95rem;
      }
    }

    img {
      height: clamp(14.9rem, 2.9251rem + 27.9787vw, 41.2rem);
    }
  }

  @media (min-width: 320px) and (max-width: 768px) {
    width: clamp(28rem, 0.2143rem + 86.8304vw, 66.9rem);
  }

  @media (min-width: 768px) {
    margin-right: 0;
    .container {
      > img {
        width: unset;
      }
    }

    > hgroup {
      text-align: center;

      h1 {
        font-weight: 500;
      }
    }
  }

  @media (min-width: 1366px) {
    width: auto;
    justify-content: flex-start;

    margin-top: 16.4rem;

    .container {
      width: clamp(57.8rem, 0.3491rem + 42.0578vw, 81.1rem);
      height: 26rem;

      > img {
        width: unset;
        height: unset;
        left: -4.5%;
      }
    }

    > hgroup {
      width: unset;
      padding: unset;

      h1 {
        ${({ theme }) => theme.FONTS.POPPINS_500_MEDIUM};
      }

      p {
        ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
      }
    }
  }
`
