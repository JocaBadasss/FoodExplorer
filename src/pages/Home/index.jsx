import React, { useState, useEffect } from "react"

import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"

import UseWidth from "../../hooks/useResize"

import macaronsSmall from "../../assets/macaronsSmall.png"
import macaronsBig from "../../assets/macaronsBig.png"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Dishs } from "../../components/Dishs"
import { DishsSection } from "../../components/DishsSection"

import { Container, Main, Banner } from "./styles"
import { api } from "../../services/api"

register()

export default function Home() {
  const [data, setData] = useState([])

  const Width = UseWidth()

  useEffect(() => {
    async function getData() {
      const response = await api.get("/dishes")
      const data = response.data

      setData(data)
    }
    getData()
  }, [])

  return (
    <Container $width={Width}>
      <Header />
      <Main>
        <Banner $width={Width}>
          <div className="container">
            <img src={Width < 428 ? macaronsSmall : macaronsBig} />
          </div>
          <hgroup>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </hgroup>
        </Banner>

        <DishsSection
          $width={Width}
          title={"Refeições"}
        >
          {data
            .filter((dish) => dish.category === "Refeições")
            .map((dish) => (
              <SwiperSlide key={dish.id}>
                <Dishs
                  data={dish}
                  key={dish.id}
                />
              </SwiperSlide>
            ))}
        </DishsSection>

        <DishsSection
          $width={Width}
          title={"Sobremesas"}
        >
          {data
            .filter((dish) => dish.category === "Sobremesas")
            .map((dish) => (
              <SwiperSlide key={dish.id}>
                <Dishs data={dish} />
              </SwiperSlide>
            ))}
        </DishsSection>

        <DishsSection
          $width={Width}
          title={"Bebidas"}
        >
          {data
            .filter((dish) => dish.category === "Bebidas")
            .map((dish) => (
              <SwiperSlide key={dish.id}>
                <Dishs data={dish} />
              </SwiperSlide>
            ))}
        </DishsSection>
      </Main>
      <Footer />
    </Container>
  )
}
