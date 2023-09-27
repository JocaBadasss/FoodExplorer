import { useState, useEffect } from "react"

import { register } from "swiper/element/bundle"
import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import swiperConfigs from "../../configs/swiperConfigs"

import UseWidth from "../../hooks/useResize"

import { Container } from "./styles"

register()

export const MealsSection = ({ title, children, ...rest }) => {
  const [navigation, setNavigation] = useState(true)

  const Width = UseWidth()

  return (
    <Container
      $width={Width}
      {...rest}
    >
      <h1>{title}</h1>

      <div className="Cards">
        <Swiper {...swiperConfigs(Width)}>{children}</Swiper>
      </div>
    </Container>
  )
}
