import { createSlice } from '@reduxjs/toolkit'

export const adicionarAoCarrinho = (game, cart) => {
  if (cart.find((product) => product.id === game.id)) {
    alert('Item já adicionado')
  } else {
    return setCart([...cart, game])
  }
}

const INITIAL_STATE = {
  cart: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    setCart(state, actions) {
      state.cart = actions.payload
    }
  }
})

export const { setCart } = cartSlice.actions
export const cartReducer = cartSlice.reducer
