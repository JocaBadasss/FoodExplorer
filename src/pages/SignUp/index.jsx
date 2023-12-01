import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { signUpSchema } from "../../schemas/signUpFormSchema"
import { useForm } from "react-hook-form"
import { enqueueSnackbar } from "notistack"

import { Box, TextField, styled, CircularProgress } from "@mui/material"

import { api } from "../../services/api"

import { Button } from "../../components/Button"

import { Container, ExplorerLogo, Form, Inputs } from "./styles"

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
    resolver: zodResolver(signUpSchema),
  })

  const navigate = useNavigate()

  const handleFormSubmit = async (data) => {
    const { name, email, password } = data

    try {
      setIsLoading(true)
      await api.post("/users", { name, email, password })

      setTimeout(() => {
        enqueueSnackbar("Conta criada com sucesso!", {
          variant: "success",
          autoHideDuration: 2000,
        })
        setIsLoading(false)
      }, 1000)

      setTimeout(() => {
        enqueueSnackbar("Redirecionando para o login", {
          variant: "success",
          autoHideDuration: 2000,
        })
        setIsLoading(false)
      }, 2000)

      setTimeout(() => {
        navigate("/")
      }, 3000)
    } catch (err) {
      if (err.response.data) {
        enqueueSnackbar(err.response.data.message, {
          variant: "error",
          autoHideDuration: 10000,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left",
          },
        })
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      } else {
        enqueueSnackbar("Erro interno: erro ao criar conta", {
          variant: "error",
          autoHideDuration: 10000,
        })
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)
      }
    }
  }

  return (
    <Container>
      <div>
        <ExplorerLogo />
      </div>
      <Form onSubmit={handleSubmit(handleFormSubmit)}>
        <h1>Crie sua conta</h1>
        <Inputs>
          <label className="textfield-label">
            Seu nome
            <TextField
              error={!!errors.name}
              helperText={errors.name ? errors.name.message : ""}
              {...register("name")}
              label="Exemplo: Maria da Silva"
              variant="filled"
              className="input-textfield"
              type="text"
            />
          </label>

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
            title="Criar conta"
          />
        </Box>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  )
}
