import React from "react"
import ReactDOM from "react-dom/client"

import GlobalStyles from "./styles/global.js"
import themes from "./styles/themes.js"
import { ThemeProvider } from "styled-components"
import { SkeletonTheme } from "react-loading-skeleton"
import { StyledMaterialDesignContent } from "./configs/notiStackConfigs.js"

import { AuthProvider } from "./hooks/auth.jsx"
import { FavoritesProvider } from "./hooks/favorites.jsx"
import { Provider } from "react-redux"
import store from "./redux/store.js"
import { SnackbarProvider } from "notistack"

import Routes from "./routes"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <SkeletonTheme
        baseColor="#262D33"
        highlightColor="#47555E"
        enableAnimation={true}
        duration={1.2}
      >
        <SnackbarProvider
          anchorOrigin={{ vertical: "top", horizontal: "left" }}
          Components={{
            success: StyledMaterialDesignContent,
            content: StyledMaterialDesignContent,
            error: StyledMaterialDesignContent,
          }}
        >
          <GlobalStyles />
          <Provider store={store}>
            <AuthProvider>
              <FavoritesProvider>
                <Routes />
              </FavoritesProvider>
            </AuthProvider>
          </Provider>
        </SnackbarProvider>
      </SkeletonTheme>
    </ThemeProvider>
  </React.StrictMode>
)
