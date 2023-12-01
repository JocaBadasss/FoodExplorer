import { useState } from "react"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "../../schemas/signInFormSchema"
import { useForm } from "react-hook-form"

import { enqueueSnackbar } from "notistack"

import { useAuth } from "../../hooks/auth"

import { Container, Form, Inputs } from "./styles"

import { Button } from "../../components/Button"
import { Logo } from "../../components/Logo"

import { Box, TextField, CircularProgress } from "@mui/material"
export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: zodResolver(loginSchema),
  })

  const { SignIn } = useAuth()

  const handleSignIn = async (data) => {
    const { email, password } = data

    try {
      setIsLoading(true)

      await SignIn({ email, password })
    } catch (error) {
      setIsLoading(false)

      enqueueSnackbar(error.response.data.message, {
        variant: "error",
      })
    }
  }

  return (
    <Container>
      <Logo />
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>Faça login</h1>
        <Inputs>
          <label className="textfield-label">
            Email
            <TextField
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ""}
              {...register("email")}
              label="Exemplo: exemplo@exemplo.com.br"
              variant="filled"
              className="input-textfield"
              type="email"
            />
          </label>

          <label className="textfield-label">
            Senha
            <TextField
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ""}
              {...register("password")}
              label="No mínimo 8 caracteres"
              variant="filled"
              className="input-textfield"
              type="password"
            />
          </label>
        </Inputs>

        <Box
          sx={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {isLoading && (
            <CircularProgress
              size={48}
              sx={{
                color: "#750310",
                position: "absolute",
                left: "43.5%",
              }}
            />
          )}
          <Button
            disabled={isLoading}
            isLoading={isLoading}
            title="Entrar"
          />
        </Box>

        <Link to="/register">Criar uma conta</Link>
      </Form>
    </Container>
  )
}
