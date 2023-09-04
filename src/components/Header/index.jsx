import { useState } from "react"

import { PiReceiptBold } from "react-icons/pi"
import { IoCloseOutline } from "react-icons/io5"
import { PiSignOut } from "react-icons/pi"
import { AiOutlineSearch } from "react-icons/ai"
import { FiMenu } from "react-icons/fi"

import UseWidthHook from "../../hooks/useResize"

import { useAuth } from "../../hooks/auth"

import {
  Container,
  Cart,
  Menu,
  Search,
  MenuMobile,
  Input,
  SignOut,
} from "./styles"

import { Logo } from "../Logo"
export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { signOut } = useAuth()

  const WidthScreen = UseWidthHook()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <Menu onClick={() => setMenuIsOpen(true)}>
        <FiMenu size={26} />
      </Menu>
      <a>
        <Logo />
      </a>

      {WidthScreen < 1024 ? (
        <></>
      ) : (
        <Search>
          <AiOutlineSearch size={24} />
          <input
            type="text"
            placeholder="Busque por pratos ou ingredientes"
          />
        </Search>
      )}

      <Cart>
        {WidthScreen < 1024 ? (
          <div>
            <PiReceiptBold size={30} />
            <span>0</span>
          </div>
        ) : (
          <div>
            <PiReceiptBold size={30} />
            <p>
              Pedidos&nbsp;&#40;<span>0</span>&#41;
            </p>
          </div>
        )}
      </Cart>

      {WidthScreen < 1024 ? (
        <></>
      ) : (
        <SignOut onClick={handleSignOut}>
          <PiSignOut size={32} />
        </SignOut>
      )}

      <MenuMobile $menuisopen={menuIsOpen}>
        <header>
          <button
            onClick={() => {
              setMenuIsOpen(false)
            }}
          >
            <IoCloseOutline size={32} /> Menu
          </button>
        </header>

        <div>
          <Input>
            <AiOutlineSearch size={24} />
            <input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </Input>

          <button onClick={handleSignOut}>Sair</button>
        </div>
      </MenuMobile>
    </Container>
  )
}
