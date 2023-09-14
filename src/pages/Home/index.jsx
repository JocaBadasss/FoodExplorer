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

import { Container, Main, MealSection, Banner } from "./styles"

register()

export default function Home() {
  const [navigation, setNavigation] = useState(true)

  const Width = UseWidth()

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
        <MealSection $width={Width}>
          <h1>Refeições</h1>

          <div className="Cards">
            <Swiper
              slidesPerView={3.5}
              navigation={Width < 768 ? false : true}
              loop={true}
              spaceBetween={27}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  centeredSlides: true,
                  spaceBetween: 8,
                },
                360: {
                  slidesPerView: 1.6,
                  centeredSlides: true,
                  spaceBetween: 8,
                },
                410: {
                  slidesPerView: 1.78,
                  centeredSlides: true,
                  spaceBetween: 16,
                },
                480: {
                  slidesPerView: 2,
                  centeredSlides: true,
                  spaceBetween: 18,
                },
                560: {
                  slidesPerView: 2.3,
                  centeredSlides: true,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 2.6,
                  centeredSlides: true,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 2.78,
                  centeredSlides: true,

                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.8,
                  spaceBetween: 27,
                  centeredSlides: false,
                },
                1366: {
                  slidesPerView: 3.5,
                  spaceBetween: 27,
                  centeredSlides: false,
                },
              }}
            >
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
            </Swiper>
          </div>
        </MealSection>
        <MealSection $width={Width}>
          <h1>Refeições</h1>

          <div className="Cards">
            <Swiper
              slidesPerView={3.5}
              navigation={Width < 768 ? false : true}
              loop={true}
              spaceBetween={27}
              breakpoints={{
                320: {
                  slidesPerView: 1.2,
                  centeredSlides: true,
                  spaceBetween: 8,
                },
                360: {
                  slidesPerView: 1.6,
                  centeredSlides: true,
                  spaceBetween: 8,
                },
                410: {
                  slidesPerView: 1.78,
                  centeredSlides: true,
                  spaceBetween: 16,
                },
                480: {
                  slidesPerView: 2,
                  centeredSlides: true,
                  spaceBetween: 18,
                },
                560: {
                  slidesPerView: 2.3,
                  centeredSlides: true,
                  spaceBetween: 18,
                },
                640: {
                  slidesPerView: 2.6,
                  centeredSlides: true,
                  spaceBetween: 18,
                },
                768: {
                  slidesPerView: 2.78,
                  centeredSlides: true,

                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2.8,
                  spaceBetween: 27,
                  centeredSlides: false,
                },
                1366: {
                  slidesPerView: 3.5,
                  spaceBetween: 27,
                  centeredSlides: false,
                },
              }}
            >
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
              <SwiperSlide>
                <Meals />
              </SwiperSlide>
            </Swiper>
          </div>
        </MealSection>
      </Main>
      <Footer />
    </Container>
  )
}
