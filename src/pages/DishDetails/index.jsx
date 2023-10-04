import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"

import UseWidthHook from "../../hooks/useResize"

import { FiMinus } from "react-icons/fi"
import { BsPlusLg } from "react-icons/bs"
import { PiReceiptBold } from "react-icons/pi"

import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { Container, IncludeContainer } from "./styles"

export default function DishDetails() {
  const [quantity, setQuantity] = useState("01")
  const [data, setData] = useState([])

  const Width = UseWidthHook()
  const navigate = useNavigate()
  const { id } = useParams()

  const handlePlus = () => {
    setQuantity((Number(quantity) + 1).toString().padStart(2, "0"))
  }
  const handleMinus = () => {
    if (quantity == 1) return
    setQuantity((Number(quantity) - 1).toString().padStart(2, "0"))
  }

  const handleIncludeDishToCart = () => {
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || []

    const existingDishIndex = existingCart.findIndex(
      (cart) => cart.id === data.id
    )

    if (existingDishIndex >= 0) {
      existingCart[existingDishIndex].quantity += Number(quantity)
    } else {
      existingCart.push({
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: Number(quantity),
      })
    }
    sessionStorage.setItem("cart", JSON.stringify(existingCart))

    setQuantity("01")
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/dishes/${id}`)
      const data = response.data

      setData(data)
    }

    getData()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <ButtonText
          title="voltar"
          onClick={() => navigate(-1)}
        />
        <div className="content">
          <img
            src={`${api.defaults.baseURL}/files/${data.image}`}
            alt="Imagem de um prato com ravanello"
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
            <IncludeContainer>
              <div>
                <button onClick={handleMinus}>
                  <FiMinus size={28} />
                </button>
                <input
                  type="number"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
                <button onClick={handlePlus}>
                  <BsPlusLg size={28} />
                </button>
              </div>
              <Button
                {...(Width < 768 ? { icon: PiReceiptBold } : {})}
                {...(Width < 768
                  ? { title: ` pedir ∙ R$ ${data.price}` }
                  : { title: ` incluir ∙ R$ ${data.price}` })}
                onClick={() => handleIncludeDishToCart()}
              ></Button>
            </IncludeContainer>
          </div>
        </div>
      </main>
      <Footer />
    </Container>
  )
}
