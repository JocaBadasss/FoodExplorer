import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../../services/api"

import UseWidthHook from "../../../hooks/useResize"

import { ButtonText } from "../../../components/ButtonText"
import { Header } from "../../../components/Header"
import { Footer } from "../../../components/Footer"
import { Button } from "../../../components/Button"

import { Container } from "./styles"

export default function DishDetails() {
  const [quantity, setQuantity] = useState("01")
  const [data, setData] = useState([])

  const Width = UseWidthHook()
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/dishes/${id}`)
      const data = response.data

      setData(data)
    }

    getData()
  }, [])

  return (
    <Container $width={Width}>
      <Header />
      <main>
        <ButtonText
          title="voltar"
          onClick={() => navigate(-1)}
        />
        <div className="content">
          <img
            src={`${api.defaults.baseURL}/files/${data.image}`}
            alt={`Imagem de um prato com ${data.name}`}
          />

          <div className="wrapper">
            <div className="details">
              <h1>{data.name}</h1>
              <p>{data.description}</p>
              <div>
                {data.tags &&
                  data.tags.map((tag) => <span key={tag.id}>{tag.name}</span>)}
              </div>
            </div>

            <Button
              title={"Editar prato"}
              onClick={() => navigate(`/edit-dish/${data.id}`)}
            ></Button>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
