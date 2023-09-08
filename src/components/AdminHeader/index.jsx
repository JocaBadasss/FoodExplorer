import { useState } from "react"
import { Link } from "react-router-dom"

import { PiReceiptBold } from "react-icons/pi"
import { PiSignOut } from "react-icons/pi"
import { AiOutlineSearch } from "react-icons/ai"

import UseWidthHook from "../../hooks/useResize"

import { useAuth } from "../../hooks/auth"

import {
  Container,
  Cart,
  MenuBurger,
  Search,
  MenuMobile,
  Input,
  SignOut,
} from "./styles"

import { Logo } from "../Logo"
export const AdminHeader = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { signOut } = useAuth()

  const WidthScreen = UseWidthHook()

  const handleSignOut = () => {
    signOut()
  }

  return (
    <Container>
      <MenuBurger
        $menuisopen={menuIsOpen}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div />
        <div />
        <div />
      </MenuBurger>
      <Link to={"/"}>
        <Logo /> <span>admin</span>
      </Link>

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

      {WidthScreen < 1024 ? (
        <></>
      ) : (
        <SignOut onClick={handleSignOut}>
          <PiSignOut size={32} />
        </SignOut>
      )}

      <MenuMobile $menuisopen={menuIsOpen}>
        <header>
          <p>Menu</p>
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
