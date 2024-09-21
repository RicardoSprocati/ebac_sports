import { configureStore } from '@reduxjs/toolkit'

import carrinhoReducer from './reducers/Carrinho'
import favoritoReducer from './reducers/Favoritos'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    favoritos: favoritoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type Rootreducer = ReturnType<typeof store.getState>
