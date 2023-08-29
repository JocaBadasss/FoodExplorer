import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import { api } from "../../services/api"

import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, ExplorerLogo, Form, Inputs } from "./styles"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const handleEmailValidation = (e) => {
    const newEmail = e.target.value
  }
  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await api.post("/admin", { name, email, password })
      alert("Conta criada com sucesso!")
      navigate("/")
    } catch (err) {
      if (err.response.data) {
        alert(err.response.data.message)
      } else {
        alert("Erro ao criar a conta")
      }
    }
  }

  return (
    <Container>
      <div>
        <ExplorerLogo />
      </div>
      <Form>
        <h1>Criar um novo administrador</h1>
        <Inputs>
          <Input
            title="Nome do administrador"
            placeholder="Exemplo: Maria da Silva"
            type="text"
            id={"name"}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            title="Email do administrador"
            placeholder="Exemplo: exemplo@exemplo.com.br"
            type="email"
            id={"email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Senha do administrador"
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

        <Link to="/">Tela inicial</Link>
      </Form>
    </Container>
  )
}
