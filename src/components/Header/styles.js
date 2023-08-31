import { styled } from "styled-components"

export const Container = styled.header`
  padding: 5.6rem 2.8rem 2.4rem;

  display: flex;
  justify-content: space-around;
  gap: 1.6rem;

  button {
    border: none;
    background-color: transparent;
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
  }

  background-color: ${({ theme }) => theme.COLORS.DARK_700};

  @media (min-width: 1024px) {
    height: 10.4rem;

    padding: 2.4rem 12.3rem;

    button {
      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    }

    > a {
      display: contents;
      div {
        height: 3rem;
        display: contents;

        > svg {
          width: 19.7rem;
          height: 3rem;
        }
      }
    }
  }
`
export const Cart = styled.button`
  > div {
    position: relative;
    display: flex;

    width: 3.2rem;
    height: 3.2rem;

    p {
      display: none;
    }

    span {
      width: 2rem;
      height: 2rem;

      display: flex;
      align-items: center;
      justify-content: center;

      border-radius: 9.9rem;

      background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

      position: absolute;

      top: -0.4rem;
      right: -0.5rem;
    }
  }

  @media (min-width: 1024px) {
    width: 21.6rem;

    background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

    background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
    ${({ theme }) => theme.FONTS.POPPINS_100};

    border-radius: 0.5rem;

    display: flex;
    align-items: center;

    padding: 1.2rem 3.3rem;

    > div {
      width: 100%;
    
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

export const Menu = styled.button`
  @media (min-width: 1024px) {
    display: none;
  }
`

export const Search = styled.input`
  width: 100%;


`
