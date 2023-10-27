import { loadMercadoPago } from "@mercadopago/sdk-js"
await loadMercadoPago()
const mp = new window.MercadoPago("TEST-9d45c0f8-3c0d-4340-aaf5-11cbb8e06bb2")

import { useState, useEffect } from "react"
import { useAuth } from "../../hooks/auth"
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
import { api } from "../../services/api"

export default function Payment() {
  const [paymentResponse, setPaymentResponse] = useState(null)
  const [paymentStatus, setPaymentStatus] = useState("credit")

  const data = useSelector((rootReducer) => rootReducer.cartReducer.dishs)
  const total = useSelector(selectCartTotal)
  const Width = UseWidth()
  const { user } = useAuth()

  const handlePaymentChange = (payment) => {
    setPaymentStatus(payment)
  }

  useEffect(() => {
    if (paymentStatus !== "credit") {
      return
    }

    const cardForm = mp.cardForm({
      amount: total.replace(",", "."),
      iframe: true,
      form: {
        id: "form-checkout",
        cardNumber: {
          id: "form-checkout__cardNumber",
          placeholder: "0000 0000 0000 0000",
          style: {
            color: "#E1E1E6",
            placeholderColor: "#7C7C8A",
            fontFamily: "Roboto",
          },
          customFonts: [
            {
              src: "https://fonts.googleapis.com/css2?family=Roboto",
            },
          ],
        },
        expirationDate: {
          id: "form-checkout__expirationDate",
          placeholder: "MM/YY",
          style: {
            color: "#E1E1E6",
            placeholderColor: "#7C7C8A",
            fontFamily: "Roboto",
          },
          customFonts: [
            {
              src: "https://fonts.googleapis.com/css2?family=Roboto",
            },
          ],
        },
        securityCode: {
          id: "form-checkout__securityCode",
          placeholder: "Código de segurança",
          style: {
            color: "#E1E1E6",
            placeholderColor: "#7C7C8A",
            fontFamily: "Roboto",
          },
          customFonts: [
            {
              src: "https://fonts.googleapis.com/css2?family=Roboto",
            },
          ],
        },
        cardholderName: {
          id: "form-checkout__cardholderName",
          placeholder: "Titular do cartão",
        },
        issuer: {
          id: "form-checkout__issuer",
          placeholder: "Banco emissor",
        },
        installments: {
          id: "form-checkout__installments",
          placeholder: "Parcelas",
        },
        identificationType: {
          id: "form-checkout__identificationType",
          placeholder: "Tipo de documento",
        },
        identificationNumber: {
          id: "form-checkout__identificationNumber",
          placeholder: "Número do documento",
        },
        cardholderEmail: {
          id: "form-checkout__cardholderEmail",
          placeholder: "E-mail",
        },
      },
      callbacks: {
        onFormMounted: (error) => {
          if (error) return console.warn("Form Mounted handling error: ", error)
          console.log("Form mounted")
        },
        onSubmit: async (event) => {
          event.preventDefault()
          setPaymentStatus("waitingPaymentAprove")

          const {
            paymentMethodId: payment_method_id,
            issuerId: issuer_id,
            cardholderEmail: email,
            amount,
            token,
            installments,
            identificationNumber,
            identificationType,
          } = cardForm.getCardFormData()

          const dishs = data.map((dish) => ({
            id: dish.id,
            quantity: dish.quantity,
          }))

          const paymentDetails = {
            dishs,
            token,
            issuer_id,
            payment_method_id,
            transaction_amount: Number(amount),
            installments: Number(installments),
            description: data.map((dish) => dish.name).join(", "),
            payer: {
              email,
              identification: {
                type: identificationType,
                number: identificationNumber,
              },
            },
          }

          console.log(paymentDetails)

          const response = await api.post("/transactions", paymentDetails)

          if (response.data.status === "approved") {
            setPaymentStatus("paymentAproved")
          }
          if (response.data.status === "rejected") {
            setPaymentStatus("orderCanceled")
          }

          console.log(response.data.status)
        },
        onFetching: (resource) => {
          console.log("Fetching resource: ", resource)

          // Animate progress bar
          const progressBar = document.querySelector(".progress-bar")
          progressBar.removeAttribute("value")

          return () => {
            progressBar.setAttribute("value", "0")
          }
        },
      },
    })

    return () => {
      cardForm.unmount()
    }
  }, [paymentStatus])

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
                <form id="form-checkout">
                  <label htmlFor="checkout__cardNumber">
                    Número do cartão
                    <div
                      id="form-checkout__cardNumber"
                      className="input-div"
                    ></div>
                  </label>

                  <div className="inputs-wrapper">
                    <label htmlFor="form-checkout__expirationDate">
                      Validade
                      <div
                        id="form-checkout__expirationDate"
                        className="input-div"
                      ></div>
                    </label>

                    <label htmlFor="form-checkout__securityCode">
                      CVC
                      <div
                        id="form-checkout__securityCode"
                        className="input-div"
                      ></div>
                    </label>
                  </div>
                  <label
                    htmlFor="checkbox"
                    className="label-checkbox"
                  >
                    Usando o cartão de outra pessoa?
                    <input
                      className="checkbox"
                      type="checkbox"
                      name=""
                      id="checkbox"
                    />
                  </label>
                  <label
                    htmlFor="form-checkout__cardholderName"
                    className="check-hide"
                  >
                    Nome Completo &#40; igual no cartão &#41;
                    <input
                      type="text"
                      id="form-checkout__cardholderName"
                      value={"OTHE"}
                      readOnly
                      className="check-hide"
                    />
                  </label>
                  <label
                    htmlFor="form-checkout__issuer"
                    className="label-hide"
                  >
                    Bandeira
                    <select id="form-checkout__issuer"></select>
                  </label>
                  <label
                    htmlFor="form-checkout__installments"
                    className="label-hide"
                  >
                    Parcelas
                    <select id="form-checkout__installments"></select>
                  </label>
                  <label
                    htmlFor="form-checkout__identificationType"
                    className="check-hide"
                  >
                    Tipo de documento
                    <select
                      id="form-checkout__identificationType"
                      className="check-hide"
                    ></select>
                  </label>
                  <label
                    htmlFor="form-checkout__identificationNumber"
                    className="check-hide"
                  >
                    Número do documento
                    <input
                      type="text"
                      id="form-checkout__identificationNumber"
                      placeholder="000.000.000-00"
                      value={"12345678909"}
                      readOnly
                      className="check-hide"
                    />
                  </label>

                  <label
                    htmlFor="form-checkout__cardholderEmail"
                    className="label-hide"
                  >
                    Email
                    <input
                      type="email"
                      id="form-checkout__cardholderEmail"
                      value={user.email}
                      readOnly
                    />
                  </label>

                  <Button
                    title={"Finalizar pagamento"}
                    id="form-checkout__submit"
                  />

                  <progress
                    value="0"
                    className="progress-bar"
                  >
                    Carregando...
                  </progress>
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
