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

import { Meals } from "../../components/Meals"
import { MealsSection } from "../../components/MealsSection"

import { Container, Main, Banner, MealSection } from "./styles"
import { api } from "../../services/api"

register()

export default function Home() {
  const [data, setData] = useState([])
  const [navigation, setNavigation] = useState(true)

  const Width = UseWidth()

  // const data = [
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pieeeeeeee",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Bebidas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  // ]

  // const data = [
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pieeeeeeee",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Bebidas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pieeeeeeee",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Bebidas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Sobremesas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pieeeeeeee",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Refeições",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  //   {
  //     id: "5",
  //     name: "Prugna Pie",
  //     category: "Bebidas",
  //     description: "Torta de ameixa com massa amanteigada, polvilho em açúcar.",
  //     price: 79.97,
  //     tags: ["arroz", "frango", "salada"],
  //     image: "45aca4207b6208d0ee49-name=macaron, size=400.png",
  //   },
  // ]

  useEffect(() => {
    async function getData() {
      const response = await api.get("/dishes")
      const data = response.data

      setData(data)
    }
    getData()
  })

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

        <MealsSection
          $width={Width}
          title={"Refeições"}
        >
          {data
            .filter((meal) => meal.category === "Refeições")
            .map((meal) => (
              <SwiperSlide key={meal.id}>
                <Meals data={meal} />
              </SwiperSlide>
            ))}
        </MealsSection>

        <MealsSection
          $width={Width}
          title={"Sobremesas"}
        >
          {data
            .filter((meal) => meal.category === "Sobremesas")
            .map((meal) => (
              <SwiperSlide key={meal.id}>
                <Meals data={meal} />
              </SwiperSlide>
            ))}
        </MealsSection>

        <MealsSection
          $width={Width}
          title={"Bebidas"}
        >
          {data
            .filter((meal) => meal.category === "Bebidas")
            .map((meal) => (
              <SwiperSlide key={meal.id}>
                <Meals data={meal} />
              </SwiperSlide>
            ))}
        </MealsSection>
      </Main>
      <Footer />
    </Container>
  )
}
