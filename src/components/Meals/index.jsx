import { MdOutlineFavoriteBorder } from "react-icons/md"
import { FiMinus, FiPlus } from "react-icons/fi"

import Dish from "../../assets/dish.png"
import { Button } from "../Button"

import { Container, Card, IncludeContainer } from "./styles"

import UseWidthHook from "../../hooks/useResize"
export const Meals = ({ title }) => {
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
          src={Dish}
          alt=""
        />
        <h1>Torradas de Parma &gt; </h1>
        {Width < 768 ? (
          <></>
        ) : (
          <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
        )}
        <span>R$ 25,97</span>
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
