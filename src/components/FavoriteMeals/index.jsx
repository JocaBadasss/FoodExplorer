import { api } from "../../services/api"

import { Container } from "./styles"

export const FavoriteMeals = ({ data }) => {
  return (
    <Container>
      <img
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt={`Imagem de um prato com ${data.name}`}
      />
      <div>
        <h1>{data.name}</h1>
        <button>Remover dos favoritos</button>
      </div>
    </Container>
  )
}
