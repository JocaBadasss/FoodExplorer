import { Header } from "../../components/Header"
import { FavoriteMeals } from "../../components/FavoriteMeals"

import { Container } from "./styles"
export default function Favorites() {
    
  return (
    <Container>
      <Header />
      <main>
        <h1>Meus favoritos</h1>
        <div>
          <FavoriteMeals />
          <FavoriteMeals />
          <FavoriteMeals />
          <FavoriteMeals />
          <FavoriteMeals />
        </div>
      </main>
    </Container>
  )
}
