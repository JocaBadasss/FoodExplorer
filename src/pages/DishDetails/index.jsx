import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../../services/api"
import { convertPrice, calculateNewPrice } from "../../utils/convertPrice"
import { useDispatch } from "react-redux"
import { addDish, increaseDishQuantity } from "../../redux/cart/slice"

import UseWidthHook from "../../hooks/useResize"

import { FiMinus } from "react-icons/fi"
import { BsPlusLg } from "react-icons/bs"
import { PiReceiptBold } from "react-icons/pi"

import { ButtonText } from "../../components/ButtonText"
import { Header } from "../../components/Header"
import { Footer } from "../../components/Footer"
import { Button } from "../../components/Button"
import { DishDetailsSkeleton } from "./Skeleton"

import { Container, IncludeContainer } from "./styles"

export default function DishDetails() {
  const [quantity, setQuantity] = useState("01")
  const [data, setData] = useState([])
  const [price, setPrice] = useState(0)
  const [isLoading, setIsLoading] = useState(true)

  const dispatch = useDispatch()
  const Width = UseWidthHook()
  const navigate = useNavigate()
  const { id } = useParams()

  const handlePlus = () => {
    dispatch(increaseDishQuantity(data.id))
    setQuantity((Number(quantity) + 1).toString().padStart(2, "0"))
    const newPrice = calculateNewPrice({
      dataPrice: data.price_cents,
      statePrice: price,
      operator: "+",
      quantity: quantity,
    })

    setPrice(newPrice)
  }

  const handleMinus = () => {
    if (quantity == 1) return
    setQuantity((Number(quantity) - 1).toString().padStart(2, "0"))
    const newPrice = calculateNewPrice({
      dataPrice: data.price_cents,
      statePrice: price,
      operator: "-",
      quantity: quantity,
    })

    setPrice(newPrice)
  }

  const handleIncludeDishToCart = () => {
    dispatch(addDish({ ...data, quantity }))
    setPrice(convertPrice(data.price_cents))
    setQuantity("01")
  }

  useEffect(() => {
    async function getData() {
      const response = await api.get(`/dishes/${id}`)
      const data = response.data

      setPrice(convertPrice(data.price_cents))

      setData(data)

      setTimeout(() => {
        setIsLoading(false)
      }, 1000)
    }

    getData()
  }, [])

  return (
    <Container>
      <Header />
      <main>
        <ButtonText
          title="voltar"
          onClick={() => navigate(-1)}
        />
        {!isLoading && (
          <div className="content">
            <img
              src={`${api.defaults.baseURL}/files/${data.image}`}
              alt={`Imagem de um prato com ${data.name}`}
            />

            <div className="wrapper">
              <div className="details">
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <div>
                  {data.tags &&
                    data.tags.map((tag) => (
                      <span
                        className="tag"
                        key={tag.id}
                      >
                        {tag.name}
                      </span>
                    ))}
                </div>
              </div>
              <IncludeContainer>
                <div>
                  <button onClick={handleMinus}>
                    <FiMinus size={28} />
                  </button>
                  <input
                    type="number"
                    onChange={(e) => setQuantity(e.target.value)}
                    value={quantity}
                  />
                  <button onClick={handlePlus}>
                    <BsPlusLg size={28} />
                  </button>
                </div>
                <Button
                  {...(Width < 768 ? { icon: PiReceiptBold } : {})}
                  {...(Width < 768
                    ? { title: ` pedir ∙ R$ ${price}` }
                    : { title: ` incluir ∙ R$ ${price}` })}
                  onClick={() => handleIncludeDishToCart()}
                ></Button>
              </IncludeContainer>
            </div>
          </div>
        )}

        {isLoading && (
          <DishDetailsSkeleton
            data={data}
            Width={Width}
          />
        )}
      </main>
      <Footer />
    </Container>
  )
}
