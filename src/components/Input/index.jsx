import { Container } from "./styles"
import { forwardRef } from "react"

export const Input = forwardRef(({ title, id, ...rest }, ref) => {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <input
        {...rest}
        ref={ref}
        id={id}
      />
    </Container>
  )
})
