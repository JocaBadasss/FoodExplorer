import { api } from "../../services/api"

import { Container } from "./styles"
import { FavoriteDishsSkeleton } from "./Skeleton"

export const FavoriteDishs = ({ data, isLoading }) => {
  const handleRemoveFavorite = () => {
    api.delete(`/favorites/${data.id}`)
  }

  return (
    <Container>
      {!isLoading && (
        <>
          <img
            src={`${api.defaults.baseURL}/files/${data.image}`}
            alt={`Imagem de um prato com ${data.name}`}
          />
          <div>
            <h1>{data.name}</h1>
            <button onClick={handleRemoveFavorite}>
              Remover dos favoritos
            </button>
          </div>
        </>
      )}
      {isLoading && <FavoriteDishsSkeleton />}
    </Container>
  )
}
