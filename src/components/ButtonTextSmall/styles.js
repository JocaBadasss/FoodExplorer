import { styled } from "styled-components"

export const Container = styled.button`
  width: 100%;

  background: none;
  border: none;

  display: flex;
  align-items: center;

  font-family: "Poppins", sans-serif;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 140%;
  color: ${({ theme }) => theme.COLORS.LIGHT_300};
`
