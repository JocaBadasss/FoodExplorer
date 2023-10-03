import { useState } from "react"

import { FiMinus } from "react-icons/fi"
import { BsPlusLg } from "react-icons/bs"
import { PiReceiptBold } from "react-icons/pi"

import UseWidthHook from "../../hooks/useResize"

import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"

import { Container, IncludeContainer } from "./styles"
import { api } from "../../services/api"

export default function DishDetails() {
  const [quantity, setQuantity] = useState("01")

  const Width = UseWidthHook()

  const handlePlus = () => {
    setQuantity((parseInt(quantity, 10) + 1).toString().padStart(2, "0"))
  }
  const handleMinus = () => {
    if (quantity == 1) return
    setQuantity((parseInt(quantity, 10) - 1).toString().padStart(2, "0"))
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

    setQuantity(1)
  }

  const data = {
    id: 12,
    name: "Salada Ravanello",
    category: "Refeições",
    description:
      "Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.",
    price: "25,00",
    image: "85b2d278c397f7b1d75e-name=ravanello, size=400.png",
    tags: ["alface", "cebola", "pão naan", "pepino", "rabanete", "tomate"],
    user_id: 2,
    created_at: "2023-09-25 14:45:06",
  }

  return (
    <Container>
      <Header />
      <main>
        <ButtonText
          className="back-button"
          title="Voltar"
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
                  data.tags.map((tag) => <span key={tag}>{tag}</span>)}
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
