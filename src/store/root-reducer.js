import { combineReducers } from '@reduxjs/toolkit'

import { cartReducer } from './cart/cart.reducer'
import { productsReducer } from './product/product.reducer'

export const rootreducers = combineReducers({
  products: productsReducer,
  cartList: cartReducer
})
