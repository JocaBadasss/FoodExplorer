import { createContext, useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import { api } from "../services/api"
import { enqueueSnackbar } from "notistack"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  const SignIn = async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password })

      const { token, user } = response.data

      enqueueSnackbar("Login efetuado com sucesso!", {
        variant: "success",
        autoHideDuration: 1000,
      })

      setTimeout(() => {
        enqueueSnackbar("Redirecionando...", {
          variant: "success",
          autoHideDuration: 500,
        })
      }, 1000)

      await new Promise((resolve) => {
        setTimeout(() => {
          localStorage.setItem("@s:t", token)
          api.defaults.headers.common["Authorization"] = `Bearer ${token}`
          setData({ token, user })
          resolve()
        }, 2000)
      })
    } catch (error) {
      throw error
    }
  }

  const signOut = () => {
    const confirm = window.confirm("Tem certeza que deseja sair?")
    if (confirm) {
      localStorage.removeItem("@s:t")
      setData({})
    }
  }

  useEffect(() => {
    const isUserAlreadyLoggedIn = async () => {
      const token = localStorage.getItem("@s:t")

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`

        const response = await api.get("/users")

        const user = response.data

        setData({ token, user })
      }
    }
    isUserAlreadyLoggedIn()
  }, [])

  return (
    <AuthContext.Provider value={{ user: data.user, SignIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }
