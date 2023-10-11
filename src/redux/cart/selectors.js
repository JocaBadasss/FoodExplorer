import { convertPrice } from "../../utils/convertPrice"

export const selectDishsQuantity = (rootReducer) => {
  return rootReducer.cartReducer.dishs.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  )
}

export const selectCartTotal = (rootReducer) => {
  const total = rootReducer.cartReducer.dishs.reduce(
    (acc, curr) => acc + curr.quantity * curr.price_cents,
    0
  )

  return convertPrice(total)
}
