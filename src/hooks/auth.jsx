import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({})

  const SignIn = async ({ email, password }) => {
    try {
      const response = await api.post("/sessions", { email, password })

      const { token, user } = response.data

      localStorage.setItem("@s:t", token)

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`

      setData({ token, user })
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        console.log(error)
        alert("Erro desconhecido ao entrar")
      }
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
    ;(async () => {
      const token = localStorage.getItem("@s:t")

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`

        const response = await api.get("/users")

        const user = response.data

        setData({ token, user })
      }
    })()
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
