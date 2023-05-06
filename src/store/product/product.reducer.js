import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState: INITIAL_STATE,
  reducers: {
    setProducts(state, actions) {
      state.products = actions.payload
    }
  }
})

export const { setProducts } = productsSlice.actions
export const productsReducer = productsSlice.reducer
