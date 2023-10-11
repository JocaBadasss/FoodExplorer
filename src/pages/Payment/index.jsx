import { Container, PaymentOptions } from "./styles"
import pix from "../../../public/assets/pix.svg"
import credit from "../../../public/assets/credit.svg"
import qrcode from "../../../public/assets/qrcode.svg"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"

export default function Payment() {
  return (
    <Container>
      <Header />
      <main>
        <h1>Pagamento</h1>
        <div className="wrapper">
          <PaymentOptions>
            <button className="pix">
              <img
                src={pix}
                alt="ícone de um logo do pix"
              />
              PIX
            </button>
            <button className="credit">
              <img
                src={credit}
                alt="ícone de um cartão de crédito"
              />{" "}
              Crédito
            </button>
          </PaymentOptions>
          {/* <div className="qrcode">
            <img
              src={qrcode}
              alt="qrcode"
            />
          </div> */}

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
        </div>
      </main>
    </Container>
  )
}
