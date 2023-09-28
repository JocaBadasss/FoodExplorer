import { createContext, useContext, useState, useEffect } from "react"

import { api } from "../services/api"

const FavoritesContext = createContext({})

const FavoritesProvider = ({ children }) => {
  const [data, setData] = useState([])

  const addOrRemoveFavorite = async (dishId) => {
    try {
      const response = await api.post(`/favorites/${dishId}`)

      return true
    } catch (error) {
      if (error.response.data.message) {
        await api.delete(`/favorites/${dishId}`)

        return false
      }
    }
  }

  const checkFavorite = async (dishId) => {
    try {
      const response = await api.get(`/favorites/${dishId}`)

      return response.data
    } catch (error) {
      console.log("erro inesperado")
    }
  }

  return (
    <FavoritesContext.Provider
      value={{ data, addOrRemoveFavorite, checkFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  )
}

const useFavorites = () => {
  const context = useContext(FavoritesContext)
  return context
}

export { FavoritesProvider, useFavorites }
