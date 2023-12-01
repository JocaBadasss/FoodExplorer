import { styled, css, keyframes } from "styled-components"

const shrinkButton = keyframes`
  0% {
    display: unset;
  }



  100% {
   display: none;
    
  }
`

export const Container = styled.button`
  width: 100%;
  height: 4.8rem;

  padding: 1.2rem 2.4rem;

  background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
  transition: all 0.5s ease;
  position: relative;

  ${({ $isloading }) =>
    $isloading &&
    css`
      width: 4.8rem !important;
      border-radius: 50% !important;
      border: 2px solid ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
      background: none !important;
      animation: ${shrinkButton} 0.5s forwards ease-in-out;
    `}

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 0.8rem;

  > svg {
    margin-right: 0.5rem;
  }
`
