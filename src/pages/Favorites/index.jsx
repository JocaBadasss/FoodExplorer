import { useEffect, useState } from "react"

import { api } from "../../services/api"

import UseWidth from "../../hooks/useResize"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { FavoriteDishs } from "../../components/FavoriteDishs"

import { Container } from "./styles"
export default function Favorites() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const Width = UseWidth()

  useEffect(() => {
    async function getData() {
      const response = await api.get("/favorites")
      const data = response.data

      setData(data)

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    getData()
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
                isLoading={isLoading}
              />
            ))}
        </div>
      </main>
      <Footer />
    </Container>
  )
}
