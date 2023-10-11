import styled from "styled-components"

export const Container = styled.div`


  > main {
    padding: 5.6rem 0 3.5rem 3.5rem;

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 2.7rem;
    }

    > div {
      display: grid;
      position: relative;

      .wrapper {
        height: 62.4rem;
        overflow-y: scroll;
        padding-left: 1px;
      }

      p {
        padding: 1.6rem 0;

        ${({ theme }) => theme.FONTS.POPPINS_200_MEDIUM};
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }

      .button-wrapper {
        display: flex;
        justify-content: flex-end;
        padding-right: 3.5rem;
        > button {
          width: 21.6rem;
        }
      }

      .total-button-wrapper {
        background: #000a0f;
        position: sticky;
        bottom: 0;
        padding-bottom: 2.3rem;
      }
    }
  }

  @media (min-width: 1024px) {
    > main {
      padding: 3.4rem 0 0 12.3rem;
    }
  }
`
