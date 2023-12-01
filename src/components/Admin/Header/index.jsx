import { useState, useEffect, useRef } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

import { setSearchTerm } from "../../../redux/search/slice"

import { PiReceiptBold } from "react-icons/pi"
import { PiSignOut } from "react-icons/pi"
import { AiOutlineSearch } from "react-icons/ai"

import UseWidthHook from "../../../hooks/useResize"
import { api } from "../../../services/api"

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

import { MobileDishs } from "../../MobileDishs"
import { Footer } from "../../Footer"

import { Logo } from "../Logo"
export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [showButtons, setShowButtons] = useState(true)
  const [placeholder, setPlaceholder] = useState("Busque por pratos")
  const [search, setSearch] = useState("")
  const [isSearching, setIsSearching] = useState(false)
  const [searchData, setSearchData] = useState([])
  const inputRef = useRef(null)
  const searchTerm = useSelector(
    (rootReducer) => rootReducer.searchReducer.searchTerm
  )

  const dispatch = useDispatch()

  const { signOut } = useAuth()

  const WidthScreen = UseWidthHook()

  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = (e) => {
    const value = e.target.value.trim()

    dispatch(setSearchTerm(value))

    if (location.pathname !== "/" && value !== "") {
      sessionStorage.setItem("lastLocation", location.pathname)
      navigate("/")
    }

    if (value === "") {
      const lastLocation = sessionStorage.getItem("lastLocation")

      lastLocation !== "/" && navigate(lastLocation)

      sessionStorage.removeItem("lastLocation")
    }
  }

  const handleSignOut = () => {
    signOut()
    navigate("/")
  }

  const handleSearchClick = () => {
    setShowButtons(false)
    setPlaceholder("Busque por pratos ou ingredientes")
  }

  useEffect(() => {
    if (location.pathname === "/" && searchTerm !== "") {
      inputRef.current.focus()
    }
  }, [searchTerm, location.pathname])

  useEffect(() => {
    const getSearchData = async () => {
      if (!search) {
        setIsSearching(false)
        setSearchData([])
      }

      if (search) {
        setIsSearching(true)

        const response = await api.get(`/dishes/?query=${search}`)

        let data = response.data

        if (!Array.isArray(data)) {
          data = [data]
        }

        setSearchData(data)
      }
    }

    getSearchData()
  }, [search])

  useEffect(() => {
    const body = document.querySelector("body")

    if (menuIsOpen) {
      body.classList.add("menu-open")
      return
    }

    body.classList.remove("menu-open")
  }, [menuIsOpen])

  const handleSearchBlur = () => {
    setShowButtons(true)
    setPlaceholder("Busque por pratos")
  }

  return (
    <Container $menuisopen={menuIsOpen}>
      <MenuBurger
        $menuisopen={menuIsOpen}
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <div />
        <div />
        <div />
      </MenuBurger>

      {!menuIsOpen && (
        <>
          <Link to={"/"}>
            <Logo />
          </Link>

          {WidthScreen < 1024 ? (
            <></>
          ) : (
            <Search>
              <AiOutlineSearch size={24} />
              <input
                ref={inputRef}
                type="text"
                onClick={handleSearchClick}
                placeholder={
                  WidthScreen > 1224
                    ? "Busque por pratos ou ingredientes"
                    : placeholder
                }
                value={searchTerm}
                onChange={handleSearch}
                onBlur={handleSearchBlur}
              />
            </Search>
          )}

          {showButtons && WidthScreen >= 1024 && (
            <HeaderButton onClick={() => navigate("/new-dish")}>
              Novo prato
            </HeaderButton>
          )}

          <Cart>
            {WidthScreen < 1024 ? (
              <div onClick={() => navigate("/order-history")}>
                <PiReceiptBold size={28} />
              </div>
            ) : (
              <div onClick={() => navigate("/order-history")}>
                <PiReceiptBold size={30} />
                <p>Pedidos</p>
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
        </>
      )}

      {menuIsOpen && <span>Menu</span>}

      <MenuMobile $menuisopen={menuIsOpen}>
        <div className="menu">
          <Input>
            <AiOutlineSearch size={24} />
            <input
              type="text"
              placeholder="Busque por pratos ou ingredientes"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Input>

          <div className="menu-options">
            {searchData && searchData.length > 0 && (
              <div className="menu-options-wrapper">
                {searchData &&
                  searchData.map((data) => (
                    <MobileDishs
                      key={data.id}
                      data={data}
                    />
                  ))}
              </div>
            )}

            {!isSearching && (
              <>
                <button onClick={() => navigate("/new-dish")}>
                  Novo prato
                </button>
                <button onClick={handleSignOut}>Sair</button>
              </>
            )}
          </div>
        </div>
        <Footer />
      </MenuMobile>
    </Container>
  )
}
