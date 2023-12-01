import { PiCaretLeftBold } from "react-icons/pi"

import { Container } from "./styles"

export const ButtonTextSmall = ({ title, ...rest }) => {
  return (
    <Container {...rest}>
      <PiCaretLeftBold size={22} />
      <span>{title}</span>
    </Container>
  )
}
