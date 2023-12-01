import { api } from "../../services/api"
import { useNavigate } from "react-router-dom"

import { Container } from "./styles"
import { MobileDishsSkeleton } from "./Skeleton"

export const MobileDishs = ({ data, isLoading }) => {
  const navigate = useNavigate()
  const handleDetails = (dishId) => {
    navigate(`/details/${dishId}`)
  }
  return (
    <Container>
      {!isLoading && (
        <>
          <img
            src={`${api.defaults.baseURL}/files/${data.image}`}
            alt={`Imagem de um prato com ${data.name}`}
          />
          <div>
            <h1
              role="button"
              onClick={() => handleDetails(data.id)}
            >
              {data.name} &gt;
            </h1>
            <span>R$ 79,97</span>
          </div>
        </>
      )}

      {isLoading && <MobileDishsSkeleton />}
    </Container>
  )
}
