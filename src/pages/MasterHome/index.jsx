import { useNavigate } from "react-router-dom"

import { Header } from "../../components/Header"

import { Container } from "./styles"

export default function MasterHome() {
  const navigate = useNavigate()

  return (
    <Container>
      <Header />
      <h1>MASTER = VOCE TEM UM LOGINZAO</h1>

      <button onClick={() => navigate("/admin")}>
        Criar Novo Administrador
      </button>
    </Container>
  )
}
