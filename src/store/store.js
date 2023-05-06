import { configureStore } from '@reduxjs/toolkit'
import { rootreducers } from './root-reducer'

const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action)
  }

  console.log('type: ', action.type)
  console.log('payload: ', action.payload)
  console.log('currentState: ', store.getState())

  next(action)

  console.log('nextState: ', store.getState())
}

const middlewares = [process.env.NODE_ENV !== 'production' && loggerMiddleware]

export const store = configureStore({
  reducer: rootreducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(middlewares)
})
