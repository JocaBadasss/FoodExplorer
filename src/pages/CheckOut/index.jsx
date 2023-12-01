import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { enqueueSnackbar } from "notistack"

import { selectCartTotal } from "../../redux/cart/selectors"
import UseWidth from "../../hooks/useResize"

import { api } from "../../services/api"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { CartDishs } from "../../components/CartDishs"

import { Container } from "./styles"
export default function CheckOut() {
  const data = useSelector((rootReducer) => rootReducer.cartReducer.dishs)
  const total = useSelector(selectCartTotal)

  const Width = UseWidth()
  const navigate = useNavigate()

  const handleForwardClick = () => {
    if (data.length < 1) {
      enqueueSnackbar("Seu carrinho esta vazio", {
        variant: "error",
        autoHideDuration: 1000,
      })
      return
    }

    navigate("/checkout/payment")
  }

  return (
    <Container $width={Width}>
      <Header />
      <main>
        <h1>Meu pedido</h1>
        <div>
          <div className="wrapper">
            {data &&
              data.map((dish) => (
                <CartDishs
                  key={dish.id}
                  data={dish}
                />
              ))}
          </div>
          <div className="total-button-wrapper">
            <p>Total: R$ {total}</p>
            <div className="button-wrapper">
              <Button
                title="Avançar"
                onClick={() => handleForwardClick()}
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
