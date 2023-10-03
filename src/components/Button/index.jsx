import { Container } from "./styles"

export const Button = ({ title, icon: Icon, ...rest }) => {
  return (
    <Container {...rest}>
      {Icon && <Icon size={22} />}
      {title}
    </Container>
  )
}
