import { PiReceiptBold } from "react-icons/pi"
import { FiMenu } from "react-icons/fi"

import { Container, Cart, Menu, Search } from "./styles"

import { Logo } from "../Logo"
export const Header = () => {
  return (
    <Container>
      <Menu>
        <FiMenu size={26} />
      </Menu>
      <a>
        <Logo />
      </a>

      <Search />

      <Cart>
        <div>
          <PiReceiptBold size={30} />
          <p>Pedidos &#40;</p>
          <span>0</span> <p>&#41;</p>
        </div>
      </Cart>
    </Container>
  )
}
