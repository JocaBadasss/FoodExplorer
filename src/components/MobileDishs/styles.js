import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  gap: 1.3rem;
  align-items: center;

  padding: 1.6rem 0 1.6rem 0;

  box-shadow: inset 0 -1px 0 ${({ theme }) => theme.COLORS.DARK_1000};

  > img {
    width: 7.2rem;
    height: 7.2rem;
  }

  > div {
    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_200_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 1.2rem;

      cursor: pointer;
    }

    > span {
      ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
      color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }

    > button {
      ${({ theme }) => theme.FONTS.ROBOTO_SMALLEST_REGULAR};
      background: none;
      border: none;
      color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
    }
  }

  .skeleton-img {
    width: 7.2rem;
    height: 7.2rem;
  }

  .skeleton-title {
    width: 20rem;
    height: 1.6rem;
  }

  .skeleton-price {
    width: 6rem;
    height: 1.9rem;
  }

  @media (min-width: 514px) {
    width: 28rem;
  }
`
