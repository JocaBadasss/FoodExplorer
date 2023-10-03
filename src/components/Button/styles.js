import { styled } from "styled-components"

export const Container = styled.button`
  height: 4.8rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.8rem;

  > svg {
    margin-right: 0.5rem;
  }
`
