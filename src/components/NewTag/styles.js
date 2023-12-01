import { styled } from "styled-components"
import x from "../../assets/X.svg"
import plus from "../../assets/Plus.svg"

export const Container = styled.div`
  height: 3.2rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.6rem;

  background-color: ${({ $isnew, theme }) =>
    $isnew ? "transparent" : theme.COLORS.LIGHT_600};

  border-radius: 0.8rem;
  border: ${({ $isnew, theme }) =>
    $isnew ? `2px dashed ${theme.COLORS.LIGHT_500}` : "none"};

  > input {
    width: ${({ $isnew }) => ($isnew ? "6.8rem" : "7rem")};

    background-color: transparent;
    border: none;

    ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
  }

  > button {
    width: 0.8rem;
    height: 0.8rem;
    background-color: transparent;
    border: none;

    svg {
      display: flex;
      align-items: center;
      color: ${({ $isnew, theme }) =>
        $isnew ? theme.COLORS.LIGHT_500 : theme.COLORS.LIGHT_100};
    }

    cursor: pointer;
  }
`

export const X = styled.svg`
  width: 0.8rem;
  height: 0.8rem;
  background: url(${x}) no-repeat center;
`

export const Plus = styled.svg`
  width: 0.8rem;
  height: 0.8rem;
  background: url(${plus}) no-repeat center;
`
