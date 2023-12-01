import { useState, useEffect } from "react"
import { Container } from "./styles"

export const Button = ({ title, icon: Icon, disabled, isLoading, ...rest }) => {
  const [animationEnded, setAnimationEnded] = useState(false)

  return (
    <Container
      disabled={disabled}
      $isloading={isLoading}
      {...rest}
    >
      {Icon && <Icon size={22} />}
      {isLoading ? <></> : title}
    </Container>
  )
}
