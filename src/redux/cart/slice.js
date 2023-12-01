import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  dishs: JSON.parse(localStorage.getItem("cart")) || [],
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addDish: (state, action) => {
      const dishIsAlreadyInCart = state.dishs.some(
        (dish) => dish.id === action.payload.id
      )

      if (dishIsAlreadyInCart) {
        state.dishs = state.dishs.map((dish) =>
          dish.id === action.payload.id
            ? {
                ...dish,
                quantity: dish.quantity + Number(action.payload.quantity),
              }
            : dish
        )
      } else {
        state.dishs = [
          ...state.dishs,
          { ...action.payload, quantity: Number(action.payload.quantity) },
        ]
      }

      localStorage.setItem("cart", JSON.stringify(state.dishs))
    },
    increaseDishQuantity: (state, action) => {
      state.dishs = state.dishs.map((dish) =>
        dish.id === action.payload.id
          ? {
              ...dish,
              quantity: dish.quantity + 1,
            }
          : dish
      )
    },
    decreaseDishQuantity: (state, action) => {
      state.dishs = state.dishs
        .map((dish) =>
          dish.id === action.payload.id
            ? {
                ...dish,
                quantity: dish.quantity - 1,
              }
            : dish
        )
        .filter((dish) => dish.quantity > 0)
    },

    removeDish: (state, action) => {
      state.dishs = state.dishs.filter((dish) => dish.id !== action.payload)

      localStorage.setItem("cart", JSON.stringify(state.dishs))
    },

    clearCart: (state) => {
      state.dishs = []

      localStorage.removeItem("cart")
    },
  },
})

export const { addDish, increaseDishQuantity, removeDish, clearCart } =
  cartSlice.actions

export default cartSlice.reducer
