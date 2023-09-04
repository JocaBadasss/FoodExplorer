import { BrowserRouter } from "react-router-dom"

import { useAuth } from "../hooks/auth"

import AuthRoutes from "./auth.routes"
import AdminRoutes from "./admin.app.routes"
import MasterRoutes from "./master.app.routes"
import AppRoutes from "./app.routes"

export default function Routes() {
  const { user } = useAuth()



  return (
    <BrowserRouter>
      {user ? (
        user.role === "Admin" ? (
          <AdminRoutes />
        ) : user.role === "Master" ? (
          <MasterRoutes />
        ) : (
          <AppRoutes />
        )
      ) : (
        <AuthRoutes />
      )}

      {/* <AuthRoutes/> */}
    </BrowserRouter>
  )
}
