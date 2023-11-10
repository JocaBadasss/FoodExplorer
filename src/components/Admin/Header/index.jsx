import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

import { PiReceiptBold } from "react-icons/pi"
import { PiSignOut } from "react-icons/pi"
import { AiOutlineSearch } from "react-icons/ai"

import { selectDishsQuantity } from "../../../redux/cart/selectors"

import { useSelector } from "react-redux"
import UseWidthHook from "../../../hooks/useResize"

import { useAuth } from "../../../hooks/auth"

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
  const [showButtons, setShowButtons] = useState(true)
  const [placeholder, setPlaceholder] = useState("Busque por pratos")

  const { signOut } = useAuth()

  const WidthScreen = UseWidthHook()

  const cartQuantity = useSelector(selectDishsQuantity)

  const navigate = useNavigate()

  const handleSignOut = () => {
    signOut()
  }

  const handleSearchClick = () => {
    console.log("cu")
    setShowButtons(false)
    setPlaceholder("Busque por pratos ou ingredientes")
  }

  const handleSearchBlur = () => {
    setShowButtons(true)
    setPlaceholder("Busque por pratos")
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
            onClick={handleSearchClick}
            placeholder={
              WidthScreen > 1224
                ? "Busque por pratos ou ingredientes"
                : placeholder
            }
            onBlur={handleSearchBlur}
          />
        </Search>
      )}

      {showButtons && WidthScreen >= 1024 && (
        <>
          <HeaderButton onClick={() => navigate("/favorites")}>
            Meus favoritos
          </HeaderButton>
          <HeaderButton onClick={() => navigate("/new-dish")}>
            Novo prato
          </HeaderButton>
        </>
      )}

      <Cart>
        {WidthScreen < 1024 ? (
          <div onClick={() => navigate("/checkout")}>
            <PiReceiptBold size={28} />
            <span>{cartQuantity}</span>
          </div>
        ) : (
          <div onClick={() => navigate("/checkout/payment")}>
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

          <button onClick={() => navigate("/new-dish")}>Novo prato</button>
          <button onClick={() => navigate("/favorites")}>Meus favoritos</button>
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </MenuMobile>
    </Container>
  )
}
