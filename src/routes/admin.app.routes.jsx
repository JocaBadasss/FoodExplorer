import { Routes, Route } from "react-router-dom"
import Home from "../pages/Admin/Home"
import NewDish from "../pages/Admin/NewDish"
import EditDish from "../pages/Admin/EditDish"
import OrderHistory from "../pages/Admin/OrderHistory"
import Details from "../pages/Admin/DishDetails"
import Favorites from "../pages/Admin/Favorites"
export default function AdminRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/new-dish"
        element={<NewDish />}
      />

      <Route
        path="/edit-dish/:id"
        element={<EditDish />}
      />

      <Route
        path="/order-history"
        element={<OrderHistory />}
      />

      <Route
        path="/details/:id"
        element={<Details />}
      />

      <Route
        path="/favorites"
        element={<Favorites />}
      />
    </Routes>
  )
}
