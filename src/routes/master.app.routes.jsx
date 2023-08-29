import { Routes, Route } from "react-router-dom"

import MasterHome from "../pages/MasterHome"
import SignUpAdmin from "../pages/SignUpAdmin"
export default function MasterRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<MasterHome />}
      />
      <Route
        path="/admin"
        element={<SignUpAdmin />}
      />
    </Routes>
  )
}
