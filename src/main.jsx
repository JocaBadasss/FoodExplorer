import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyles from "./styles/global.js"
import themes from "./styles/themes.js"
import { ThemeProvider } from "styled-components"

import { AuthProvider } from "./hooks/auth.jsx"
import { FavoritesProvider } from "./hooks/favorites.jsx"

import Routes from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <AuthProvider>
        <FavoritesProvider>
          <Routes />
        </FavoritesProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
)
