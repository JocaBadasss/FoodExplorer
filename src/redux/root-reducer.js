import { combineReducers } from "redux"
import cartReducer from "./cart/slice"
import searchReducer from "./search/slice"

const rootReducer = combineReducers({ cartReducer, searchReducer })

export default rootReducer
