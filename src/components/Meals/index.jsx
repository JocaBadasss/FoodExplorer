import { useEffect, useState } from "react"

import UseWidthHook from "../../hooks/useResize"
import { useFavorites } from "../../hooks/favorites"

import { api } from "../../services/api"

import { MdOutlineFavoriteBorder, MdFavorite } from "react-icons/md"
import { FiMinus, FiPlus } from "react-icons/fi"

import { Button } from "../Button"

import { Container, Card, IncludeContainer } from "./styles"

export const Meals = ({ data }) => {
  const [favorite, setFavorite] = useState(false)
  const [favorites, setFavorites] = useState([])

  const { addOrRemoveFavorite, checkFavorite } = useFavorites()

  const Width = UseWidthHook()

  const handleAddFavorite = (mealId) => {
    addOrRemoveFavorite(mealId)
    setFavorite(!favorite)
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
        <h1> {data.name} &gt; </h1>
        {Width < 768 ? <></> : <p>{data.description}</p>}
        <span>R$ {data.price}</span>
        <IncludeContainer>
          <div>
            <button>
              <FiMinus size={24} />
            </button>
            <input
              type="number"
              defaultValue="01"
            />
            <button>
              <FiPlus size={24} />
            </button>
          </div>
          <Button title="Incluir" />
        </IncludeContainer>
      </Card>
    </Container>
  )
}
