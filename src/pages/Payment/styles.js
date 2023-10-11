import { styled } from "styled-components"

export const Container = styled.div`
  > main {
    padding: 5.6rem 0 3.5rem 3.5rem;

    > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 2.7rem;
    }

    > .wrapper {
      width: 35.5rem;

      > .qrcode {
        height: 24.2rem;

        display: flex;
        justify-content: center;
        align-items: center;

        box-shadow: inset 0 -0.5px 0 1px ${({ theme }) => theme.COLORS.LIGHT_600};

        img {
          width: 16.6rem;
        }

        border-radius: 0 0 0.5rem 0.5rem;
      }

      > .credit-card-wrapper {
        width: 35.5rem;

        padding: 5.6rem 2.7rem;

        box-shadow: inset 0 -0.5px 0 1px ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: 0 0 0.5rem 0.5rem;

        form {
          display: grid;
          gap: 3.7rem;

          ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

          input {
            width: 100%;
            height: 4.8rem;

            padding: 1.2rem;

            border-radius: 0.5rem;
            border: none;
            background: none;
            box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.LIGHT_100};



          }

          label {
            display: grid;
            gap: 0.8rem;
          }

          .inputs-wrapper {
            display: flex;
            gap: 1.7rem;
          }

          button {
            width: 100%;
          }
        }
      }
    }
  }
`

export const PaymentOptions = styled.div`
  display: flex;

  ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};
  color: ${({ theme }) => theme.COLORS.LIGHT_300};

  > button {
    width: 100%;
    height: 8.1rem;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.8rem;

    border: none;

    background: none;

    padding: 1.2rem 1.4rem;

    box-shadow: inset -0.5px 0 0 1px ${({ theme }) => theme.COLORS.LIGHT_600};

    img {
      width: 2.4rem;
    }
  }

  .pix {
    //mudar aqui
    background: ${({ theme }) => theme.COLORS.DARK_800};

    border-top-left-radius: 0.8rem;
  }

  .credit {
    border-top-right-radius: 0.8rem;
  }
`
