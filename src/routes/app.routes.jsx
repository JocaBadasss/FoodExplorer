import { Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import Favorites from "../pages/Favorites"
import CheckOut from "../pages/CheckOut"
import Details from "../pages/DishDetails"
import Payment from "../pages/Payment"
import OrderHistory from "../pages/OrderHistory"

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/favorites"
        element={<Favorites />}
      />
      <Route
        path="/checkout"
        element={<CheckOut />}
      />
      <Route
        path="/details/:id"
        element={<Details />}
      />
      <Route
        path="/checkout/payment"
        element={<Payment />}
      />
      <Route
        path="/order-history"
        element={<OrderHistory />}
      />
    </Routes>
  )
}
