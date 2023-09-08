import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import macarons from "../../assets/macarons.png"

import UseWidth from "../../hooks/useResize"

import { Meals } from "../../components/Meals"

import { Container, Main, MealSection, Article } from "./styles"

export default function Home() {
  const UseWidthHook = UseWidth()

  return (
    <Container $width={UseWidthHook}>
      <Header />
      <Main>
        {/* <Article>
          <img
            src={macarons}
            alt="Imagem de varios doces francês (macaron) empilhados desordenadamente, como se estivessem caindo"
          />

          <hgroup>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </hgroup>
        </Article> */}

        <MealSection>
          <h1>Refeições</h1>
          <div>
            <div className="buttonLeft"></div>
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <div className="buttonRight"></div>
          </div>
        </MealSection>
        <MealSection>
          <h1>Sobremesas</h1>
          <div>
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
            <Meals />
          </div>
        </MealSection>
      </Main>
      <Footer />
    </Container>
  )
}
