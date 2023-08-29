import { Container } from "./styles"

import { useAuth } from "../../hooks/auth"

export const Header = () => {
  const { SignOut } = useAuth()

  function handleLogout() {
    const confirm = window.confirm("Você tem certeza que deseja sair?")
    if (confirm) {
      SignOut()
    }
  }

  return (
    <Container>
      <button onClick={handleLogout}>Sair</button>
    </Container>
  )
}
