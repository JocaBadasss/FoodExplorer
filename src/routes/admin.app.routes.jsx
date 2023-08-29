import { Routes, Route } from "react-router-dom"
import AdminHome from "../pages/AdminHome"
export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<AdminHome />}
      />
    </Routes>
  )
}
