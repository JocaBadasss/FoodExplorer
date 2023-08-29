import { useState } from "react"
import { Link } from "react-router-dom"

import { useAuth } from "../../hooks/auth"

import { Container, ExplorerLogo, Form, Inputs } from "./styles"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
export default function SignIn() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const { SignIn } = useAuth()

  const handleSignIn = () => {
    SignIn({ email, password })
  }

  return (
    <Container>
      <div>
        <ExplorerLogo />
      </div>
      <Form>
        <h1>Faça login</h1>
        <Inputs>
          <Input
            title="Email"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            id={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Senha"
            placeholder="No mínimo 6 caracteres"
            type="password"
            id={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Inputs>

        <Button
          title="Entrar"
          onClick={(e) => {
            e.preventDefault()
            handleSignIn()
          }}
        />

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
