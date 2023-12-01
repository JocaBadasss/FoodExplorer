import { styled } from "styled-components"

export const Container = styled.div`
  height: 100vh;

  display: grid;
  grid-template-areas:
    "header"
    "main"
    "footer";

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

          #form-checkout {
            display: flex;
            flex-direction: column;
            max-width: 60rem;
            justify-content: center;
            gap: 3.7rem;

            ${({ theme }) => theme.FONTS.ROBOTO_SMALL_REGULAR};

            input,
            .input-div,
            select {
              width: 100%;
              height: 4.8rem;
              color: ${({ theme }) => theme.COLORS.LIGHT_100};

              padding: 1.2rem;

              border-radius: 0.5rem;
              border: none;
              background: none;
              box-shadow: 0 0 0 1px ${({ theme }) => theme.COLORS.LIGHT_100};
            }

            .label-checkbox {
              display: flex;
            }

            .checkbox {
              width: unset;
              height: unset;
              box-shadow: unset;
            }

            label {
              display: grid;
              gap: 0.8rem;
              width: 100%;
            }

            .inputs-wrapper {
              display: flex;
              justify-content: center;
              gap: 1.7rem;
            }

            button {
              width: 100%;
            }

            #form-checkout__installments,
            #form-checkout__cardholderEmail,
            .label-hide {
              display: none;
            }

            .check-hide {
              display: none;
            }

            .progress-bar {
              width: 100%;
            }

            .progress {
              background: rgba(255, 255, 255, 0.1);
              justify-content: flex-start;
              border-radius: 100px;
              align-items: center;
              position: relative;
              padding: 0 5px;
              display: flex;
              height: 40px;
              width: 500px;
            }

            .progress-value {
              animation: load 3s normal forwards;
              box-shadow: 0 10px 40px -10px #fff;
              border-radius: 100px;
              background: #fff;
              height: 30px;
              width: 0;
            }

            @keyframes load {
              0% {
                width: 0;
              }
              100% {
                width: 68%;
              }
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

  @media (min-width: 1024px) and (max-width: 1300px) {
    main {
      padding-left: 4.3rem !important;
      padding-right: 3.6rem !important;
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

          overflow-y: scroll;

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
