import { styled } from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 0.8rem;
  flex-direction: column;


  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  > input {

    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};

    border: none;
    border-radius: 0.8rem;

    padding: 1.2rem 1.4rem;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.LIGHT_500};
    }
  }
`
