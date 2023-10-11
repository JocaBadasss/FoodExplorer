import { api } from "../../services/api"
import { useDispatch } from "react-redux"
import { removeDish } from "../../redux/cart/slice"

import { Container } from "./styles"

export const CartDishs = ({ data }) => {
  const dispatch = useDispatch()
  const handleDishRemove = () => {
    dispatch(removeDish(data.id))
  }

  return (
    <Container>
      <img
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt={`Imagem de um prato com ${data.name}`}
      />
      <div>
        <h1>{data.name}</h1>
        <h2>Quantidade: {data.quantity}</h2>
        <button onClick={handleDishRemove}>Remover do pedido</button>
      </div>
    </Container>
  )
}
