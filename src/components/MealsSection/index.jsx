import { useState } from "react"

import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import swiperConfigs from "../../configs/swiperConfigs"

import UseWidth from "../../hooks/useResize"

import { Container } from "./styles"

register()

export const MealsSection = ({ title, children, ...rest }) => {
  const [isLastSlide, setIsLastSlide] = useState(false)

  const Width = UseWidth()
  const handleSlideChange = (swiper) => {
    swiper.isEnd ? setIsLastSlide(true) : setIsLastSlide(false)

    console.log()
  }

  return (
    <Container
      $width={Width}
      {...rest}
      $islastslide={isLastSlide}
    >
      <h1>{title}</h1>

      <div className="Cards">
        <Swiper
          {...swiperConfigs(Width)}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
          onMouseOver={() => console.log("cu")}
        >
          {children}
        </Swiper>
      </div>
    </Container>
  )
}
