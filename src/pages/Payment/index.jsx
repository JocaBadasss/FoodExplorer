import { useState } from "react"

import { Container, PaymentOptions } from "./styles"
import pix from "../../assets/pix.svg"
import credit from "../../assets/credit.svg"
import qrcode from "../../assets/qrcode.svg"

import UseWidth from "../../hooks/useResize"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { CartDishs } from "../../components/CartDishs"

export default function Payment() {
  const data = [
    {
      id: 1,
      name: "Salada Ravanello",
      category: "Refeições",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price_cents: 4997,
      image: "d478fb98a206ed200c76-name=ravanello, size=400.png",
      user_id: 2,
      created_at: "2023-10-06 14:25:09",
      quantity: 2,
    },
    {
      id: 2,
      name: "Salada Ravanello",
      category: "Refeições",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price_cents: 4997,
      image: "d478fb98a206ed200c76-name=ravanello, size=400.png",
      user_id: 2,
      created_at: "2023-10-06 14:25:09",
      quantity: 2,
    },
    {
      id: 3,
      name: "Salada Ravanello",
      category: "Refeições",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price_cents: 4997,
      image: "d478fb98a206ed200c76-name=ravanello, size=400.png",
      user_id: 2,
      created_at: "2023-10-06 14:25:09",
      quantity: 2,
    },
    {
      id: 4,
      name: "Salada Ravanello",
      category: "Refeições",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price_cents: 4997,
      image: "d478fb98a206ed200c76-name=ravanello, size=400.png",
      user_id: 2,
      created_at: "2023-10-06 14:25:09",
      quantity: 2,
    },
    {
      id: 5,
      name: "Salada Ravanello",
      category: "Refeições",
      description:
        "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim",
      price_cents: 4997,
      image: "d478fb98a206ed200c76-name=ravanello, size=400.png",
      user_id: 2,
      created_at: "2023-10-06 14:25:09",
      quantity: 2,
    },
  ]

  const [togglePayment, setTogglePayment] = useState(true)
  const Width = UseWidth()

  const handlePixClick = () => {
    setTogglePayment(true)
  }

  const handleCreditClick = () => {
    setTogglePayment(false)
  }

  return (
    <Container $width={Width}>
      <Header />
      <main>
        <div className="order-wrapper">
          <h1>Meu pedido</h1>

          <div>
            <div className="dishs-wrapper">
              {data &&
                data.map((dish) => (
                  <CartDishs
                    key={dish.id}
                    data={dish}
                  />
                ))}
            </div>
            <div className="total-button-wrapper">
              <p>Total: R$ </p>
            </div>
          </div>
        </div>

        <div className="payment-wrapper">
          <h1>Pagamento</h1>
          <div className="wrapper">
            <PaymentOptions $pix={togglePayment.toString()}>
              <button
                onClick={() => handlePixClick()}
                className="pix"
              >
                <img
                  src={pix}
                  alt="ícone de um logo do pix"
                />
                PIX
              </button>
              <button
                onClick={() => handleCreditClick()}
                className="credit"
              >
                <img
                  src={credit}
                  alt="ícone de um cartão de crédito"
                />{" "}
                Crédito
              </button>
            </PaymentOptions>
            {togglePayment ? (
              <div className="qrcode">
                <img
                  src={qrcode}
                  alt="qrcode"
                />
              </div>
            ) : (
              <div className="credit-card-wrapper">
                <form>
                  <label htmlFor="credit-number">
                    Número do cartão
                    <input
                      type="text"
                      id="credit-number"
                      placeholder="0000 0000 0000 0000"
                    />
                  </label>

                  <div className="inputs-wrapper">
                    <label htmlFor="credit-date">
                      Validade
                      <input
                        type="text"
                        id="credit-date"
                        placeholder="04/25"
                      />
                    </label>

                    <label htmlFor="credit-cvc">
                      CVC
                      <input
                        type="text"
                        id="credit-cvc"
                        placeholder="000"
                      />
                    </label>
                  </div>

                  <Button title={"Finalizar pagamento"} />
                </form>
              </div>
            )}
          </div>
        </div>

        {/* <h1>Pagamento</h1>
        <div className="wrapper">
          <PaymentOptions $pix={togglePayment.toString()}>
            <button
              onClick={() => handlePixClick()}
              className="pix"
            >
              <img
                src={pix}
                alt="ícone de um logo do pix"
              />
              PIX
            </button>
            <button
              onClick={() => handleCreditClick()}
              className="credit"
            >
              <img
                src={credit}
                alt="ícone de um cartão de crédito"
              />{" "}
              Crédito
            </button>
          </PaymentOptions>
          {togglePayment ? (
            <div className="qrcode">
              <img
                src={qrcode}
                alt="qrcode"
              />
            </div>
          ) : (
            <div className="credit-card-wrapper">
              <form>
                <label htmlFor="credit-number">
                  Número do cartão
                  <input
                    type="text"
                    id="credit-number"
                    placeholder="0000 0000 0000 0000"
                  />
                </label>

                <div className="inputs-wrapper">
                  <label htmlFor="credit-date">
                    Validade
                    <input
                      type="text"
                      id="credit-date"
                      placeholder="04/25"
                    />
                  </label>

                  <label htmlFor="credit-cvc">
                    CVC
                    <input
                      type="text"
                      id="credit-cvc"
                      placeholder="000"
                    />
                  </label>
                </div>

                <Button title={"Finalizar pagamento"} />
              </form>
            </div>
          )}
        </div> */}
      </main>
      <Footer />
    </Container>
  )
}
