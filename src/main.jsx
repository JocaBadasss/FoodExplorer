import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyles from "./styles/global.js"
import themes from "./styles/themes.js"
import { ThemeProvider } from "styled-components"

import { AuthProvider } from "./hooks/auth.jsx"
import { FavoritesProvider } from "./hooks/favorites.jsx"
import { Provider } from "react-redux"
import store from "./redux/store.js"

import Routes from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <GlobalStyles />
      <Provider store={store}>
        <AuthProvider>
          <FavoritesProvider>
            <Routes />
          </FavoritesProvider>
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
