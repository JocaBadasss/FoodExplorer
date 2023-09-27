import { Container } from "./styles"
import ravanello from "../../assets/ravanello.png"

export const FavoriteMeals = ({ data }) => {
  return (
    <Container>
      <img
        src={ravanello}
        alt="Imagem de um prato com ravanello"
      />
      <div >
        <h1>Salada ravanello</h1>
        <button>Remover dos favoritos</button>
      </div>
    </Container>
  )
}
