import { Routes, Route } from "react-router-dom"
import Home from "../pages/Admin/Home"
export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
    </Routes>
  )
}
