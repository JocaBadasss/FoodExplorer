import {
  initMercadoPago,
  CardNumber,
  SecurityCode,
  ExpirationDate,
  getIdentificationTypes,
  getPaymentMethods,
  getIssuers,
  getInstallments,
} from "@mercadopago/sdk-react/"
import { createCardToken } from "@mercadopago/sdk-react/coreMethods"
initMercadoPago("TEST-b21b3b2e-2dc7-4b74-ac85-343bcc72f2ac")

import { useState } from "react"

import { useSelector } from "react-redux"

import { selectCartTotal } from "../../redux/cart/selectors"

import pix from "../../assets/pix.svg"
import credit from "../../assets/credit.svg"
import qrcode from "../../assets/qrcode.svg"
import {
  PiClockBold,
  PiCheckCircleBold,
  PiForkKnifeBold,
  PiXCircleBold,
} from "react-icons/pi"

import UseWidth from "../../hooks/useResize"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { CartDishs } from "../../components/CartDishs"

import { Container, PaymentOptions } from "./styles"

export default function Payment() {
  const data = useSelector((rootReducer) => rootReducer.cartReducer.dishs)
  const total = useSelector(selectCartTotal)

  const [paymentStatus, setPaymentStatus] = useState("pix")
  const Width = UseWidth()

  const handlePaymentChange = (payment) => {
    setPaymentStatus(payment)
  }

  const createcardToken = async (e) => {
    e.preventDefault()
    const response = await createCardToken({
      cardNumber: "5031433215406351",
      cardholderName: "APRO",
      cardExpirationMonth: "11",
      cardExpirationYear: "2025",
      securityCode: "123",
      identificationType: "CPF",
      identificationNumber: "12345678912",
    })
    console.log("Card Token Response = ", response)
  }

  return (
    <Container $width={Width}>
      <Header />
      <main>
        {Width < 768 ? (
          <></>
        ) : (
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
                <p>Total: R$ {total} </p>
              </div>
            </div>
          </div>
        )}

        <div className="payment-wrapper">
          <h1>Pagamento</h1>
          <div className="wrapper">
            <PaymentOptions $paymentstatus={paymentStatus}>
              <button
                onClick={() => handlePaymentChange("pix")}
                className="pix"
              >
                <img
                  src={pix}
                  alt="ícone de um logo do pix"
                />
                PIX
              </button>
              <button
                onClick={() => handlePaymentChange("credit")}
                className="credit"
              >
                <img
                  src={credit}
                  alt="ícone de um cartão de crédito"
                />{" "}
                Crédito
              </button>
            </PaymentOptions>
            {paymentStatus === "pix" && (
              <div className="qrcode">
                <img
                  src={qrcode}
                  alt="qrcode"
                />
              </div>
            )}
            {paymentStatus === "credit" && (
              <div className="credit-card-wrapper">
                <form>
                  <label htmlFor="credit-number">
                    Número do cartão
                    <input
                      type="number"
                      id="credit-number"
                      placeholder="0000 0000 0000 0000"
                    />
                  </label>
                  <div className="inputs-wrapper">
                    <label htmlFor="credit-date">
                      Validade
                      <input
                        type="number"
                        id="credit-date"
                        placeholder="04/25"
                      />
                    </label>

                    <label htmlFor="credit-cvc">
                      CVC
                      <input
                        type="number"
                        id="credit-cvc"
                        placeholder="000"
                      />
                    </label>
                  </div>

                  <Button
                    onClick={(e) => createcardToken(e)}
                    title={"Finalizar pagamento"}
                  />
                </form>
              </div>
            )}
            {paymentStatus === "orderCanceled" && (
              <div className="payment-state-wrapper">
                <div>
                  <PiXCircleBold size={96} />
                  <p>Pedido cancelado.</p>
                </div>
              </div>
            )}
            {paymentStatus === "waitingPaymentAprove" && (
              <div className="payment-state-wrapper">
                <div>
                  <PiClockBold size={96} />
                  <p>Aguardando pagamento</p>
                </div>
              </div>
            )}
            {paymentStatus === "paymentAproved" && (
              <div className="payment-state-wrapper">
                <div>
                  <PiCheckCircleBold size={96} />
                  <p>Pagamento aprovado!</p>
                </div>
              </div>
            )}
            {paymentStatus === "orderDelivered" && (
              <div className="payment-state-wrapper">
                <div>
                  <PiForkKnifeBold size={96} />
                  <p>Pedido entregue!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
