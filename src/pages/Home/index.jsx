import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"

import "react-loading-skeleton/dist/skeleton.css"

import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import { SwiperSlide } from "swiper/react"

import UseWidth from "../../hooks/useResize"

import { api } from "../../services/api"

import { Container, Main, Banner } from "./styles"

import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"

import { Dishs } from "../../components/Dishs"
import { DishsSection } from "../../components/DishsSection"

import macaronsSmall from "../../assets/macaronsSmall.png"
import macaronsBig from "../../assets/macaronsBig.png"

register()

export default function Home() {
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isSearching, setIsSearching] = useState(false)
  const searchTerm = useSelector(
    (rootReducer) => rootReducer.searchReducer.searchTerm
  )

  const Width = UseWidth()

  useEffect(() => {
    const handleSearch = () => {
      if (searchTerm === "") {
        setIsSearching(false)
        return
      }
      setIsLoading(true)
      setIsSearching(true)
    }
    async function getData() {
      const response = await api.get(`/dishes/?query=${searchTerm}`)

      let data = response.data

      if (!Array.isArray(data)) {
        data = [data]
      }

      setData(data)

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }
    handleSearch()
    getData()
  }, [searchTerm])

  return (
    <Container $width={Width}>
      <Header />
      <Main $issearching={isSearching}>
        {!isSearching && (
          <Banner $width={Width}>
            <div className="container">
              <img
                src={macaronsBig}
                alt=""
              />
            </div>
            <hgroup>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
            </hgroup>
          </Banner>
        )}

        {data.filter((dish) => dish.category === "Refeições").length > 0 && (
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
                    isLoading={isLoading}
                  />
                </SwiperSlide>
              ))}
          </DishsSection>
        )}

        {data.filter((dish) => dish.category === "Sobremesas").length > 0 && (
          <DishsSection
            $width={Width}
            title={"Sobremesas"}
          >
            {data
              .filter((dish) => dish.category === "Sobremesas")
              .map((dish) => (
                <SwiperSlide key={dish.id}>
                  <Dishs
                    data={dish}
                    key={dish.id}
                    isLoading={isLoading}
                  />
                </SwiperSlide>
              ))}
          </DishsSection>
        )}

        {data.filter((dish) => dish.category === "Bebidas").length > 0 && (
          <DishsSection
            $width={Width}
            title={"Bebidas"}
          >
            {data
              .filter((dish) => dish.category === "Bebidas")
              .map((dish) => (
                <SwiperSlide key={dish.id}>
                  <Dishs
                    data={dish}
                    key={dish.id}
                    isLoading={isLoading}
                  />
                </SwiperSlide>
              ))}
          </DishsSection>
        )}
      </Main>
      <Footer />
    </Container>
  )
}
