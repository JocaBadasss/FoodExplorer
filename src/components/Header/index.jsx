import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { PiReceiptBold } from "react-icons/pi"
import { PiSignOut } from "react-icons/pi"
import { AiOutlineSearch } from "react-icons/ai"

import { selectDishsQuantity } from "../../redux/cart/selectors"

import { useSelector } from "react-redux"
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
  HeaderButton,
} from "./styles"

import { Logo } from "../Logo"
export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const { signOut } = useAuth()

  const WidthScreen = UseWidthHook()

  const cartQuantity = useSelector(selectDishsQuantity)

  const navigate = useNavigate()

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
        <Logo />
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
        <HeaderButton onClick={() => navigate("/favorites")}>
          Meus favoritos
        </HeaderButton>
      )}

      <Cart>
        {WidthScreen < 1024 ? (
          <div onClick={() => navigate("/checkout")}>
            <PiReceiptBold size={28} />
            <span>{cartQuantity}</span>
          </div>
        ) : (
          <div>
            <PiReceiptBold size={30} />
            <p>
              Pedidos&nbsp;&#40;<span>{cartQuantity}</span>&#41;
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
          <p>Menu</p>
        </header>

        <div className="menu-options">
          <Input>
            <AiOutlineSearch size={24} />
            <input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
            />
          </Input>

          <button onClick={() => navigate("/favorites")}>Meus favoritos</button>
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </MenuMobile>
    </Container>
  )
}
