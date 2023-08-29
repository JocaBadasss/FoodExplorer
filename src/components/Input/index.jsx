import { Container } from "./styles"

export function Input({ title, id, ...rest }) {
  return (
    <Container>
      <label htmlFor={id}>{title}</label>
      <input
        {...rest}
        id={id}
      />
    </Container>
  )
}
