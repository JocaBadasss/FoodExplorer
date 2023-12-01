import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import { SwiperSlide } from "swiper/react"

import UseWidth from "../../../hooks/useResize"

import { api } from "../../../services/api"

import { Container, Main, Banner } from "./styles"

import { Header } from "../../../components/Admin/Header"
import { Footer } from "../../../components/Footer"

import { Dishs } from "../../../components/Dishs"
import { DishsSection } from "../../../components/DishsSection"

import macaronsSmall from "../../../assets/macaronsSmall.png"
import macaronsBig from "../../../assets/macaronsBig.png"

register()

export default function Home() {
  const [data, setData] = useState([])
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

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
      setIsSearching(true)
      setIsLoading(true)
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
          <div className="banner-wrapper">
            <Banner $width={Width}>
              <div className="container">
                <img src={Width < 428 ? macaronsSmall : macaronsBig} />
              </div>
              <hgroup>
                <h1>Sabores inigualáveis</h1>
                <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
              </hgroup>
            </Banner>
          </div>
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
                    isAdmin={true}
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
                    isAdmin={true}
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
                    isAdmin={true}
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
