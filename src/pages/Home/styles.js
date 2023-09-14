import { styled } from "styled-components"

import macarons from "../../assets/macarons.png"

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

  padding: 0 0 0 2.4rem;

  @media (min-width: 1024px) {
    padding: 0 12.3rem 0 12.3rem;
  }
`
export const MealSection = styled.section`
  display: grid;
  grid-template-areas:
    "h1"
    "content";

  margin-bottom: 2.4rem;
  position: relative;

  > h1 {
    grid-area: h1;
    margin-bottom: 2.4rem;
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    font-size: 1.8rem;
  }

  > div {
    grid-area: content;

    display: flex;

    overflow-x: hidden;
  }

  .swiper {
    > .swiper-button-prev,
    .swiper-button-next {
      z-index: 9999999999999999;

      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .swiper {
      > .swiper-button-prev,
      .swiper-button-next {
        z-index: 9999999999999999;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }

      &::before {
        content: "";

        width: 32%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 99999;

        border-radius: 0.8rem;

        background: linear-gradient(
          to left,
          hsla(200, 100%, 3%, 27.25%),
          hsla(200, 100%, 3%, 100%)
        );
      }

      &::after {
        content: "";

        width: clamp(27rem, 3rem + 31.25vw, 35rem);
        height: 46.2rem;

        position: absolute;
        top: 0;
        right: -3.6%;

        z-index: 99999;

        background: linear-gradient(
          to right,
          hsla(200, 100%, 3%, 27.25%),
          hsla(200, 100%, 3%, 100%)
        );
      }
    }
  }

  @media (min-width: 1024px) {
    margin-bottom: 4.8rem;

    > h1 {
      padding-left: 2.4rem;
      font-size: 3.2rem;
    }

    > .Cards {
      gap: 2.7rem;
    }

    .swiper {
      > .swiper-button-prev,
      .swiper-button-next {
        z-index: 9999999999999999;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }

      &::before {
        content: "";

        width: 29%;
        height: 100%;

        position: absolute;
        top: 0;
        left: 0;
        z-index: 99999;

        border-radius: 0.8rem;

        background: linear-gradient(
          to left,
          hsla(200, 100%, 3%, 27.25%),
          hsla(200, 100%, 3%, 100%)
        );
      }

      &::after {
        content: "";

        width: ${({ $width }) =>
          $width >= 1024 && $width <= 1365
            ? "clamp(27rem, 3.0468rem + 23.3918vw, 35rem);"
            : "23rem"};
        height: 46.2rem;

        position: absolute;
        top: 0;
        right: -3.6%;

        z-index: 99999;

        background: linear-gradient(
          to right,
          hsla(200, 100%, 3%, 27.25%),
          hsla(200, 100%, 3%, 100%)
        );
      }
    }

    .swiper-wrapper {
      /* gap: 2.7rem; */
    }
  }
`

export const Banner = styled.div`
  /* width: clamp(37.6rem, 3.7243rem + 79.1489vw, 112rem); */
  height: clamp(12rem, 5.6255rem + 14.8936vw, 26rem);

  position: relative;

  margin: clamp(4.4rem, -1.0198rem + 12.7524vw, 16.4rem) 1.6rem 0 0;

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

  @media (min-width: 1366px) {
    width: auto;
    justify-content: flex-start;

    margin-top: 16.4rem;

    .container {
      width: 57.8rem;
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
