import styled from "styled-components"

export const Container = styled.div`
  > main {
    height: 100vh;

    padding: 5.6rem 0 3.5rem 3.5rem;

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 2.7rem;
    }

    > div {
      display: flex;
      flex-wrap: wrap;
      gap: ${({ $width }) => ($width < 475 ? "none" : "4.8rem")};
    }
  }

  @media (min-width: 1024px) {
    > main {
      padding: 3.4rem 0 0 12.3rem;
    }
  }
`
