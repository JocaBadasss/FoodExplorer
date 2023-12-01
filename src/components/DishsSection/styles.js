import { styled, css } from "styled-components"

export const Container = styled.section`
  display: grid;
  grid-template-areas:
    "h1"
    "content";

  margin-bottom: 2.4rem;

  > h1 {
    grid-area: h1;
    margin-bottom: 2.4rem;
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    font-size: 1.8rem;
  }

  > .Cards {
    grid-area: content;

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
  }

  @media (min-width: 1024px) and (max-width: 1365px) {
    .swiper {
      position: relative;

      > .swiper-button-prev,
      .swiper-button-next {
        z-index: 9999999999999999;

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }
    }

    .swiper::before,
    .swiper::after {
      content: "";
      width: 30%;
      height: 100%;

      position: absolute;
      bottom: 0;

      z-index: 2;
    }

    .swiper::before {
      left: 0;

      background: linear-gradient(
        to left,
        hsla(200, 100%, 3%, 27.25%),
        hsla(200, 100%, 3%, 100%)
      );
    }

    .swiper::after {
      right: -2px;

      background: linear-gradient(
        to right,
        hsla(200, 100%, 3%, 27.25%),
        hsla(200, 100%, 3%, 100%)
      );
    }
  }

  @media (min-width: 1366px) {
    margin-bottom: 4.8rem;

    > h1 {
      padding-left: 2.4rem;
      font-size: 3.2rem;
    }

    > .Cards {
      gap: 2.7rem;
    }

    .swiper {
      .swiper-wrapper {
        &:hover {
          position: relative;
          z-index: 99999;
        }
      }

      > .swiper-button-prev,
      .swiper-button-next {
        height: 0.2rem;
        font-weight: bold;
        z-index: 9999999999999999;

        &::after,
        &::before {
          font-size: 2.75rem;
        }

        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        &:hover {
          transform: scale(1.2, 1.2);
        }
      }

      &::before {
        pointer-events: none;
        ${({ $islastslide }) =>
          $islastslide
            ? css`
                content: "";

                width: 16%;
                height: 100%;

                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;

                border-radius: 0.8rem;

                background: linear-gradient(
                  to left,
                  hsla(200, 100%, 3%, 27.25%),
                  hsla(200, 100%, 3%, 100%)
                );
              `
            : css`
                content: "";

                width: 29%;
                height: 100%;

                position: absolute;
                top: 0;
                left: 0;
                z-index: 2;

                border-radius: 0.8rem;

                background: linear-gradient(
                  to left,
                  hsla(200, 100%, 3%, 27.25%),
                  hsla(200, 100%, 3%, 100%)
                );
              `}

        &:hover {
          cursor: pointer;
        }
      }

      &::after {
        ${({ $islastslide }) =>
          $islastslide
            ? css`
                content: "";
                width: 29%;
                height: 100%;
                position: absolute;
                top: 0;
                right: -0.5px;
                z-index: 2;
                background: linear-gradient(
                  to right,
                  hsla(200, 100%, 3%, 27.25%),
                  hsla(200, 100%, 3%, 100%)
                );
              `
            : css`
                content: "";
                width: 16%;
                height: 100%;
                position: absolute;
                top: 0;
                right: -3px;
                z-index: 2;
                background: linear-gradient(
                  to right,
                  hsla(200, 100%, 3%, 27.25%),
                  hsla(200, 100%, 3%, 100%)
                );
              `}
      }
    }
  }
`
