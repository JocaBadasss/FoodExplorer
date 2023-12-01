import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;

  padding: 1.6rem 0 1.6rem 0;

  > img {
    width: 7.2rem;
    height: 7.2rem;
    border-radius: 50%;
  }

  > div {
    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_200_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      span {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR}
      }
    }
    > h2 {
      ${({ theme }) => theme.FONTS.POPPINS_100_MEDIUM};
    }

    > button {
      ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }
  }

  @media (min-width: 514px) {
  }
`
