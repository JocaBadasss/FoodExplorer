import { styled } from "styled-components"

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";
  grid-template-rows: ${({ $width }) => ($width < 768 ? "11.2rem" : "10.4rem")} auto 7.7rem;

  > main {
    padding: 5.6rem 4rem 15.2rem 3.5rem;
    grid-area: main;

    > div > h1 {
      ${({ theme }) => theme.FONTS.POPPINS_400_MEDIUM};
      color: ${({ theme }) => theme.COLORS.LIGHT_300};

      margin-bottom: 2.7rem;
    }

    > div {
      > .wrapper {
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
          padding: 5.6rem 2.7rem;

          box-shadow: inset 0 -0.5px 0 1px ${({ theme }) => theme.COLORS.LIGHT_600};
          border-radius: 0 0 0.5rem 0.5rem;

          form {
            display: grid;
            justify-content: center;
            gap: 3.7rem;

            ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

            input {
              width: 100%;
              height: 4.8rem;
              color: ${({ theme }) => theme.COLORS.LIGHT_100};

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
              justify-content: center;
              gap: 1.7rem;
            }

            button {
              width: 100%;
            }
          }
        }

        > .payment-state-wrapper {
          height: 35.3rem;

          display: flex;
          justify-content: center;
          align-items: center;

          box-shadow: inset 0 -0.5px 0 1px ${({ theme }) => theme.COLORS.LIGHT_600};
          border-radius: 0 0 0.5rem 0.5rem;

          > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 2.4rem;

            svg {
              color: ${({ theme }) => theme.COLORS.LIGHT_600};
            }

            p {
              ${({ theme }) => theme.FONTS.ROBOTO_BIG_BOLD};
              color: ${({ theme }) => theme.COLORS.LIGHT_700};
            }
          }
        }
      }
    }
  }

  @media (min-width: 768px) {
    > main {
      display: flex;
      justify-content: space-between;
      > div {
        > .wrapper {
          width: 40rem;
        }
      }

      .dishs-wrapper {
        padding-right: 4rem;
      }
    }
  }

  @media (min-width: 1024px) {
    > main {
      display: flex;
      justify-content: space-between;

      padding-left: 12.3rem;
      padding-right: 19.6rem;

      .order-wrapper {
        > div {
          width: 44.4rem;
        }
        .dishs-wrapper {
          max-height: 41.6rem;

          padding-right: 4rem;

          div {
          }
        }

        .total-button-wrapper {
          padding: 1.6rem 0;
          ${({ theme }) => theme.FONTS.POPPINS_200_MEDIUM};
        }
      }

      > div {
        > .wrapper {
          width: clamp(35.5rem, 28.8779rem + 17.6589vw, 53rem);

          > .qrcode {
            height: 36.4rem;

            img {
              width: 27rem;
            }
          }

          > .credit-card-wrapper {
            padding: 5.9rem 9.1rem 4.8rem;
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
    background: ${({ $paymentstatus, theme }) =>
      $paymentstatus === "pix" ? theme.COLORS.DARK_800 : "unset"};

    border-top-left-radius: 0.8rem;
  }

  .credit {
    background: ${({ $paymentstatus, theme }) =>
      $paymentstatus === "credit" ? theme.COLORS.DARK_800 : "unset"};

    border-top-right-radius: 0.8rem;
  }
`