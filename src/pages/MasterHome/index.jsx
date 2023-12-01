import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import {
  SnackbarProvider,
  enqueueSnackbar,
  MaterialDesignContent,
} from "notistack"
import { api } from "../../services/api"
import { signUpSchema } from "../../schemas/signUpFormSchema"

import { useAuth } from "../../hooks/auth"

import {
  Box,
  TextField,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button as ButtonMui,
} from "@mui/material"

import { Button } from "../../components/Button"

import { Container, ExplorerLogo, Form, Inputs } from "./styles"

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)

  const { signOut } = useAuth()

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
      await api.post("/admin", { name, email, password })

      setTimeout(() => {
        enqueueSnackbar("Administrador criado com sucesso!", {
          variant: "success",
          autoHideDuration: 2000,
        })
        setIsLoading(false)
        setOpenDialog(true)
      }, 1000)
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
        <h1>Crie um administrador</h1>
        <Inputs>
          <label className="textfield-label">
            Nome
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
            title="Criar administrador"
          />
        </Box>

        <Link to="/">Sair</Link>
      </Form>

      <Dialog
        open={openDialog}
        onClose={() => setOpenDialog(false)}
      >
        <DialogTitle>Deseja sair ou criar outro administrador?</DialogTitle>
        <DialogActions>
          <ButtonMui
            onClick={() => signOut()}
            color="primary"
          >
            Sair
          </ButtonMui>
          <ButtonMui
            onClick={() => {
              setOpenDialog(false)
            }}
            color="primary"
            autoFocus
          >
            Criar outro administrador
          </ButtonMui>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
