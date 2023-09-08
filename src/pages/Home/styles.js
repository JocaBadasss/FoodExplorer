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

  padding: 0 1.6rem 0 2.4rem;

  @media (min-width: 1024px) {
    padding: 0 12.3rem 0 12.3rem;
  }
`

export const Article = styled.article`
  @media (min-width: 1024px) {
  }

  /* min-width: 37.7rem; */
  min-width: 28.3rem;
  /* width: 37.7rem; */
  /* width: 28.3rem; */
  height: 12rem;

  margin: 4.4rem auto 6.2rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  position: relative;

  background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

  border-radius: 0.3rem;

  font-family: "Poppins", sans-serif;

  > hgroup {
    padding-right: 2.1rem;

    h1 {
      font-size: 1.8rem;
      font-weight: 600;
    }

    p {
      width: 20.2rem;

      font-size: 1.2rem;
      align-items: flex-end;
    }
  }

  > img {
    /* position: absolute; */
    /* left: -3rem;
    top: -3rem;
    transform: translate(-3rem, -1.5rem); */

    /* width: 65.6rem; */

    width: 19.1rem;
    height: 14.9rem;
    /* width: 14.3rem;
    height: 11.2rem; */

    /* background: url(${macarons}) no-repeat center; */
    /* background-size: clamp(14rem, 12.3rem + 4.7222vw, 19.1rem); */

    position: absolute;
    top: -2.9rem;
    left: -2.9rem;

    /* top: -0.65rem;
    left: -4.9rem; */
  }
`

// export const Article = styled.article`
//   /* max-width: 37.6rem; */
//   height: 12rem;

//   margin: 4.4rem auto 0;

//   display: flex;
//   align-items: center;
//   justify-content: flex-end;

//   position: relative;

//   background: ${({ theme }) => theme.COLORS.GRADIENTS_200};

//   border-radius: 0.3rem;

//   font-family: "Poppins", sans-serif;

//   > div {
//     width: 19.1rem;
//     height: 14.9rem;

//     background: url(${macarons}) no-repeat center;
//     background-size: cover;

//     position: absolute;
//     top: -2.9rem;
//     left: -2.5rem;
//   }

//   > hgroup {
//     padding-right: 2.1rem;

//     h1 {
//       font-size: 1.8rem;
//       font-weight: 600;
//     }

//     p {
//       width: 20.2rem;

//       font-size: 1.2rem;
//       align-items: flex-end;
//     }
//   }

//   > img {
//     /* position: absolute; */
//     left: -3rem;
//     top: -3rem;
//     transform: translate(-3rem, -1.5rem);

//     /* width: 65.6rem; */
//   }
// `

export const MealSection = styled.section`
  display: grid;
  grid-template-areas:
    "h1"
    "content";

  margin-bottom: 2.4rem;

  /* .buttonLeft {
    width: 3.2rem;
    height: 3.2rem;
    background: red;
  } */

  > h1 {
    grid-area: h1;
    margin-bottom: 2.4rem;
    ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
    font-size: 1.8rem;
  }

  > div {
    grid-area: content;

    display: flex;
    gap: 1.6rem;

    overflow-x: scroll;
  }

  @media (min-width: 1024px) {
    margin-bottom: 4.8rem;

    > h1 {
      padding-left: 2.4rem;
      font-size: 3.2rem;
    }

    > div {
      gap: 2.7rem;
      position: relative;

      .buttonLeft {
        position: fixed;

        width: 27.8rem;
        height: 44.8rem;
        /* background: linear-gradient(
          to right,
          hsla(200, 100%, 3%, 27.25%),
          hsla(200, 100%, 3%, 100%)
        ); */

        z-index: 99999;
        top: 0;
        left: 0;
      }
    }
  }
`
