import { styled, css } from "styled-components"

export const Container = styled.section`
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

  > .Cards {
    grid-area: content;

    /* display: flex; */

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
        z-index: 2;

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

        z-index: 2;

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
      .swiper-wrapper {
        &:hover {
          position: relative;
          z-index: 99999;
        }
      }

      > .swiper-button-prev,
      .swiper-button-next {
        z-index: 9999999999999999;

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
                right: 0;
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
                right: 0;
                z-index: 2;
                background: linear-gradient(
                  to right,
                  hsla(200, 100%, 3%, 27.25%),
                  hsla(200, 100%, 3%, 100%)
                );
              `}
      }
    }

    .swiper-wrapper {
      /* gap: 2.7rem; */
    }
  }
`