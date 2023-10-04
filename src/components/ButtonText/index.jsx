import { PiCaretLeftBold } from "react-icons/pi"

import { Container } from "./styles"

export const ButtonText = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <PiCaretLeftBold size={32} />
      <span>{title}</span>
    </Container>
  )
}
