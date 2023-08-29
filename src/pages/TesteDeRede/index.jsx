import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, ExplorerLogo, Form, Inputs } from "./styles"

export default function TesteDeRedes() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleEmailValidation = (e) => {
    const newEmail = e.target.value
  }
  const handleSignUp = async (e) => {
    e.preventDefault()

    console.log(api.defaults.headers.common)
  }

  return (
    <Container>
      <div>
        <ExplorerLogo />
      </div>
      <Form>
        <h1>Crie sua conta</h1>
        <Inputs>
          <Input
            title="Seu nome"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id={"name"}
            onChange={(e) => setName(e.target.value)}
          />
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
          title="Criar conta"
          onClick={(e) => handleSignUp(e)}
        />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
