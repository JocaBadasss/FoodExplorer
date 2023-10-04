import { useEffect, useState } from "react"

import { api } from "../../services/api"

import UseWidth from "../../hooks/useResize"

import { Header } from "../../components/Header"
import { FavoriteDishs } from "../../components/FavoriteDishs"

import { Container } from "./styles"
export default function CheckOut() {
  const [data, setData] = useState([])

  const cart = JSON.parse(sessionStorage.getItem("cart")) || []

  const cartDishesId = cart.map((dish) => {
    return { id: dish.id, quantity: dish.quantity }
  })

  console.log(cartDishesId)
  const Width = UseWidth()

  useEffect(() => {
    async function getData() {
      const response = await api.get("/payment", cartDishesId)
      const data = response.data

      setData(data)
    }
  })

  return (
    <Container $width={Width}>
      <Header />
      <main>
        <h1>Meus favoritos</h1>
        <div>
          {data &&
            data.map((dish) => (
              <FavoriteDishs
                key={dish.id}
                data={dish}
              />
            ))}
        </div>
      </main>
    </Container>
  )
}
