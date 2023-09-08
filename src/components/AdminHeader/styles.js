import { styled } from "styled-components"

export const Container = styled.header`
  grid-area: header;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  padding: 5.6rem 2.8rem 2.4rem;

  button {
    background-color: transparent;

    border: none;
  }

  > a {
    display: contents;
    div {
      height: 2.6rem;

      display: contents;

      > svg {
        width: 16rem;
        height: 2.4rem;
      }
    }

    span {
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }
  }

  @media (min-width: 1024px) {
    height: 10.4rem;

    padding: 2.4rem 12.3rem;

    align-items: center;
    gap: 3.6rem;

    button {
      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    }

    > a {
      display: contents;
      div {
        height: 3rem;

        display: contents;

        > svg {
          width: 29em;
          height: 3rem;
        }
      }
    }
  }
`
export const Cart = styled.button`
  > div {
    width: 3.2rem;
    height: 3.2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    span {
      width: 2rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

      border-radius: 9.9rem;

      position: absolute;

      top: -0.2rem;
      right: -0.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 21.6rem;

    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};

    border-radius: 0.5rem;

    padding: 1.2rem 3.3rem;

    > div {
      width: 100%;
      display: flex;
      align-items: center;

      svg {
        margin-right: 0.8rem;
      }

      p {
        display: unset;
      }
      position: unset;
      display: flex;

      background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

      span {
        width: auto;
        height: auto;

        display: unset;

        background-color: unset;

        position: unset;
      }
    }
  }
`

export const MenuBurger = styled.button`
  position: static;
  z-index: 999999999999999;

  width: 2.6rem;
  height: 1.8rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > div {
    position: relative;

    width: 1.95rem;
    height: 0.2rem;
    border-radius: 99rem;
    transition: all 0.3s linear;
    transform-origin: 1px;

    background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  :first-child {
    transform: ${({ $menuisopen }) =>
      $menuisopen ? "rotate(45deg)" : "rotate(0)"};
  }

  :nth-child(2) {
    opacity: ${({ $menuisopen }) => ($menuisopen ? "0" : "1")};
    transform: ${({ $menuisopen }) =>
      $menuisopen ? "translateX(20px)" : "translateX(0)"};
  }

  :nth-child(3) {
    transform: ${({ $menuisopen }) =>
      $menuisopen ? "rotate(-45deg)" : "rotate(0)"};
  }

  @media (min-width: 1024px) {
    display: none;
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  gap: 1.4rem;

  width: 100%;
  height: 4.8rem;

  padding-left: clamp(1rem, -25.9474rem + 26.3158vw, 10rem);

  background-color: ${({ theme }) => theme.COLORS.DARK_900};
  border-radius: 0.5rem;
  > input {
    background-color: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    width: 100%;
  }
`

export const MenuMobile = styled.section`
  position: absolute;
  /* display: ${({ $menuisopen }) => ($menuisopen ? "unset" : "none")}; */

  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ $menuisopen }) =>
    $menuisopen ? "translateX(0)" : "translateX(-100%)"};

  width: 100%;
  height: 100%;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  background-color: ${({ theme }) => theme.COLORS.DARK_400};

  > header {
    height: 11.2rem;

    display: flex;
    align-items: center;

    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.DARK_700};

    p {
      margin-left: 3.4rem;
      font-size: 2.2rem;
    }
  }

  > div {
    margin: 3.6rem 2.8rem 1.3rem;
    height: 4.8rem;

    button {
      padding: 1rem;
      text-align: left;

      font-size: 2.4rem;
      font-weight: 300;
    }
  }
`
export const Input = styled.div`
  height: 4.8rem;

  padding: 1.2rem 1.4rem;

  display: flex;
  align-items: center;
  gap: 1.4rem;

  border-radius: 0.5rem;

  background-color: ${({ theme }) => theme.COLORS.DARK_900};

  margin-bottom: 3.6rem;

  > input {
    width: 100%;

    background: transparent;

    border: none;

    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
export const SignOut = styled.button`
  background-color: transparent !important;

  @media (min-width: 1024px) {
    display: unset;
  }
`
