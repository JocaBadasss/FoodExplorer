import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { convertPrice, calculateNewPrice } from "../../utils/convertPrice"

import UseWidthHook from "../../hooks/useResize"
import { useFavorites } from "../../hooks/favorites"
import { DishSkeleton } from "./Skeleton"

import { api } from "../../services/api"

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"
import { FiMinus, FiPlus } from "react-icons/fi"
import { PiPencilSimpleLight } from "react-icons/pi"

import { Button } from "../Button"
import { Container, Card, IncludeContainer } from "./styles"
import { addDish, increaseDishQuantity } from "../../redux/cart/slice"
export const Dishs = ({ data, isAdmin, isLoading }) => {
  const [favorite, setFavorite] = useState(false)
  const [quantity, setQuantity] = useState("01")

  const [price, setPrice] = useState(convertPrice(data.price_cents))

  const { addOrRemoveFavorite, checkFavorite } = useFavorites()

  const dispatch = useDispatch()
  const Width = UseWidthHook()
  const navigate = useNavigate()

  const handleAddFavorite = (dishId) => {
    addOrRemoveFavorite(dishId)
    setFavorite(!favorite)
  }

  const handlePlus = () => {
    dispatch(increaseDishQuantity(data.id))
    setQuantity((Number(quantity) + 1).toString().padStart(2, "0"))
    const newPrice = calculateNewPrice({
      dataPrice: data.price_cents,
      statePrice: price,
      operator: "+",
      quantity: quantity,
    })

    setPrice(newPrice)
  }

  const handleMinus = () => {
    if (quantity == 1) return
    setQuantity((Number(quantity) - 1).toString().padStart(2, "0"))
    const newPrice = calculateNewPrice({
      dataPrice: data.price_cents,
      statePrice: price,
      operator: "-",
      quantity: quantity,
    })

    setPrice(newPrice)
  }

  const handleIncludeDishToCart = () => {
    dispatch(addDish({ ...data, quantity }))
    setPrice(convertPrice(data.price_cents))
    setQuantity("01")
  }

  const handleDetails = (dishId) => {
    navigate(`/details/${dishId}`)
  }

  useEffect(() => {
    const favoriteDish = async () => {
      const response = await checkFavorite(data.id)
      const isFavorited = response.length > 0
      setFavorite(isFavorited)
    }

    favoriteDish()
  }, [favorite])
  return (
    <Container $isadmin={isAdmin}>
      {isLoading ? (
        <>{isAdmin ? <DishSkeleton isAdmin={isAdmin} /> : <DishSkeleton />}</>
      ) : (
        <Card $isadmin={isAdmin}>
          {isAdmin ? (
            <button
              role="button"
              className="favorite"
              onClick={() => navigate(`/edit-dish/${data.id}`)}
            >
              <PiPencilSimpleLight size={28} />
            </button>
          ) : (
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
          )}
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
          <span>R$ {price}</span>
          {!isAdmin && (
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
          )}
        </Card>
      )}
    </Container>
  )
}
