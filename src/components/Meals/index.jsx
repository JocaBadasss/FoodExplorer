import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import UseWidthHook from "../../hooks/useResize"
import { useFavorites } from "../../hooks/favorites"

import { api } from "../../services/api"

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"
import { FiMinus, FiPlus } from "react-icons/fi"

import { Button } from "../Button"

import { Container, Card, IncludeContainer } from "./styles"

export const Meals = ({ data }) => {
  const [favorite, setFavorite] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const { addOrRemoveFavorite, checkFavorite } = useFavorites()

  const Width = UseWidthHook()
  const navigate = useNavigate()

  const handleAddFavorite = (dishId) => {
    addOrRemoveFavorite(dishId)
    setFavorite(!favorite)
  }
  const handlePlus = () => {
    setQuantity(quantity + 1)
  }
  const handleMinus = () => {
    if (quantity === 1) return
    setQuantity(quantity - 1)
  }

  const handleIncludeDishToCart = () => {
    const existingCart = JSON.parse(sessionStorage.getItem("cart")) || []

    const existingDishIndex = existingCart.findIndex(
      (cart) => cart.id === data.id
    )

    if (existingDishIndex >= 0) {
      existingCart[existingDishIndex].quantity += quantity
    } else {
      existingCart.push({
        id: data.id,
        name: data.name,
        price: data.price,
        quantity: quantity,
      })
    }
    sessionStorage.setItem("cart", JSON.stringify(existingCart))

    setQuantity(1)
  }

  const handleDetails = (dishId) => {
    navigate(`/details/${dishId}`)
  }

  useEffect(() => {
    const favoriteMeal = async () => {
      const response = await checkFavorite(data.id)
      const isFavorited = response.length > 0

      setFavorite(isFavorited)
    }

    favoriteMeal()
  }, [favorite])

  return (
    <Container>
      <Card>
        <button
          role="button"
          className="favorite"
          onClick={() => handleAddFavorite(data.id)}
        >
          {favorite ? (
            <MdFavorite size={28} />
          ) : (
            <MdOutlineFavoriteBorder size={28} />
          )}
        </button>
        <img
          src={`${api.defaults.baseURL}/files/${data.image}`}
          alt={`Imagem de um prato com ${data.name}`}
        />
        <button
          role="button"
          className="button-title"
          onClick={() => handleDetails(data.id)}
        >
          <h1> {data.name} &gt; </h1>
        </button>
        {Width < 768 ? <></> : <p>{data.description}</p>}
        <span>R$ {data.price}</span>
        <IncludeContainer>
          <div>
            <button onClick={handleMinus}>
              <FiMinus size={24} />
            </button>
            <input
              type="number"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
            <button onClick={handlePlus}>
              <FiPlus size={24} />
            </button>
          </div>
          <Button
            title="Incluir"
            onClick={() => handleIncludeDishToCart()}
          />
        </IncludeContainer>
      </Card>
    </Container>
  )
}
