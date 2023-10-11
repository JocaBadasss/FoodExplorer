import { api } from "../../services/api"
import { useDispatch } from "react-redux"
import { removeDish } from "../../redux/cart/slice"

import UseWidth from "../../hooks/useResize"

import { Container } from "./styles"

export const CartDishs = ({ data }) => {
  const dispatch = useDispatch()
  const handleDishRemove = () => {
    dispatch(removeDish(data.id))
  }

  const Width = UseWidth()

  return (
    <Container>
      <img
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt={`Imagem de um prato com ${data.name}`}
      />
      {Width < 428 ? (
        <div>
          <h1>{data.name}</h1>
          <h2>Quantidade: {data.quantity}</h2>
          <button onClick={handleDishRemove}>Remover do pedido</button>
        </div>
      ) : (
        <div>
          <h1>
            {data.quantity}x {data.name}{" "}
            <span>R$ {(data.price_cents / 100).toLocaleString("pt-BR")}</span>{" "}
          </h1>
          <button onClick={handleDishRemove}>Excluir</button>
        </div>
      )}
    </Container>
  )
}
