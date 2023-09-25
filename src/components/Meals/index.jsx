import { MdOutlineFavoriteBorder } from "react-icons/md"
import { FiMinus, FiPlus } from "react-icons/fi"


import { Button } from "../Button"

import { Container, Card, IncludeContainer } from "./styles"

import UseWidthHook from "../../hooks/useResize"
import { api } from "../../services/api"
export const Meals = ({ data }) => {
  const Width = UseWidthHook()

  return (
    <Container>
      <Card>
        <button
          role="button"
          className="favorite"
        >
          <MdOutlineFavoriteBorder size={28} />
        </button>
        <img
          src={`${api.defaults.baseURL}/files/${data.image}`}
          alt={`Imagem de um prato com ${data.name}`}
        />
        <h1> {data.name} &gt; </h1>
        {Width < 768 ? <></> : <p>{data.description}</p>}
        <span>R$ {data.price}</span>
        <IncludeContainer>
          <div>
            <button>
              <FiMinus size={24} />
            </button>
            <input
              type="number"
              defaultValue="01"
            />
            <button>
              <FiPlus size={24} />
            </button>
          </div>
          <Button title="Incluir" />
        </IncludeContainer>
      </Card>
    </Container>
  )
}
